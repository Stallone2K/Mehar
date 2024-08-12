import Hero from "../components/Hero";
import Asps from "../components/Asps";
import Expertise from "../components/Expertise";
import Services from "../components/Services";
import ContactForm from "../components/Form";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Asps></Asps>
      <Expertise></Expertise>
      <Services></Services>
      <ContactForm></ContactForm>
    </div>
  );
}

export default Home;
