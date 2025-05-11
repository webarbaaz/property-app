"use client";
import Image from "next/image";
import MainLayout from "./component/layout/MainLayout";
import Carousel from "./component/module/Home/Carousel";
import Container from "./component/ui/Container";
import Button from "./component/ui/Button";
import Stack from "./component/ui/Stack";
import CustomerReviews from "./component/module/Home/CustomerReviews";
import Brands from "./component/module/Home/Brands";
import PropertyList from "./component/PropertyList";
import { getCategories } from "@/lib/sanity/controller/controller.property";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
// import { useSite } from "./hooks/useSite";
import {
  ArrowRight,
  Building,
  CheckCircle,
  Clock,
  HomeIcon,
  Mail,
  Phone,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Category = {
  _id: string;
  name: string;
  slug: string;
};

export default function Home() {
  // const { setLeadDialog } = useSite();
  const [categories, setCategories] = useState<Category[]>([]);
  const fetchCategories = useCallback(async () => {
    const catD = await getCategories();
    if (catD) {
      setCategories(catD);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <MainLayout>
      <Stack spacing={"12"}>
        <Carousel />
        {categories?.map((category) => (
          <section key={category._id}>
            <Container>
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-semibold capitalize">
                  {category.name}
                </h2>
                <Link href={`/properties?category=${category.slug}`}>
                  <Button variant="outline">View All Properties</Button>
                </Link>
              </div>
              <PropertyList
                limit={4}
                isPaginated={false}
                filters={{ category: category.slug }}
              />
            </Container>
          </section>
        ))}

        {/* <Container>
          {categories?.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move up
              whileInView={{ opacity: 1, y: 0 }} // Animate to opacity 1 and position 0
              transition={{ duration: 1, delay: index * 0.1 }} // Add delay between categories
              viewport={{ once: true }} // Only animate once when the category enters the view
            >
              <Stack spacing={"6"}>
                <HStack justify={"between"} className="w-full">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    <Text size={"2xl"} weight={"bold"} className="capitalize">
                      {category.name}
                    </Text>
                  </motion.div>

                  <Link href={`/properties?category=${category.slug}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    >
                      <Button variant={"outline"} color="transparent">
                        View All
                      </Button>
                    </motion.div>
                  </Link>
                </HStack>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  <PropertyList
                    filters={{ category: category.slug }}
                    isPaginated={false}
                    limit={4}
                  />
                </motion.div>
              </Stack>
            </motion.div>
          ))}
        </Container> */}
        {/* <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1554230682-30659cacfe74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNob29zZSUyMHVzfGVufDB8fDB8fHww"
              alt="Luxury property background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-8 text-white"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }} // Ensures animation triggers only once when it enters the view
            >
              Why Choose Us
            </motion.h2>
            <Grid cols={"max4"} gap={"lg"}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border border-white border-opacity-20"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }} // Ensures animation triggers only once when it enters the view
                >
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}>
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">{feature.description}</p>
                </motion.div>
              ))}
            </Grid>
          </div>
        </section> */}

        {/* <HStack
          className="p-10 bg-[#06202B]"
          alignItems={"center"}
          justify={"between"}
        >
          <Text
            size={"2xl"}
            weight={"bold"}
            color="white"
            className="capitalize"
          >
            For more details
          </Text>
          <Button
            className="shadow-lg"
            color="transparent"
            onClick={() => setLeadDialog(true)}
          >
            Contact Us
          </Button>
        </HStack> */}
        {/* Services Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer a comprehensive range of real estate services to meet
                all your property needs.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Property Sales",
                  description:
                    "Find your dream home or sell your property with our expert guidance.",
                  icon: HomeIcon,
                },
                {
                  title: "Property Management",
                  description:
                    "Let us handle the day-to-day operations of your investment properties.",
                  icon: Building,
                },
                {
                  title: "Investment Advisory",
                  description:
                    "Make informed decisions with our expert real estate investment advice.",
                  icon: Star,
                },
                {
                  title: "Legal Assistance",
                  description:
                    "Navigate complex real estate transactions with our legal support.",
                  icon: CheckCircle,
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <Button
                      variant="link"
                      className="mt-4 gap-1 group-hover:text-primary transition-colors">
                      Learn more <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-primary/90 to-primary text-white">
          <Container>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "15+", label: "Years of Experience" },
                { value: "2,500+", label: "Properties Sold" },
                { value: "500+", label: "Happy Clients" },
                { value: "50+", label: "Expert Agents" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore Neighborhoods</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the unique character and charm of our city&apos;s most
                desirable neighborhoods.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Downtown",
                  properties: 156,
                  image: "/placeholder.svg?height=300&width=500",
                },
                {
                  name: "Westside",
                  properties: 89,
                  image: "/placeholder.svg?height=300&width=500",
                },
                {
                  name: "Riverside",
                  properties: 112,
                  image: "/placeholder.svg?height=300&width=500",
                },
              ].map((neighborhood, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl">
                  <Image
                    src={neighborhood.image || "/placeholder.svg"}
                    alt={neighborhood.name}
                    width={500}
                    height={300}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {neighborhood.name}
                    </h3>
                    <p className="text-white/80">
                      {neighborhood.properties} Properties
                    </p>
                  </div>
                  <Link href="#" className="absolute inset-0">
                    <span className="sr-only">View {neighborhood.name}</span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button size="lg">View All Neighborhoods</Button>
            </div>
          </Container>
        </section>
        <div>
          {/* Testimonials Section */}
          <CustomerReviews />
          {/* <section className="py-16 bg-gray-50">
            <Container>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Don't just take our word for it. Here's what our satisfied
                  clients have to say about their experience with True Value
                  Homes.
                </p>
              </div>

              <Tabs defaultValue="testimonial1" className="max-w-3xl mx-auto">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="testimonial1">John & Sarah</TabsTrigger>
                  <TabsTrigger value="testimonial2">Michael T.</TabsTrigger>
                  <TabsTrigger value="testimonial3">Emma R.</TabsTrigger>
                </TabsList>
                {[
                  {
                    id: "testimonial1",
                    quote:
                      "True Value Homes made our first home buying experience incredibly smooth. Their team was patient, knowledgeable, and found us exactly what we were looking for within our budget.",
                    author: "John & Sarah Thompson",
                    role: "First-time Homebuyers",
                  },
                  {
                    id: "testimonial2",
                    quote:
                      "As an investor, I appreciate their market insights and attention to detail. They've helped me acquire multiple properties over the years, each one a solid investment.",
                    author: "Michael Torres",
                    role: "Property Investor",
                  },
                  {
                    id: "testimonial3",
                    quote:
                      "Selling my family home of 30 years was emotional, but the team at True Value Homes handled everything with such care and professionalism. They got me a great price too!",
                    author: "Emma Rodriguez",
                    role: "Property Seller",
                  },
                ].map((testimonial) => (
                  <TabsContent
                    key={testimonial.id}
                    value={testimonial.id}
                    className="mt-6">
                    <div className="bg-white rounded-xl p-8 shadow-sm">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <blockquote className="text-lg italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </Container>
          </section> */}
          {/* CTA Section */}
          <section className="py-16 bg-gray-900 text-white">
            <Container>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Find Your Dream Home?
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Let our experts guide you through the process. Whether
                    you&apos;re buying, selling, or investing, we&apos;re here to help
                    every step of the way.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90">
                      Get Started
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10">
                      <Phone className="mr-2 h-4 w-4" /> Schedule a Call
                    </Button>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Quick Contact
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span>{process.env.NEXT_PUBLIC_NUMBER}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>{process.env.NEXT_PUBLIC_EMAIL}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </div>
        {/* Brands */}
        <Brands />
      </Stack>
    </MainLayout>
  );
}
