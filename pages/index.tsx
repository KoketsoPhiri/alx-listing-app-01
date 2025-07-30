// pages/index.tsx
import Head from 'next/head';
//import Image from 'next/image';
import Card from '../components/common/Card';
import Pill from '../components/common/Pill'; // Import the Pill component
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND_IMAGE, FILTER_LABELS } from '../constants'; // Import constants
import { PropertyProps } from '../interfaces'; // Import PropertyProps

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>ALX Listing App - Find Your Favorite Place</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text readability */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl font-medium drop-shadow-md">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Main content area */}
      <main className="flex-1 container mx-auto px-6 py-8">
        {/* Filter Section (Pills) - Moved here from header for better component separation based on instruction */}
        <section className="mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex space-x-3 py-2 justify-center md:justify-start">
            {FILTER_LABELS.map((label) => (
              <Pill key={label} label={label} onClick={() => console.log(`Filter: ${label}`)} />
            ))}
          </div>
        </section>

        {/* Listing Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PROPERTYLISTINGSAMPLE.map((property: PropertyProps) => (
              <Card
                key={property.name} // Using name as key, ideally use a unique ID
                title={property.name}
                description={`${property.address.city}, ${property.address.country} - ${property.rating} ★`}
                imageUrl={property.image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
