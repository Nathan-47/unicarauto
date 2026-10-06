import Link from "next/link";
import Image from 'next/image';
import { sql } from "../lib/db";

export default async function Cars() {
const cars = await sql`
  SELECT DISTINCT ON (c.id)
    c.*,
    ci.key AS image_key,
    ci.alt AS image_alt
  FROM "Cars" c
  LEFT JOIN car_images ci ON ci.car_id = c.id
  ORDER BY c.id, ci.position, ci.id
`;

if (cars.length === 0) {
  return <div className="mx-auto max-w-2xl p-8">Cars not found</div>;
}

const carElements = cars.map((car) => (
  <div key={car.id} className="car-tile">
    <Link href={`/cars/${car.id}`}>
      {car.image_key && (
        <Image
          className="w-full h-[150px] object-cover"
          src={`${process.env.R2_PUBLIC_URL}/${car.image_key}`}
          alt={car.image_alt ?? `${car.colour} ${car.make}`}
          width="800"
          height="600"
          loading="lazy"
        />
      )}
      <p className="mt-3 font-black">{car.name}</p>
      <dd className="mt text-base/7 text-gray-600">£{car.price}</dd>
    </Link>
  </div>
));

  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-38 lg:py top-space">
      <h1 className="p-4 !-mt-30 block text-lg font-black -mb-6">
        Search for cars for uni students
      </h1>
      <p className="p-4 mt-3 -mb-10">
        Check out the range of car available that can be the right fit for you.
        Please take your time, check what car suits you and make sure to save it
        for later and ask C-4R for help.
      </p>
      <div className="!m-auto p-4">
        <div className="grid grid-cols-2 max-[500px]:grid-cols-1 gap-6 mt-10 sm:grid-cols-3">
          {carElements}
        </div>
      </div>
    </div>
  );
}

