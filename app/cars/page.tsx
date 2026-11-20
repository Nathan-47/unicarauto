import Link from "next/link";
import Image from "next/image";
import { sortCars } from "../lib/cars";
import SortControls from "../components/sortControls";
import PaginationControls from "../components/paginationControls";

export default async function Cars({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string; page?: string }>;
}) {
  const { sort, page } = await searchParams;

  const currentPage = Math.max(1, Number(page) || 1);

  const cars = await sortCars(sort, currentPage);

  if (cars.length === 0) {
    return <div className="mx-auto max-w-2xl p-8">Cars not found</div>;
  }

  const carElements = cars.map((car) => (
    <div key={car.id} className="car-tile">
      <Link href={`/cars/${car.id}`} className="block">
        {car.image_key && (
          <Image
            className="aspect-[4/3] w-full rounded-lg object-cover"
            src={`${process.env.R2_PUBLIC_URL}/${car.image_key}`}
            alt={car.image_alt ?? `${car.colour} ${car.make}`}
            width={800}
            height={600}
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            loading="lazy"
          />
        )}
        <p className="mt-3 font-black">{car.name}</p>
        <p className="text-base/7 text-gray-600">£{car.price}</p>
      </Link>
    </div>
  ));

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-10 sm:py-24 lg:px-10">
      <h1 className="text-xl font-black sm:text-2xl lg:text-3xl">
        Search for cars for uni students
      </h1>

      <p className="mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
        Check out the range of car available that can be the right fit for you.
        Please take your time, check what car suits you and make sure to save it
        for later and ask C-4R for help.
      </p>

      <div className="mt-8">
        <SortControls />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {carElements}
      </div>

      <div className="mt-10 flex justify-center">
        <PaginationControls currentPage={currentPage} />
      </div>
    </div>
  );
}
