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

export async function fetchPhotos() {
  const photos_res = await fetch(BASE_URL + 'photos', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

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

export async function fetchRevenue() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  try {
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
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

export async function fetchInvoiceById(id: string) {
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
