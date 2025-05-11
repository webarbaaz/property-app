"use client";
import React from "react";
import Link from "next/link";
import { quickLinks } from "@/utils/values";
import Image from "next/image";
import { Input } from "@headlessui/react";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <Container>
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="True Value Homes"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="font-semibold text-xl">True Value Homes</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Founded on 2025, True Value Home is more than just a real estate
                channel partner—we are your trusted guide in finding the perfect
                property. With a strong focus on transparency, trust, and expert
                guidance, we ensure that every client makes informed real estate
                decisions.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.link}
                      className="text-muted-foreground hover:text-primary">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact Us</h3>
              <address className="not-italic text-sm text-muted-foreground space-y-2">
                <p>Sales Experience Gallery, L&T Realty, Mori Rd, near St.</p>
                <p>Michael`s Church, Mahim, Mumbai, Maharashtra 400016</p>
                <p>Email: Raziq.khan@truevaluehome.in</p>
                <p>Phone: +917030187000</p>
              </address>
            </div>
            <div>
              <h3 className="font-medium mb-4">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter for the latest property listings and
                real estate news.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="max-w-[220px]" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} True Value Homes. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
