import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchRecentPhotos } from '@/app/lib/data';
import Image from 'next/image';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function LatestPhotos() {
  
  const latestPhotos = await fetchRecentPhotos();

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Photos
      </h2>

      <div className="rounded-xl bg-gray-50 p-4">
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8"
        >
          {latestPhotos.map((photo) => (
            <li key={photo.id} className="relative">
              <div className="aspect-h-7 aspect-w-10 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <Image
                  src={photo.thumbnailUrl}
                  width={700}
                  height={500}
                  alt={photo.title}
                  className="pointer-events-none object-cover group-hover:opacity-75"
                />
              </div>
              <div className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                {photo.title}
              </div>
              <div className="pointer-events-none block text-sm font-medium text-gray-500">
                from album {photo.albumId}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center pb-2 pt-6">
        <CalendarIcon className="h-5 w-5 text-gray-500" />
        <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
      </div>
    </div>
  );
}
