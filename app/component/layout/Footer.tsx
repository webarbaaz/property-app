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

export default function Footer() {
  const { mergedLinks } = useSite();
  return (
    <>
      <div className="bg-blue-500">
        <Container className="py-10">
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
                  Value properties A Wing 801, Bhavya Supreme, G D Ambekar Marg,
                  Near Haffkine Institute, Parel, Mumbai - 400012.
                </Text>
              </Stack>
              <Stack>
                <HStack>
                  <FaMailBulk className="text-white h-6 w-6" />
                  <Text color="white" weight={"bold"}>
                    Email:
                  </Text>
                </HStack>
                <Text color="white">test@gmail.com</Text>
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
                  <Stack key={link.title} spacing={"2"}>
                    <Text color="white">{link.title}</Text>
                  </Stack>
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
                  Value Properties is the most innovative, creative and
                  forward-thinking real estate organisation. At the core of our
                  business philosophy is a commitment to extraordinary service,
                  honesty, and clear communication. ... View More
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
              &copy; {new Date().getFullYear()} Value Properties. All rights
              reserved.
            </Text>
          </Stack>
        </Container>
      </div>
    </>
  );
}
