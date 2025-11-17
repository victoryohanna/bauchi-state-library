
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import Services from "../components/Services";
import FeaturedCollections from "../components/FeaturedCollections";
import BoardMembers from "../components/BoardMembers";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <Hero />
      <StatsSection />
      <Services />
      <BoardMembers />
      <FeaturedCollections />
    </main>
  );
}
