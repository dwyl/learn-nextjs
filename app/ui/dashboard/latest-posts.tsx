import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchRecentPosts } from '@/app/lib/data';


export default async function LatestPosts() {

  const latestPosts = await fetchRecentPosts();
  const postUrl = (id: number) => {
    return `/dashboard/posts/${id}`
  }
  const ids = [17494745,  4185328, 194400, 13881801, 1271181, 
    6190813, 12719553, 13434452, 3187525, 251937, 1150553
  ];
  const avatarUrl = (id: number) => {
    return "https://avatars.githubusercontent.com/u/" + ids[id-1] + "?s=50";
  }
  const profileUrl = (id: number) => {
    return "https://api.github.com/user/" + ids[id-1]
  }

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Posts
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {
          <ul
            role="list"
            className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
          >
            {latestPosts.map((post, i) => {
              return (
                <li
                  key={post.id}
                  className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <div className="hidden sm:flex sm:flex-col">
                      <a className="text-sm leading-6 text-gray-900" 
                        href={profileUrl(post.id)}>
                        <img className="inline-block h-6 w-6 rounded-full" 
                          src={avatarUrl(post.id)} />
                      </a>
                    </div>
                    <div className="min-w-0 flex-auto">
                      <div className="mt-1 flex text-xs leading-5 text-gray-500">
                        <a className="relative truncate hover:underline" href={postUrl(post.id)}>
                          {post.title}
                        </a>
                      </div>
                    </div>
                  </div>
                  <a className="flex shrink-0 items-center gap-x-4" href={postUrl(post.id)}>
                    <svg
                      className="h-5 w-5 flex-none text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              );
            })}
          </ul>
        }
        <div className="flex items-center pb-2 pt-6" >
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
