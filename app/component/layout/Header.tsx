"use client";

import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import HStack from "../ui/HStack";
import { quickLinks } from "@/utils/values";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { pageQueryList } from "@/lib/sanity/qureies/pageQuery";
import { useSite } from "@/app/hooks/useSite";
import Button from "../ui/Button";
import { FaAlignLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

interface Page {
  name: string;
  slug: { current: string };
}

export default function Header() {
  const { mergedLinks, setMergedLinks } = useSite();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchStaticPages = async () => {
      try {
        const pages: Page[] = await client.fetch(pageQueryList);
        if (pages.length > 0) {
          const links = [
            ...quickLinks,
            ...pages.map((page) => ({
              title: page.name,
              url: `/${page.slug.current}`,
            })),
          ];
          setMergedLinks(links);
        }
      } catch (error) {
        console.error("Failed to fetch static pages:", error);
      }
    };

    fetchStaticPages();
  }, []);

  return (
    <div className="relative z-50">
      {/* Navbar */}
      <div className="bg-white w-full z-50 bg-opacity-70 backdrop-filter backdrop-blur-lg py-2">
        <Container className="p-2">
          <HStack justify={"between"}>
            <Link href={"/"}>
              <Image
                alt="logo"
                src={"/assets/logo.png"}
                width={90}
                height={40}
                className="w-24"
              />
            </Link>
            <HStack className="hidden lg:block">
              {mergedLinks.map((link, idx) => (
                <Link href={link.url} key={idx} className="p-2">
                  {link.title}
                </Link>
              ))}
            </HStack>

            {/* Mobile Menu Button */}
            <Button
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FaAlignLeft />
            </Button>
          </HStack>
        </Container>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white z-[100] shadow-xl transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ position: "fixed" }}
      >
        {/* Close Button */}
        <div className="p-4 flex justify-end">
          <button onClick={() => setIsSidebarOpen(false)}>
            <IoClose className="text-black text-2xl" />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col p-4">
          {mergedLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
              className="text-black text-lg py-2"
              onClick={() => setIsSidebarOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay to Close Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[99]"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
