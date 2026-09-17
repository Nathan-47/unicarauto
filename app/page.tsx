import Link from 'next/link'
import features from './components/features'

export default function Home() {
  return (
    <main>
      <div className="relative isolate px-6 pt-14 lg:px-8">

              <div className="mx-auto max-w-2xl py-8 sm:py-8 lg:py-20">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
                    Cars that make sense for students.
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    Are you a student or young person and cant get your head around
                    cars? No sweat here at Unicar we’ve got you covered explore the
                    site and we guarantee you’ll be more car ready  than ever before.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                      href="/cars"
                      className="rounded-md bg-green-500 px-3.5 py-2.5 text-2xl text-white font-bold shadow-xs hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                    >
                      Find your car
                    </Link>
                  </div>
                </div>
              </div>
              </div>
      
            {/* how it works section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                  How it works
                </h2>
              </div>
              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                      <dt className="text-base/7 font-semibold text-gray-900">
                        <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-gray-900">
                          <feature.icon
                            aria-hidden="true"
                            className="size-6 text-white"
                          />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-2 text-base/7 text-gray-600">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
    </main>
  )};
