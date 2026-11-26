import Link from "next/link";
import { EmblaCarousel } from "@/app/components/carousel";
import { notFound } from "next/navigation";
import { getCarById } from "@/app/lib/cars";

export default async function carDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const car = await getCarById(id);

  if (!car) notFound();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <Link
        href="/cars"
        className="inline-flex items-center gap-2 text-lg font-bold text-[#00c94f] underline decoration-solid transition hover:text-gray-900"
      >
        Back to cars
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-5 lg:gap-12">
        {/* Carousel */}
        <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm lg:col-span-3">
          <EmblaCarousel
            images={car.images.map((image) => ({
              src: `${process.env.R2_PUBLIC_URL}/${image.key}`,
              alt: image.alt ?? "",
              loading: "eager",
            }))}
          />
        </div>

        {/* Details */}
        <div className="lg:col-span-2">
          <div className="space-y-6 lg:sticky lg:top-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {car.name}
              </h1>
              <p className="mt-2 text-2xl font-semibold text-[#00c94f]">
                £{car.price}
              </p>
            </div>

            {/* Spec chips */}
            <dl className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <dt className="text-xs uppercase tracking-wide text-gray-500">
                  Fuel
                </dt>
                <dd className="mt-1 font-medium capitalize text-gray-900">
                  {car.fuel_type}
                </dd>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <dt className="text-xs uppercase tracking-wide text-gray-500">
                  Year
                </dt>
                <dd className="mt-1 font-medium text-gray-900">{car.year}</dd>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <dt className="text-xs uppercase tracking-wide text-gray-500">
                  Transmission
                </dt>
                <dd className="mt-1 font-medium text-gray-900">
                  {car.transmission}
                </dd>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <dt className="text-xs uppercase tracking-wide text-gray-500">
                  Mileage
                </dt>
                <dd className="mt-1 font-medium text-gray-900">
                  {car.mileage}
                </dd>
              </div>
            </dl>

            {/* Description */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                About this car
              </h2>
              <p className="mt-2 leading-relaxed text-gray-600">
                {car.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
