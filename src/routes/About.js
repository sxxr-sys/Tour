import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg"; // You can use this image in the Hero or AboutUs component if needed
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
<Navbar/>
      
      {/* Hero Section - You can pass the AboutImg as a prop to Hero or use it within the Hero component */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default About;
