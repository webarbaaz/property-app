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

export default function Home() {
  return (
    <MainLayout>
      <Stack spacing={"12"} className="pb-10">
        <Carousel />
        <Container>
          <Stack spacing={"6"}>
            <HStack justify={"between"} className="w-full">
              <Text size={"2xl"} weight={"bold"} className="capitalize">
                Hot Deals
              </Text>
              <Button variant={"outline"} color="transparent">
                View All
              </Button>
            </HStack>
            <PropertyList
              filters={{
                flags: {
                  isHotDeal: true,
                },
              }}
              isPaginated={false}
              limit={4}
            />
          </Stack>
          <Stack spacing={"6"}>
            <HStack justify={"between"} className="w-full">
              <Text size={"2xl"} weight={"bold"} className="capitalize">
                Latest Properties
              </Text>
              <Button variant={"outline"} color="transparent">
                View All
              </Button>
            </HStack>
            <PropertyList
              limit={4}
              filters={{
                flags: {
                  isLatest: true,
                },
              }}
              isPaginated={false}
            />
          </Stack>
        </Container>
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
          <Button className="shadow-lg" color="transparent">
            Contact Us
          </Button>
        </HStack>
        <Container>
          <Stack spacing={"6"}>
            <HStack justify={"between"} className="w-full">
              <Text size={"2xl"} weight={"bold"} className="capitalize">
                Featured Properties
              </Text>
              <Button variant={"outline"} color="transparent">
                View All
              </Button>
            </HStack>
            <PropertyList
              limit={4}
              filters={{
                flags: {
                  isFeatured: true,
                },
              }}
              isPaginated={false}
            />
          </Stack>
        </Container>
        <Container>
          <Stack spacing={"6"}>
            <HStack justify={"between"} className="w-full">
              <Text size={"2xl"} weight={"bold"} className="capitalize">
                Under construction Properties
              </Text>
              <Button variant={"outline"} color="transparent">
                View All
              </Button>
            </HStack>
            <PropertyList
              limit={4}
              filters={{
                flags: {
                  isUnderConstruction: true,
                },
              }}
              isPaginated={false}
            />
          </Stack>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
              Why Choose Us
            </h2>
            <Grid cols={"max4"} gap={"lg"}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 border border-white border-opacity-20"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              ))}
            </Grid>
          </div>
        </section>
        <Container>
          <Stack spacing={"6"}>
            <HStack justify={"between"} className="w-full">
              <Text size={"2xl"} weight={"bold"} className="capitalize">
                Exclusive Properties
              </Text>
              <Button variant={"outline"} color="transparent">
                View All
              </Button>
            </HStack>
            <PropertyList
              filters={{
                flags: {
                  isExclusive: true,
                },
              }}
              isPaginated={false}
              limit={4}
            />
          </Stack>
        </Container>

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
