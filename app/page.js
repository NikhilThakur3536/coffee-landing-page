import CoffeeCommunity from "./components/CommunitySection";
import CoffeeExperience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import VoiceSection from "./components/VoiceSection";
export default function Home() {
  return (
    <div>

      <HeroSection />

      <VoiceSection />

      <CoffeeCommunity/>

      <CoffeeExperience/>

    </div>
  );
}
