import Image from "next/image";
import MainLayout from "./component/layout/MainLayout";
import Carousel from "./component/module/Home/Carousel";
import { Grid } from "./component/ui/Grid";
import PropertyCard from "./component/PropertyCard";
import Container from "./component/ui/Container";

export default function Home() {
  return (
    <MainLayout>
      <Carousel />
      <div className="flex justify-center mt-8">
        <Image
          src="/nextjs-logo.png"
          alt="Next.js Logo"
          width={200}
          height={200}
        />
      </div>
      <Container>
        <Grid cols={"xl"}>
          <PropertyCard />
        </Grid>
      </Container>
    </MainLayout>
  );
}
