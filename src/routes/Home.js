import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <div className="flex h-screen ">
      <Navbar/>
      
      <Hero/>
      
      <Destination/>
      
      <Trip/>
      
      <Footer/>
    </div>
  );
}

export default Home;
