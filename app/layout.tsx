import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "True Value Home",
  description: "Properties for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '586440537647028');
          fbq('track', 'PageView');`,
          }}
        ></script>
        {/* Facebook Pixel Verification */}
        <meta
          name="facebook-domain-verification"
          content="anh3qwxf3zd2carq3v4wqxp504fu3f"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* NoScript Tracking for Facebook Pixel */}
        <Image
          height={1}
          width={1}
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=586440537647028&ev=PageView&noscript=1"
          alt="Facebook Pixel"
        />

        {/* Wrap children inside Suspense for better loading */}
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
