import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PhotoWall } from "@/components/PhotoWall";
import { Manifesto } from "@/components/Manifesto";
import { Gallery } from "@/components/Gallery";
import { UseCases } from "@/components/UseCases";
import { Specs } from "@/components/Specs";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <PhotoWall />
      <Manifesto />
      <Gallery />
      <UseCases />
      <Specs />
      <FAQ />
      <Footer />
    </main>
  );
}
