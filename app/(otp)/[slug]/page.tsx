"use client";
// import { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { pageQuery } from "@/lib/sanity/qureies/pageQuery";
import { useParams } from "next/navigation";
import Container from "@/app/component/ui/Container";
import { PortableText, PortableTextComponentProps } from "@portabletext/react";
import Image from "next/image";
import Text from "@/app/component/ui/Text";
import generateImageUrl from "@/lib/sanity/utils/imageBuilder";
import MainLayout from "@/app/component/layout/MainLayout";
import { useEffect, useState } from "react";
import { TypedObject } from "@portabletext/types";
import Loader from "@/app/component/Loader";

// Define the expected PageProps type correctly
// type PageProps = {
//   params: { slug: string };
// };

// Define serializers for rich text rendering
interface SanityImageAsset {
  _type: "image";
  asset: {
    _ref?: string;
    url?: string;
  };
}

async function getPageData(slug: string): Promise<null> {
  return await client.fetch(pageQuery, { slug });
}

import { PortableTextReactComponents } from "@portabletext/react";

export const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: SanityImageAsset }) => {
      const imageUrl =
        value.asset.url ||
        (value.asset._ref ? generateImageUrl(value.asset._ref) : "");

      if (!imageUrl) return null;

      return (
        <Image
          src={imageUrl}
          alt="Sanity Image"
          width={500}
          height={500}
          className="rounded-lg w-full my-3"
        />
      );
    },
  },
  block: {
    h1: ({ children }: PortableTextComponentProps<unknown>) => (
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }: PortableTextComponentProps<unknown>) => (
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }: PortableTextComponentProps<unknown>) => (
      <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
        {children}
      </h3>
    ),
    h4: ({ children }: PortableTextComponentProps<unknown>) => (
      <h4 className="text-xl font-medium text-gray-600 dark:text-gray-400 mb-2">
        {children}
      </h4>
    ),
    h5: ({ children }: PortableTextComponentProps<unknown>) => (
      <h5 className="text-lg font-medium text-gray-500 dark:text-gray-500 mb-2">
        {children}
      </h5>
    ),
    h6: ({ children }: PortableTextComponentProps<unknown>) => (
      <h6 className="text-base font-medium text-gray-400 dark:text-gray-500 mb-2">
        {children}
      </h6>
    ),
    normal: ({ children }: PortableTextComponentProps<unknown>) => (
      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }: PortableTextComponentProps<unknown>) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-400 my-4">
        {children}
      </blockquote>
    ),
    ul: ({ children }: PortableTextComponentProps<unknown>) => (
      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    ol: ({ children }: PortableTextComponentProps<unknown>) => (
      <ol className="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
    li: ({ children }: PortableTextComponentProps<unknown>) => (
      <li className="ml-4">{children}</li>
    ),
  },
};

// Fetch Page Data (Runs on the server)
// // Generate SEO Metadata
// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const pageData = await getPageData(params.slug);
//   return {
//     title: pageData?.title || "Default Title",
//     description: pageData?.description || "Default description",
//   };
// }

// // Generate Static Paths
// export async function generateStaticParams(): Promise<
//   { params: { slug: string } }[]
// > {
//   const slugs: string[] = await client.fetch(`*[_type == "page"].slug.current`);
//   return slugs.map((slug) => ({ params: { slug } }));
// }

// Corrected Page Component with Proper Typing
export default function Page() {
  const params = useParams();
  const slug = params?.slug
    ? Array.isArray(params.slug)
      ? params.slug[0]
      : params.slug
    : null;

  const [pageData, setPageData] = useState<{
    name: string;
    content: TypedObject;
  }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchPageData = async () => {
      try {
        const data = await getPageData(slug);
        if (data) {
          setPageData(data);
        }
      } catch (error) {
        console.error("Failed to fetch page data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [slug]);

  if (loading) return <Loader />;
  if (!pageData) return <p>Page not found.</p>;

  return (
    <MainLayout>
      <Container className="space-y-10 py-10">
        <Text weight={"bold"} size={"4xl"} className="text-center">
          {pageData.name}
        </Text>
        <div>
          <PortableText value={pageData.content} components={components} />
        </div>
      </Container>
    </MainLayout>
  );
}
