// // import { Metadata } from "next";
// import MainLayout from "../../component/layout/MainLayout";
// import { client } from "@/lib/sanity/client";
// import { pageQuery } from "@/lib/sanity/qureies/pageQuery";
// import { notFound } from "next/navigation";
// import Container from "@/app/component/ui/Container";
// import { PortableText } from "@portabletext/react";
// import Image from "next/image";
// import Text from "@/app/component/ui/Text";
// import generateImageUrl from "@/lib/sanity/utils/imageBuilder";

// // Define the expected PageProps type correctly
// type PageProps = {
//   params: { slug: string };
// };

// // Define serializers for rich text rendering
// interface SanityImageAsset {
//   _type: "image";
//   asset: {
//     _ref?: string;
//     url?: string;
//   };
// }

// const components = {
//   types: {
//     image: ({ value }: { value: SanityImageAsset }) => {
//       const imageUrl =
//         value.asset.url ||
//         (value.asset._ref ? generateImageUrl(value.asset._ref) : "");

//       if (!imageUrl) return null; // Handle case where no valid URL is available

//       return (
//         <Image
//           src={imageUrl}
//           alt="Sanity Image"
//           width={500}
//           height={500}
//           className="rounded-lg w-full my-3"
//         />
//       );
//     },
//   },
// };

// // Fetch Page Data (Runs on the server)
// async function getPageData(slug: string) {
//   if (!slug) {
//     notFound();
//   }
//   const pageData = await client.fetch(pageQuery, { slug });
//   if (!pageData) {
//     notFound();
//   }
//   return pageData;
// }

// // // Generate SEO Metadata
// // export async function generateMetadata({
// //   params,
// // }: PageProps): Promise<Metadata> {
// //   const pageData = await getPageData(params.slug);
// //   return {
// //     title: pageData?.title || "Default Title",
// //     description: pageData?.description || "Default description",
// //   };
// // }

// // // Generate Static Paths
// // export async function generateStaticParams(): Promise<
// //   { params: { slug: string } }[]
// // > {
// //   const slugs: string[] = await client.fetch(`*[_type == "page"].slug.current`);
// //   return slugs.map((slug) => ({ params: { slug } }));
// // }

// // Corrected Page Component with Proper Typing
// export default async function Page({ params }: { params: { slug: string } }) {
//   const pageData = await getPageData(params.slug);

//   return (
//     <MainLayout>
//       <Container className="space-y-10 py-10">
//         <Text weight={"bold"} size={"4xl"} className="text-center">
//           {pageData.name}
//         </Text>
//         <div>
//           <PortableText value={pageData.content} components={components} />
//         </div>
//       </Container>
//     </MainLayout>
//   );
// }
