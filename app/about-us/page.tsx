"use client";
import { ReactNode, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Users,
  Award,
  TrendingUp,
  Clock,
  CheckCircle2,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import Button from "../component/ui/Button";
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

export default function AboutPage() {
  return (
    <MainLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/20 to-primary/5"></div>
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <FadeIn>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                  About <span className="text-primary">True Value Homes</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  For over 15 years, we&apos;ve been helping people find their
                  perfect homes and make smart real estate investments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg">Our Services</Button>
                  <Button variant="outline" size="lg">
                    Meet Our Team
                  </Button>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} className="relative">
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Our office"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 rounded-full p-3">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">Award Winning</div>
                        <div className="text-sm text-muted-foreground">
                          Real Estate Agency
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <FadeIn className="order-2 lg:order-1">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Company history"
                    width={800}
                    height={600}
                    className="rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold">15+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2005, True Value Homes began with a simple mission:
                  to help people find properties that truly match their needs
                  and aspirations. What started as a small team of passionate
                  real estate professionals has grown into one of the most
                  trusted agencies in the region.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our journey has been defined by our commitment to integrity,
                  personalized service, and deep market knowledge. We&apos;ve
                  helped thousands of families find their dream homes and guided
                  countless investors toward profitable opportunities.
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Founder"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Robert Johnson</div>
                    <div className="text-sm text-muted-foreground">
                      Founder & CEO
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <FadeIn className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                These principles guide everything we do and define how we serve
                our clients.
              </p>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Users,
                  title: "Client-Focused",
                  description:
                    "We put our clients' needs first, always striving to exceed expectations.",
                },
                {
                  icon: CheckCircle2,
                  title: "Integrity",
                  description:
                    "We operate with honesty and transparency in every transaction.",
                },
                {
                  icon: TrendingUp,
                  title: "Excellence",
                  description:
                    "We pursue excellence in every aspect of our service.",
                },
                {
                  icon: Clock,
                  title: "Reliability",
                  description:
                    "We're committed to being there when our clients need us.",
                },
              ].map((value, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <Container>
            <FadeIn className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Our experienced professionals are dedicated to helping you
                achieve your real estate goals.
              </p>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Senior Real Estate Agent",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Michael Chen",
                  role: "Commercial Property Specialist",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Residential Sales Manager",
                  image: "/placeholder.svg?height=400&width=400",
                },
                {
                  name: "David Kim",
                  role: "Investment Advisor",
                  image: "/placeholder.svg?height=400&width=400",
                },
              ].map((member, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <div className="group">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-4 w-full flex justify-center gap-4">
                          <Button
                            variant="secondary"
                            className="h-9 w-9 rounded-full">
                            <span className="sr-only">LinkedIn</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-linkedin">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect width="4" height="12" x="2" y="9" />
                              <circle cx="4" cy="4" r="2" />
                            </svg>
                          </Button>
                          <Button
                            variant="secondary"
                            className="h-9 w-9 rounded-full">
                            <span className="sr-only">Email</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-mail">
                              <rect width="20" height="16" x="2" y="4" rx="2" />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <Container>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <FadeIn className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-white/80 mb-6">
                  Whether you&apos;re looking to buy, sell, or invest, our team
                  is ready to help you achieve your real estate goals.
                </p>
                <Button size="lg" variant="secondary">
                  Contact Us Today
                </Button>
              </FadeIn>
              <FadeIn delay={0.2}>
                <motion.div
                  initial={{ rotate: -5, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.6 }}>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Contact us"
                    width={400}
                    height={300}
                    className="rounded-xl shadow-lg"
                  />
                </motion.div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </main>
    </MainLayout>
  );
}
