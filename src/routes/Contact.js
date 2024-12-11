import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
<Navbar/>
      {/* Hero Section - You can pass the AboutImg as a prop to Hero or use it within the Hero component */}
      <Hero backgroundImage={AboutImg} /> 

<ContactForm/>

<Footer/>
    </>
  );
}

export default Contact;
