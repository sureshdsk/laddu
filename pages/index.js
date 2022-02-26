import Link from "next/link";
import Head from 'next/head'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'


const features = [
  {
    name: 'Next.js API Server',
    description:
      'API is develeped using nextjs functions. Can be used in serverless function services like Netlify functions with one click.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Swagger API Documentation',
    description:
      'Beautiful documentation and api playground for the rest api built using swagger.',
    icon: ScaleIcon,
  },

  {
    name: 'Open source',
    description:
      'Source code is open source. Fork it. Customise it. Do whatever you want.',
    icon: AnnotationIcon,
  },


]


const Index = () => (
  <>
    <Head>
      <title>Laddu Notion</title>
    </Head>
    <div id="main-container" className=" flex h-screen">
      <div className="container max-w-7xl m-auto align-middle">
        <div className="relative z-10 py-12 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32">

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-indigo-600 xl:inline">Laddu Notion</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Use Notion database to create a quick CRUD API service and Swagger API playground without writing any code.
              </p>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#how-to"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

    </div>

    <div className="container mx-auto py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl ">Features</h2>
          <p className="mt-4 text-xl text-gray-500 lg:mx-auto">
            Good for building internal dashboards, mock api servers, 3rd party webhook integrations.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>


    <div className="container mx-auto py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <h2 id="how-to" className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl ">How to setup?</h2>
          <p className="mt-4 text-xl text-gray-500 lg:mx-auto">
            Clone the github repository -> Enter the secret key for your Notion Integration -> Share database to the Notion Integration -> Deploy
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Index;
