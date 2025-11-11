import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedCollections from "../components/FeaturedCollections";
import Events from "../components/Events";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedCollections />
      <Events />
      <Footer />
    </main>
  );
}
