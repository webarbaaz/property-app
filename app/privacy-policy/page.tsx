"use client";

import { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Shield, Lock } from "lucide-react";
import Button from "../component/ui/Button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "../component/layout/MainLayout";
import Container from "../component/ui/Container";
type FadeProp = {
  children: ReactNode;
  delay?: number;
  className?: string;
};
const FadeIn = ({ children, delay = 0, className = "" }: FadeProp) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 md:py-24">
            <div>
              <div className="text-center max-w-3xl mx-auto">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                  Privacy Policy
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-muted-foreground">
                  We value your privacy and are committed to protecting your
                  personal information.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex justify-center gap-4 mt-8">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Last Updated: May 1, 2023</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Privacy Policy Content */}
          <section className="py-16">
            <Container>
              <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
                {/* Sidebar Navigation */}
                <div className="space-y-6">
                  <div className="sticky top-24">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold mb-4">On This Page</h3>
                      <nav className="space-y-2">
                        {[
                          { id: "introduction", label: "Introduction" },
                          {
                            id: "information-collection",
                            label: "Information We Collect",
                          },
                          {
                            id: "information-use",
                            label: "How We Use Your Information",
                          },
                          {
                            id: "information-sharing",
                            label: "Information Sharing",
                          },
                          { id: "cookies", label: "Cookies & Tracking" },
                          { id: "data-security", label: "Data Security" },
                          { id: "your-rights", label: "Your Rights" },
                          { id: "changes", label: "Changes to This Policy" },
                          { id: "contact", label: "Contact Us" },
                        ].map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                            {item.label}
                          </a>
                        ))}
                      </nav>
                    </div>

                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Lock className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-semibold">Need Help?</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          If you have any questions about our privacy practices,
                          please contact our privacy team.
                        </p>
                        <Button variant="outline" className="w-full">
                          Contact Privacy Team
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-12">
                  <FadeIn>
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <div className="prose max-w-none text-muted-foreground">
                      <p>
                        True Value Homes (&quot;we,&quot; &quot;our,&quot; or
                        &quot;us&quot;) is committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use,
                        disclose, and safeguard your information when you visit
                        our website, use our services, or communicate with us.
                      </p>
                      <p>
                        Please read this Privacy Policy carefully. By accessing
                        or using our services, you acknowledge that you have
                        read, understood, and agree to be bound by all the terms
                        of this Privacy Policy. If you do not agree with our
                        policies and practices, please do not use our services.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.1}>
                    <h2 className="text-2xl font-bold mb-4">
                      2. Information We Collect
                    </h2>
                    <div className="prose max-w-none text-muted-foreground">
                      <p>
                        We may collect several types of information from and
                        about users of our services, including:
                      </p>

                      <h3 className="text-xl font-semibold mt-6 mb-3">
                        Personal Information
                      </h3>
                      <ul>
                        <li>
                          Contact information (such as name, email address,
                          mailing address, and phone number)
                        </li>
                        <li>
                          Account credentials (such as username and password)
                        </li>
                        <li>
                          Financial information (such as payment card details
                          and billing address)
                        </li>
                        <li>Property preferences and search criteria</li>
                        <li>
                          Information about properties you own or are interested
                          in
                        </li>
                      </ul>

                      <h3 className="text-xl font-semibold mt-6 mb-3">
                        Non-Personal Information
                      </h3>
                      <ul>
                        <li>
                          Usage details (such as how you use our services)
                        </li>
                        <li>
                          Device information (such as IP address, browser type,
                          and operating system)
                        </li>
                        <li>
                          Location data (if you enable this functionality)
                        </li>
                      </ul>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <h2 className="text-2xl font-bold mb-4">
                      3. How We Use Your Information
                    </h2>
                    <div className="prose max-w-none text-muted-foreground">
                      <p>
                        We may use the information we collect about you for
                        various purposes, including to:
                      </p>
                      <ul>
                        <li>Provide, maintain, and improve our services</li>
                        <li>
                          Process transactions and send related information
                        </li>
                        <li>
                          Send administrative information, such as updates,
                          security alerts, and support messages
                        </li>
                        <li>
                          Respond to your comments, questions, and requests
                        </li>
                        <li>
                          Communicate with you about products, services, offers,
                          and events
                        </li>
                        <li>
                          Monitor and analyze trends, usage, and activities in
                          connection with our services
                        </li>
                        <li>
                          Detect, investigate, and prevent fraudulent
                          transactions and other illegal activities
                        </li>
                        <li>
                          Personalize your experience and deliver content
                          relevant to your interests
                        </li>
                      </ul>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <h2 className="text-2xl font-bold mb-4">
                      4. Information Sharing
                    </h2>
                    <div className="prose max-w-none text-muted-foreground">
                      <p>
                        We may share your personal information in the following
                        situations:
                      </p>
                      <ul>
                        <li>
                          <strong>Service Providers:</strong> We may share your
                          information with third-party vendors, service
                          providers, contractors, or agents who perform services
                          for us.
                        </li>
                        <li>
                          <strong>Business Transfers:</strong> We may share or
                          transfer your information in connection with a merger,
                          acquisition, reorganization, sale of assets, or
                          bankruptcy.
                        </li>
                        <li>
                          <strong>Legal Obligations:</strong> We may disclose
                          your information to comply with any court order, law,
                          or legal process.
                        </li>
                        <li>
                          <strong>Protection of Rights:</strong> We may disclose
                          your information to protect the rights, property, or
                          safety of our company, our customers, or others.
                        </li>
                      </ul>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.4}>
                    <h2 className="text-2xl font-bold mb-4">
                      5. Cookies & Tracking
                    </h2>
                    <div className="prose max-w-none text-muted-foreground">
                      <p>
                        We use cookies and similar tracking technologies to
                        track activity on our services and hold certain
                        information. Cookies are files with a small amount of
                        data that may include an anonymous unique identifier.
                      </p>
                      <p>
                        You can instruct your browser to refuse all cookies or
                        to indicate when a cookie is being sent. However, if you
                        do not accept cookies, you may not be able to use some
                        portions of our services.
                      </p>
                      <p>We use the following types of cookies:</p>
                      <ul>
                        <li>
                          <strong>Essential Cookies:</strong> Required for the
                          operation of our services.
                        </li>
                        <li>
                          <strong>Analytical/Performance Cookies:</strong> Allow
                          us to recognize and count the number of visitors and
                          see how visitors move around our services.
                        </li>
                        <li>
                          <strong>Functionality Cookies:</strong> Enable us to
                          personalize content for you.
                        </li>
                        <li>
                          <strong>Targeting Cookies:</strong> Record your visit
                          to our services, the pages you have visited, and the
                          links you have followed.
                        </li>
                      </ul>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.5}>
                    <h2 className="text-2xl font-bold mb-4">
                      6. Data Security
                    </h2>
                    <div className="prose max-w-none text-muted-foreground">
                      <p>
                        We have implemented appropriate technical and
                        organizational security measures designed to protect the
                        security of any personal information we process.
                        However, please also remember that we cannot guarantee
                        that the internet itself is 100% secure.
                      </p>
                      <p>
                        Although we will do our best to protect your personal
                        information, transmission of personal information to and
                        from our services is at your own risk. You should only
                        access our services within a secure environment.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.6}>
                    <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
                    <div className="prose max-w-none text-muted-foreground">
                      <p>
                        Depending on your location, you may have certain rights
                        regarding your personal information, including:
                      </p>
                      <ul>
                        <li>
                          The right to access personal information we hold about
                          you
                        </li>
                        <li>
                          The right to request correction of inaccurate personal
                          information
                        </li>
                        <li>
                          The right to request deletion of your personal
                          information
                        </li>
                        <li>
                          The right to object to processing of your personal
                          information
                        </li>
                        <li>The right to data portability</li>
                        <li>The right to withdraw consent</li>
                      </ul>
                      <p>
                        To exercise any of these rights, please contact us using
                        the information provided in the &quot;Contact Us&quot;
                        section below.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.7}>
                    <h2 className="text-2xl font-bold mb-4">
                      8. Changes to This Policy
                    </h2>
                    <div className="prose max-w-none text-muted-foreground">
                      <p>
                        We may update our Privacy Policy from time to time. We
                        will notify you of any changes by posting the new
                        Privacy Policy on this page and updating the &quot;Last
                        Updated&quot; date at the top of this Privacy Policy.
                      </p>
                      <p>
                        You are advised to review this Privacy Policy
                        periodically for any changes. Changes to this Privacy
                        Policy are effective when they are posted on this page.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.8}>
                    <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
                    <div className="prose max-w-none text-muted-foreground">
                      <p>
                        If you have any questions about this Privacy Policy,
                        please contact us:
                      </p>
                      <ul>
                        <li>By email: privacy@truevaluehomes.com</li>
                        <li>By phone: (416) 555-9876</li>
                        <li>
                          By mail: 123 Real Estate Avenue, Toronto, ON M5V 2K4,
                          Canada
                        </li>
                      </ul>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </Container>
          </section>
        </main>
      </div>
    </MainLayout>
  );
}
