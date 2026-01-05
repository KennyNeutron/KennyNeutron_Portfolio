import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
