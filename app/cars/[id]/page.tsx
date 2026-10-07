import Link from "next/link";
import { sql } from "@/app/lib/db";
import { EmblaCarousel } from "@/app/components/carousel";

export default async function carDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = await sql`
      select key, alt from car_images WHERE car_id = ${id} order by position, id
    `;

    TODO:// Add notFound() here
  if (!car) {
    return <div className="mx-auto max-w-2xl p-8">Car not found</div>;
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link className="text-blue-700 hover:underline" href="/cars">
        Back to cars
      </Link>

      {car.length > 0 && (
        <EmblaCarousel
          images={car.map((image) => ({
            src: `${process.env.R2_PUBLIC_URL}/${image.key}`,
            alt: image.alt ?? "",
          }))}
        />
      )}
    </div>
  );
}
