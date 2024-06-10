import { Post, Photo } from './definitions';
import randomString from 'randomstring';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';
const ITEMS_PER_PAGE = 6;

/**
 * Fetches all the photos from the API.
 * @returns array of JSON photo objects.
 */
export async function fetchPhotos() {
  // Using `fetch` with the default cache options
  const photos_res = await fetch(BASE_URL + 'photos', {
    headers: {
      'Content-Type': 'application/json',
    },
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
 * Fetch recent photos for the home recent photos.
 * @returns 4 JSON photo objects.
 */
export async function fetchRecentPhotos() {
  // Artificially delay a response for demo purposes.
  // Don't do this in production :)
  console.log('Fetching photos data...');
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (await fetchPhotos()).slice(0, 4);
}

/**
 * Fetches all the posts from the API.
 * @returns array of JSON post objects.
 */
export async function fetchPosts() {
  const posts_res = await fetch(BASE_URL + 'posts', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return (await posts_res.json()) as Post[];
}

/**
 * Fetches the 10 most recent posts.
 * @returns array of JSON post objects.
 */
export async function fetchRecentPosts() {
  return (await fetchPosts()).slice(0, 10);
}

/**
 * Fetches a single post from the API.
 * @param id the id of the post.
 * @returns a JSON post object.
 */
export async function fetchPostWithId(id: string) {
  const posts_res = await fetch(BASE_URL + 'posts/' + id, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return (await posts_res.json()) as Post;
}

/**
 * Fetches filtered posts.
 * @param posts array with all the posts.
 * @param query query to filter the posts to. It will apply to all properties.
 * @param currentPage current page in the pagination table.
 * @returns array of filtered posts.
 */
export async function fetchFilteredPosts(
  posts: Post[],
  query: string,
  currentPage: number,
) {
  // Returns the page in a given array.
  function paginate(array: Post[], page_size: number, page_number: number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  // Filters the posts where properties have the search query
  function filterThePosts(posts: Post[], query: string) {
    return posts.filter((element) => {
      for (let key in element) {
        if (
          element[key].toString().toLowerCase().includes(query.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
  }

  const data = paginate(posts, ITEMS_PER_PAGE, currentPage);
  return {
    pagePosts: filterThePosts(data, query),
    filteredPosts: filterThePosts(posts, query),
  };
}

/**
 * Calculates the number of total pages in the pagination table.
 * @param filteredPosts the filtered posts in case the query is not empty.
 * @returns the number of pages.
 */
export async function fetchPostsPages(filteredPosts: Post[]) {
  const totalPages = Math.ceil(Number(filteredPosts.length) / ITEMS_PER_PAGE);
  return totalPages;
}
