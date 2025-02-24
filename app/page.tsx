"use client";
import Image from "next/image";
import MainLayout from "./component/layout/MainLayout";
import Carousel from "./component/module/Home/Carousel";
import { Grid } from "./component/ui/Grid";
import Container from "./component/ui/Container";
import HStack from "./component/ui/HStack";
import Text from "./component/ui/Text";
import Button from "./component/ui/Button";
import Stack from "./component/ui/Stack";
import { FaCheckCircle, FaHome } from "react-icons/fa";
import { FaClock, FaThumbsUp } from "react-icons/fa6";
import CustomerReviews from "./component/module/Home/CustomerReviews";
import Brands from "./component/module/Home/Brands";
import PropertyList from "./component/PropertyList";
import { getCategories } from "@/lib/sanity/controller/controller.property";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useSite } from "./hooks/useSite";
import { motion } from "framer-motion";

type Category = {
  _id: string;
  name: string;
  slug: string;
};

export default function Home() {
  const { setLeadDialog } = useSite();
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
      <Stack spacing={"12"} className="pb-10">
        <Carousel />
        <Container>
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
        </Container>
        <section className="relative py-16 md:py-24 overflow-hidden">
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
                    transition={{ duration: 1 }}
                  >
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
        </section>

        <HStack
          className="p-10 bg-gray-700"
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
        </HStack>
        <CustomerReviews />
        <Brands />
      </Stack>
    </MainLayout>
  );
}

const features = [
  {
    icon: <FaHome className="h-6 w-6 text-white" />,
    title: "Extensive Property Portfolio",
    description:
      "Access to a wide range of properties tailored to your needs and preferences.",
  },
  {
    icon: <FaCheckCircle className="h-6 w-6 text-white" />,
    title: "Expert Guidance",
    description:
      "Our team of experienced professionals provides personalized advice throughout your journey.",
  },
  {
    icon: <FaClock className="h-6 w-6 text-white" />,
    title: "Efficient Process",
    description:
      "Streamlined procedures to save you time and ensure a smooth property transaction.",
  },
  {
    icon: <FaThumbsUp className="h-6 w-6 text-white" />,
    title: "Customer Satisfaction",
    description:
      "Committed to exceeding your expectations with our top-notch service and support.",
  },
];
