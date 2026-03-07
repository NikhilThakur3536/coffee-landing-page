import CoffeeCommunity from "./components/CommunitySection";
import CoffeeExperience from "./components/Experience";
import CoffeeInviteCard from "./components/footer";
import HeroSection from "./components/HeroSection";
import VoiceSection from "./components/VoiceSection";
export default function Home() {
  return (
    <div>

      <HeroSection />

      <VoiceSection />

      <CoffeeCommunity/>

      <CoffeeExperience/>

      <CoffeeInviteCard/>

    </div>
  );
}
