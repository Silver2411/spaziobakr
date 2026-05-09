import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { HeroWatermark } from "@/components/HeroWatermark";
import { Manifesto } from "@/components/Manifesto";
import { Marquee } from "@/components/Marquee";
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
      <HeroWatermark />
      <Manifesto />
      <Marquee />
      <Gallery />
      <UseCases />
      <Specs />
      <FAQ />
      <Footer />
    </main>
  );
}
