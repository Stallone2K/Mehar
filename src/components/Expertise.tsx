import Container from "./Container";
import FadeIn from "./FadeIn";
import Card from "./Card";
import { Link } from "react-router-dom";
function Expertise() {
  return (
    <Container className="py-6 flex max-h[screen] justify-center flex-col items-center">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold ">
          Why Us? <br />
          <span className="text-red-600">Our Expertise.</span>
        </h1>
      </FadeIn>
      <FadeIn>
        <div className="text-center mt-6 flex justify-center items-center md:flex-row">
          <Card></Card>
        </div>
      </FadeIn>
      <FadeIn>
        <button className="text-md px-8 py-4 bg-black text-white rounded-full mt-6 mb-6 hover:bg-white border-2 hover:text-black">
          <Link to="/Contact">Contact Us</Link>
        </button>
      </FadeIn>
    </Container>
  );
}

export default Expertise;
