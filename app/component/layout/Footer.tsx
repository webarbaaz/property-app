"use client";
import React from "react";
import Container from "../ui/Container";
import { Grid } from "../ui/Grid";
import Stack from "../ui/Stack";
import Text from "../ui/Text";
import {
  FaHome,
  FaInstagram,
  FaMailBulk,
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
  Sales Experience Gallery, L&amp;T Realty, Mori Rd, near St. Michael&apos;s Church, Mahim, Mumbai, Maharashtra 400016
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
                <Link href={'tel:917030187000'} className="text-white">+917030187000</Link>
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
  
              <Stack>
                <Text color="white" weight={"bold"}>
                  Follow Us
                </Text>
                <HStack>
                  <Link
                    className="text-white h-6 w-6"
                    href="https://www.instagram.com/true_value_home?igsh=MXM2NXdydW94eG14aw=="
                  >
                    <FaInstagram />
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
