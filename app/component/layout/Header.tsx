"use client";

import React, { useState } from "react";
import Container from "../ui/Container";
import Link from "next/link";
import Button from "../ui/Button";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { quickLinks } from "@/utils/values";
import { Menu, Phone } from "lucide-react";
import Stack from "../ui/Stack";
import HStack from "../ui/HStack";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Container className="p-2">
          <div className="container flex h-16 items-center justify-between">
            <div
              className="md:hidden cursor-pointer border-[1px] border-muted-foreground rounded-lg p-2"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Menu className="text-muted-foreground" />
            </div>
            <HStack>
              <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/assets/logo.png"
                    alt="True Value Homes"
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                  {/* <span className="hidden font-semibold text-xl sm:inline-block">
                  True Value Homes
                  </span> */}
                </Link>
              </div>
            </HStack>
            <nav className="hidden md:flex items-center gap-6">
              {quickLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.link}
                    className="font-medium text-muted-foreground text-sm transition-colors hover:text-primary flex gap-1">
                    <Icon className="w-4 h-4" />
                    {item.title}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-4">
              <Button className="flex gap-2 p-4 lg:p-2">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:block">Contact Us</span>
              </Button>
              {/* <Button>Contact Us</Button> */}
            </div>
          </div>
        </Container>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white z-[100] shadow-xl transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ position: "fixed" }}>
        {/* Close Button */}
        <div className="p-4 flex justify-end">
          <button onClick={() => setIsSidebarOpen(false)}>
            <IoClose className="text-black text-2xl" />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="p-4">
          <Stack spacing={"6"}>
            {quickLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.link}
                  className="font-medium text-muted-foreground text-sm transition-colors hover:text-primary flex gap-1">
                  <Icon className="w-4 h-4" />
                  {item.title}
                </Link>
              );
            })}
          </Stack>
        </nav>
      </div>

      {/* Overlay to Close Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[99]"
          onClick={() => setIsSidebarOpen(false)}></div>
      )}
    </div>
  );
}
