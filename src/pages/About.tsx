import Asps from "../components/Asps";
import Expertise from "../components/Expertise";
import ContactForm from "../components/Form";

function About() {
  return (
    <div>
      <div className="About">
        <Asps></Asps>
        <Expertise></Expertise>
      </div>
      <ContactForm></ContactForm>
    </div>
  );
}

export default About;
