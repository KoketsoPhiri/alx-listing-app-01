import Head from 'next/head';
// Consider importing Next.js Image component for optimized images
//import Image from 'next/image';
import Card from '../components/common/Card';
import Pill from '../components/common/Pill';
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND_IMAGE, FILTER_LABELS } from '../constants';
import { PropertyProps } from '../interfaces';

export default function Home() {
  const pageTitle = "ALX Listing App - Find Your Dream Home, Apartment & Properties Worldwide";
  const pageDescription = "Explore over 2 million properties worldwide with ALX Listing App. Find the best prices for houses, apartments, and commercial real estate. Your ultimate guide to finding your favorite place!";
  const ogImageUrl = "/og-image.jpg"; // Replace with an actual URL to an attractive image for social sharing

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        {/* Primary SEO Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://yourwebsite.com/" /> {/* Replace with your actual domain */}

        {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" /> {/* Replace with your actual domain */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content="ALX Listing App - Diverse properties and homes" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://yourwebsite.com/" /> {/* Replace with your actual domain */}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:image:alt" content="ALX Listing App - Diverse properties and homes" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* More favicons for better cross-device compatibility: */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> */}
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-[400px] flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // Optionally add an alt attribute for the background image if it were an <img> tag
          // For CSS background images, ensure the surrounding text or accessible description conveys its purpose.
        }}
        aria-label="Hero section with a captivating image of a dream property" // ARIA label for accessibility
      >
        <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true"></div> {/* Overlay for better text readability */}
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Find Your Dream Home, Apartment, or Commercial Property Here!
          </h1>
          <p className="text-lg md:text-xl font-medium drop-shadow-md">
            Discover and compare the best prices for over 2 million properties worldwide. Your perfect place awaits!
          </p>
        </div>
      </section>

      {/* Main content area */}
      <main className="flex-1 container mx-auto px-6 py-8">
        {/* Filter Section (Pills) */}
        <section className="mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide" aria-labelledby="property-filters">
          <h2 id="property-filters" className="sr-only">Filter Properties by Type or Location</h2> {/* SR-only heading for accessibility */}
          <div className="flex space-x-3 py-2 justify-center md:justify-start">
            {FILTER_LABELS.map((label) => (
              <Pill key={label} label={label} onClick={() => console.log(`Filter: ${label}`)} />
            ))}
          </div>
        </section>

        {/* Listing Section */}
        <section aria-labelledby="featured-properties">
          <h2 id="featured-properties" className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Featured Properties & Real Estate Listings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PROPERTYLISTINGSAMPLE.map((property: PropertyProps) => (
              <Card
                key={property.name} // Using name as key, ideally use a unique ID
                title={property.name}
                description={`${property.address.city}, ${property.address.country} - ${property.rating} ★`}
                imageUrl={property.image}
                // If you switch to Next.js Image component, remember to add 'alt' prop:
                // alt={`Image of ${property.name} property in ${property.address.city}`}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
