import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Projects } from "@/components/home/Projects";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
