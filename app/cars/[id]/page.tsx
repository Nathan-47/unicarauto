import Link from 'next/link'
import {sql} from "@/app/lib/db"

export default async function carDetailsPage({params}:{
    params:Promise<{id:string}>
}) {

     const { id } = await params;
     console.log(id)
     const result = await sql `SELECT * FROM "Cars" WHERE id = ${id}`;
     const car = result[0];

     if(!car) {
        return <div className="mx-auto max-w-2xl p-8">Car not found</div>;
     }

    return (
         <div className="mx-auto max-w-2xl sm:py-20 lg:py-20 p-8">
              <Link
                className="no-underline hover:underline text-blue-700"
                href={{
                  pathname: "/cars",
                }}
              >
                Back to cars
              </Link>
        
              <div className="flex grid-cols-2 gap-4 max-[660px]:inline-grid max-[660px]:grid-cols-1">
                <div>
                  <p className="car-title">{car.make}</p>
                  <p className="car-price mb-4">£{car.price}</p>
                </div>
                <div>
                  <img
                    className="car-photo"
                    src={car.imgUrl}
                    alt={car.name}
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                </div>
              </div>
        
              <div className="mt-15">
                <h2 className="!mb-3">Car Details</h2>
                {car.description}
              </div>
        
              {/* <div className="mt-10">
                <h3 className="!mb-3">Specs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {specs.map((spec, index) => {
                    const Icon = spec.icon;
        
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 border rounded-xl"
                      >
                        <Icon className="w-6 h-6 text-blue-600" />
        
                        <div>
                          <p className="text-sm text-gray-500">{spec.label}</p>
                          <p className="font-medium">{spec.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div> */}
            </div>
    )
}