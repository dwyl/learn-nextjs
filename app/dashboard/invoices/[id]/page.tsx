import { fetchPostWithId } from '@/app/lib/data';

export default async function PostPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await fetchPostWithId(id);

  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <span className="text-gray-500">Post #{post.id}</span>
          <a
            href="#"
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            from user {post.userId}
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span className="absolute inset-0"></span>
              {post.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.body}
          </p>
        </div>
      </div>
    </article>
  );
}
