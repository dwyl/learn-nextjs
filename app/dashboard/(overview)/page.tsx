import LatestPosts from '@/app/ui/dashboard/latest-posts';
import LatestPhotos from '@/app/ui/dashboard/latest-photos';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import {
  PhotosSkeleton,
  LatestPostsSkeleton,
} from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"></div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<PhotosSkeleton />}>
          <LatestPhotos />
        </Suspense>
        <Suspense fallback={<LatestPostsSkeleton />}>
          <LatestPosts />
        </Suspense>
      </div>
    </main>
  );
}
