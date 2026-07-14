import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import TechStack from "../components/home/TechStack";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";
import Stats from "../components/home/Stats";


function Home() {

    return (

        <div className="bg-slate-950">

            <Navbar />

            <Hero />

            <Stats />

            <Features />

            <HowItWorks />

            <TechStack />

            <CTA />

            <Footer />

        </div>

    );

}

export default Home;