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
import { useSearchParams } from "next/navigation";

interface PropertyFilters {
  propertyType?: string;
  propertyStatus?: string;
  location?: string;
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
  const searchParams = useSearchParams();
  const projectType = searchParams.get("propertyType") ?? "";
  const propertyStatus = searchParams.get("propertyStatus") ?? "";
  const location = searchParams.get("location") ?? "";

  // ✅ Data Fetching with Infinite Scroll
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery<{
      data: Property[];
      nextPage: number | null;
    }>({
      queryKey: ["properties", filters],
      initialPageParam: 1,
      queryFn: async ({ pageParam = 1 }: { pageParam: number }) => {
        const fetchedProperties = await getProperties(
          {
            ...filters,
            propertyStatus: propertyStatus,
            propertyType: projectType,
            location,
          },
          pageParam,
          limit
        );
        return {
          data: fetchedProperties,
          nextPage: fetchedProperties.length ? pageParam + 1 : null,
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
        }
      >
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
