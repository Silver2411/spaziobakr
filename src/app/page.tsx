import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Gallery } from "@/components/Gallery";
import { UseCases } from "@/components/UseCases";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Manifesto />
      <Gallery />
      <UseCases />
      <FAQ />
      <Footer />
    </main>
  );
}
