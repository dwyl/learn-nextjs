import { sql } from '@vercel/postgres';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Revenue,
  Post,
  Photo,
} from './definitions';
import { formatCurrency } from './utils';
import randomString from 'randomstring';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

/**
 * Fetches all the photos from the API
 * @returns array of JSON photo objects.
 */
export async function fetchPhotos() {
  // Using `fetch` with the default cache options
  const photos_res = await fetch(BASE_URL + 'photos', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  // Map over the response from API and using `picsum.photos` to change the URL
  const photos: Photo[] = await photos_res.json();
  let mappedPhotos = photos.map((photo) => {
    const seed = randomString.generate({
      length: 10,
      charset: 'alphabetic',
    });

    photo.thumbnailUrl = `https://picsum.photos/seed/${seed}/300`;
    photo.url = `https://picsum.photos/seed/${seed}`;
    return photo;
  });

  return mappedPhotos;
}

/**
 * Fetch recent photos for the 
 * @returns 
 */
export async function fetchRecentPhotos() {
  //Artificially delay a response for demo purposes.
  //Don't do this in production :)
  console.log('Fetching photos data...');
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (await fetchPhotos()).slice(0, 4);
}

export async function fetchPosts() {
  console.log('Fetching posts data...');
  const posts_res = await fetch(BASE_URL + 'posts', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  return (await posts_res.json()) as Post[];
}

export async function fetchRecentPosts() {
  return (await fetchPosts()).slice(0, 10);
}

export async function fetchPostWithId(id: string) {
  const posts_res = await fetch(BASE_URL + 'posts/' + id, {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  return (await posts_res.json()) as Post;
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  posts: Post[],
  query: string,
  currentPage: number,
) {
  // Paginates the array
  function paginate(array: Post[], page_size: number, page_number: number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  // Filters the posts where properties have the search query
  function filterThePosts(posts: Post[], query: string) {
    return posts.filter(element => {
      for (let key in element) {
          if (element[key].toString().toLowerCase().includes(query.toLowerCase())) {
              return true;
          }
      }
      return false;
  })
  }

  const data = paginate(posts, ITEMS_PER_PAGE, currentPage);
  return {pagePosts: filterThePosts(data, query), filteredPosts: filterThePosts(posts, query)}
}

export async function fetchInvoicesPages(filteredPosts: Post[]) {
    const totalPages = Math.ceil(Number(filteredPosts.length) / ITEMS_PER_PAGE);
    return totalPages;
}
