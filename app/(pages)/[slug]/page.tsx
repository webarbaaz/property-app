import { Metadata } from "next";
import MainLayout from "../../component/layout/MainLayout";
import { client } from "@/lib/sanity/client";
import { pageQuery } from "@/lib/sanity/qureies/pageQuery";
import { notFound } from "next/navigation";
import Container from "@/app/component/ui/Container";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Text from "@/app/component/ui/Text";

// Setup the Sanity image builder
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source).url();
}

// Define serializers for rich text rendering
const components = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value.asset)}
        alt="Sanity Image"
        className="rounded-lg"
      />
    ),
  },
};
type PageProps = {
  params: { slug: string };
};

// Fetch Page Data (Runs on the server)
async function getPageData(slug: string) {
  const pageData = await client.fetch(pageQuery, { slug });
  if (!pageData) {
    notFound();
  }
  return pageData;
}

// Generate SEO Metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const pageData = await getPageData(params.slug);
  return {
    title: pageData?.title || "Default Title",
    description: pageData?.description || "Default description",
  };
}

// Generate Static Paths
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "page"].slug.current`);
  return slugs.map((slug: string) => ({ slug }));
}

export default async function Page({ params }: PageProps) {
  const pageData = await getPageData(params.slug);
  console.log("pageData", pageData);
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
