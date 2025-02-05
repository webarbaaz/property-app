import { Metadata } from "next";
import MainLayout from "../component/layout/MainLayout";
import { client } from "@/lib/sanity/client";
import { pageQuery } from "@/lib/sanity/qureies/pageQuery";
import { notFound } from "next/navigation";

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

  return (
    <MainLayout>
      <div>
        <h1>{pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
      </div>
    </MainLayout>
  );
}
