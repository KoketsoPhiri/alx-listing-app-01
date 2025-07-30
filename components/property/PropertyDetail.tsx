// components/property/PropertyDetail.tsx
import React, { useState } from 'react';
import { PropertyProps } from "@/interfaces/index";
import BookingSection from './BookingSection';
import ReviewSection from './ReviewSection';

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'host'>('description');

  const renderRatingStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-gray-600 text-sm">({property.rating})</span>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      {/* Property Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          {property.name}
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-2 text-gray-600 text-lg">
          {renderRatingStars(property.rating)}
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {property.address.city}, {property.address.country}
          </span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 rounded-xl overflow-hidden shadow-lg">
        <div className="md:col-span-2 lg:col-span-2 row-span-2">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl md:rounded-tr-none md:rounded-br-none"
          />
        </div>
        {property.images.slice(1, 5).map((img, index) => (
          <div key={index} className="relative aspect-video lg:aspect-square">
            <img
              src={img}
              alt={`${property.name} ${index + 2}`}
              className="w-full h-full object-cover"
            />
            {index === 3 && property.images.length > 5 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-bold">
                +{property.images.length - 5} More
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {/* Left Column - Description, Amenities, Reviews */}
        <div className="lg:col-span-2">
          {/* Tabs for Description, Reviews, About Host */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('description')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${
                  activeTab === 'description'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                What we offer
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${
                  activeTab === 'reviews'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Reviews ({property.reviews.length})
              </button>
              <button
                onClick={() => setActiveTab('host')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${
                  activeTab === 'host'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                About Host
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6 text-gray-700 text-lg leading-relaxed">
            {activeTab === 'description' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">About this place</h2>
                <p>{property.whatWeOffer || property.description}</p>
              </div>
            )}
            {activeTab === 'reviews' && <ReviewSection reviews={property.reviews} />}
            {activeTab === 'host' && (
              <div>
                <h2 className="text-2xl font-bold mb-4">About your Host</h2>
                <p>{property.aboutHost}</p>
              </div>
            )}
          </div>

          {/* Amenities */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4">What this place offers</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              {property.category.map((amenity, index) => (
                <li key={index} className="flex items-center space-x-3">
                  {/* You can replace this generic icon with specific icons later */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Booking Section */}
        <div className="lg:col-span-1">
          <BookingSection price={property.pricePerNight} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;