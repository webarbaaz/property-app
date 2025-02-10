'use client'
import React, { ReactNode, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BreadCrumb from "../Breadcrum";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <BreadCrumb />
        {children}
        <Footer />
      </QueryClientProvider>
    </>
  );
}
