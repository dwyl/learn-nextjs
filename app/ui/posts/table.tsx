import {
  fetchFilteredPosts,
  fetchPostsPages,
} from '@/app/lib/data';
import { Post } from '@/app/lib/definitions';
import Pagination from './pagination';
import Link from 'next/link';

export default async function PostsTable({
  allPosts,
  query,
  currentPage,
}: {
  allPosts: Post[];
  query: string;
  currentPage: number;
}) {
  const { pagePosts, filteredPosts } = await fetchFilteredPosts(
    allPosts,
    query,
    currentPage,
  );
  const totalPages = await fetchPostsPages(filteredPosts);

  return (
    <>
      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
              {pagePosts?.map((post) => (
                <div
                  key={post.id}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <p>{post.id}</p>
                      </div>
                      <p className="text-sm text-gray-500">{post.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    ID
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    User ID
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {pagePosts?.map((post) => (
                  <tr
                    key={post.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <p>{post.id}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <Link key={post.id} href={`posts/${post.id}`} passHref>
                        {post.title}
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {post.userId}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
