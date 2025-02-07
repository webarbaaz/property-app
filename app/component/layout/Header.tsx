"use client";

import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import HStack from "../ui/HStack";
import { quickLinks } from "@/utils/values";
import Link from "next/link";
import Text from "../ui/Text";
import { client } from "@/lib/sanity/client";
import { pageQueryList } from "@/lib/sanity/qureies/pageQuery";

interface Page {
  name: string;
  slug: { current: string };
}

export default function Header() {
  const [staticPages, setStaticPages] = useState<Page[]>([]);

  useEffect(() => {
    const fetchStaticPages = async () => {
      try {
        const pages: Page[] = await client.fetch(pageQueryList);
        setStaticPages(pages);
      } catch (error) {
        console.error("Failed to fetch static pages:", error);
      }
    };

    fetchStaticPages();
  }, []);

  const mergedLinks = [
    ...quickLinks,
    ...staticPages.map((page) => ({
      title: page.name,
      url: `/${page.slug.current}`,
    })),
  ];

  return (
    <div className="bg-white w-full z-20 bg-opacity-70 backdrop-filter backdrop-blur-lg">
      <Container className="p-2">
        <HStack justify={"between"}>
          <Link href={"/"}>
            <Text weight={"bold"}>Logo</Text>
          </Link>
          <HStack>
            {mergedLinks.map((link, idx) => (
              <Link href={link.url} key={idx} className="p-2">
                {link.title}
              </Link>
            ))}
          </HStack>
        </HStack>
      </Container>
    </div>
  );
}
