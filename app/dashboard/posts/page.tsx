import Search from '@/app/ui/search';
import Table from '@/app/ui/posts/table';
import { lusitana } from '@/app/ui/fonts';
import { PostsTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import React from 'react';
import { fetchPosts } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  // We know it will get called on each re-render but we're just keeping it simple to not use a database and simply call public, external APIs.
  // This function caches the data to avoid repeated API calls - https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#caching-data
  const allPosts = await fetchPosts();

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Posts</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search posts..." />
      </div>
      <Suspense key={query + currentPage} fallback={<PostsTableSkeleton />}>
        <Table allPosts={allPosts} query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
