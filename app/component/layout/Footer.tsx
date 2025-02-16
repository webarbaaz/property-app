"use client";
import React from "react";
import Container from "../ui/Container";
import { Grid } from "../ui/Grid";
import Stack from "../ui/Stack";
import Text from "../ui/Text";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";
import HStack from "../ui/HStack";
import Link from "next/link";
import { useSite } from "@/app/hooks/useSite";
import { PhoneCall } from "lucide-react";

export default function Footer() {
  const { mergedLinks } = useSite();
  return (
    <>
      <div className="bg-gray-700">
        <Container className="py-10 capitalize">
          <Grid cols={"max4"} gap={"xl"}>
            <Stack spacing={"6"}>
              <Text
                className="uppercase"
                weight={"bold"}
                size={"lg"}
                color="white"
              >
                Contact Us
              </Text>
              <Stack>
                <HStack>
                  <FaHome className="text-white h-6 w-6" />
                  <Text color="white" weight={"bold"}>
                    Address:
                  </Text>
                </HStack>
                <Text color="white">
                Sales Experience Gallery, L&T Realty, Mori Rd, near St. Michael's Church, Mahim, Mumbai, Maharashtra 400016
                </Text>
              </Stack>
              <Stack>
                <HStack>
                  <FaMailBulk className="text-white h-6 w-6" />
                  <Text color="white" weight={"bold"}>
                    Email:
                  </Text>
                </HStack>
                <Link href={'mailto:Raziq.khan@truevaluehome.in'} className="text-white">Raziq.khan@truevaluehome.in</Link>
                <HStack>
                  <PhoneCall className="text-white h-6 w-6" />
                  <Text color="white" weight={"bold"}>
                    Phone:
                  </Text>
                </HStack>
                <Link href={'tel:7030187000'} className="text-white">7030187000</Link>
              </Stack>
            </Stack>
            {/* quick links  */}
            <Stack spacing={"6"}>
              <Text
                className="uppercase"
                weight={"bold"}
                size={"lg"}
                color="white"
              >
                Quick Links
              </Text>
              <Stack>
                {mergedLinks.map((link) => (
                  <Link key={link.title} href={link.url}>
                    <Text color="white">{link.title}</Text>
                  </Link>
                ))}
              </Stack>
            </Stack>
            {/* social media icons and about us */}
            <Stack spacing={"6"}>
              <Text
                className="uppercase"
                weight={"bold"}
                size={"lg"}
                color="white"
              >
                About Us
              </Text>
              <Stack>
                <Text color="white">
                At True Value Home, we don’t just sell properties—we build dreams and create lasting value. Let us help you find the right place to call home.
                </Text>
              </Stack>
              <Stack>
                <Text color="white" weight={"bold"}>
                  Follow Us
                </Text>
                <HStack>
                  <Link
                    className="text-white h-6 w-6"
                    href="https://www.facebook.com/valueproperties/"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    className="text-white h-6 w-6"
                    href="https://www.instagram.com/valueproperties/"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    className="text-white h-6 w-6"
                    href="https://www.twitter.com/valueproperties/"
                  >
                    <FaTwitter />
                  </Link>
                </HStack>
              </Stack>
            </Stack>
          </Grid>
        </Container>
      </div>
      <div className="bg-gray-500 text-white py-6">
        <Container>
          <Stack spacing={"1"}>
            <Text size={"md"} color="white">
              &copy; {new Date().getFullYear()} true value home. All rights
              reserved.
            </Text>
          </Stack>
        </Container>
      </div>
    </>
  );
}
