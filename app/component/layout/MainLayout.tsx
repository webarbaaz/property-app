"use client";
import React, { ReactNode, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BreadCrumb from "../Breadcrum";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LeadDialog from "../LeadDialog";
import { ToastContainer } from 'react-toastify';

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <ToastContainer />
        <LeadDialog />
        <Header />
        <BreadCrumb />
        {children}
        <Footer />
      </QueryClientProvider>
    </>
  );
}
