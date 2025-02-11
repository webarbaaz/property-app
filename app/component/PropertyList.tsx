"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import Link from "next/link";

import { getProperties } from "@/lib/sanity/controller/controller.property";
import { Property } from "@/types";
import PropertyCard from "./PropertyCard";
import { Grid } from "@/app/component/ui/Grid";
import Text from "@/app/component/ui/Text";
import Loader from "./Loader";

interface PropertyFilters {
  propertyType?: string;
  propertyStatus?: string;
  city?: string;
  category?: string;
}

interface PropertyListProps {
  filters?: PropertyFilters;
  limit?: number;
  showNoMore?: boolean;
}

export default function PropertyList({
  filters = {},
  limit = 10,
  showNoMore = false,
}: PropertyListProps) {
  // ✅ Data Fetching with Infinite Scroll
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery<{
      data: Property[];
      nextPage: number | null;
    }>({
      queryKey: ["properties", filters],
      initialPageParam: 1,
      queryFn: async ({ pageParam = 1 }) => {
        const fetchedProperties = await getProperties(
          filters,
          pageParam as number,
          limit
        );
        return {
          data: fetchedProperties,
          nextPage: fetchedProperties.length ? (pageParam as number) + 1 : null,
        };
      },
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  const properties = data?.pages.flatMap((page) => page.data) || [];

  if (isLoading) return <Loader />;
  if (!properties.length) return <Text>No properties found.</Text>;

  return (
    <div style={{ width: "100%" }}>
      <InfiniteScroll
        dataLength={properties.length}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={
          isFetchingNextPage ? <Text>Loading more properties...</Text> : null
        }>
        <Grid cols={3} gap="lg">
          {properties.map((property) => (
            <Link key={property.slug} href={`/properties/${property.slug}`}>
              <PropertyCard property={property} />
            </Link>
          ))}
        </Grid>
        {showNoMore && !hasNextPage && !isLoading && (
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <Text>No more properties</Text>
          </div>
        )}
      </InfiniteScroll>
    </div>
  );
}

// // ✅ Wrap `PropertyListContent` in Suspense to fix Next.js warning
// export default function PropertyList(props: PropertyListProps) {
//   return (
//     <Suspense fallback={<Text>Loading search filters...</Text>}>
//       <PropertyListContent {...props} />
//     </Suspense>
//   );
// }
