import Hero from "../components/Hero";
import Asps from "../components/Asps";
import Expertise from "../components/Expertise";
import Services from "../components/Services";
import QnA from "../components/QnA";
import ContactForm from "../components/Form";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Asps></Asps>
      <Expertise></Expertise>
      <Services></Services>
      <QnA></QnA>
      <ContactForm></ContactForm>
    </div>
  );
}

export default Home;
