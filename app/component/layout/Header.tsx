import React from "react";
import Container from "../ui/Container";
import HStack from "../ui/HStack";
import { quickLinks } from "@/utils/values";
import Link from "next/link";
import Text from "../ui/Text";

export default function Header() {
  return (
    <div className="bg-white w-full z-20 bg-opacity-70 backdrop-filter backdrop-blur-lg">
      <Container className="p-2">
        <HStack justify={"between"}>
          <Text weight={"bold"}>Logo</Text>
          <HStack>
            {quickLinks.map((link, idx) => (
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
