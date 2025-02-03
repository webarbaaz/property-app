"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import { client } from "@/lib/qureies/sanity/client";
import { propertyListQuery } from "@/lib/qureies/property";

const fetchProperties = async ({ pageParam = 0, filters }) => {
  const params = {
    propertyType: filters.propertyType || undefined,
    propertyStatus: filters.propertyStatus || undefined,
    propertyLocation: filters.propertyLocation || undefined,
    start: pageParam * 10, // Pagination logic (e.g., 10 items per page)
    end: (pageParam + 1) * 10,
  };

  return client.fetch(propertyListQuery, params);
};

export default function PropertyList({ filters }) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["properties", filters],
      ({ pageParam = 0 }) => fetchProperties({ pageParam, filters }),
      {
        getNextPageParam: (lastPage, pages) =>
          lastPage.length === 10 ? pages.length : undefined,
      }
    );

  return (
    <div>
      <h2 className="text-xl font-bold">Property Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.pages.map((page) =>
          page.map((property) => (
            <div key={property._id} className="p-4 border rounded-lg">
              <Image
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{property.title}</h3>
              <p>
                {property.propertyType} - {property.propertyStatus}
              </p>
              <p>{property.propertyLocation}</p>
              <p className="text-gray-600">
                {property.bedrooms} Bed | {property.bathrooms} Bath |{" "}
                {property.squareFeet} sqft
              </p>
              <p className="text-green-600 font-semibold">${property.price}</p>
            </div>
          ))
        )}
      </div>

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}
