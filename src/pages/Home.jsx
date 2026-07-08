import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/hero/Hero"
import Statistics from "../components/landing/statistics/Statistics"
import LiveMarket from "../components/landing/liveMarket/LiveMarket";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Statistics />
      <LiveMarket />
    </>
  );
}