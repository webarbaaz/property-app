import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../ui/Container";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
