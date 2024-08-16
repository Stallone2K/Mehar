import Stairs from "../assets/undraw_visual_data_re_mxxo.svg";
import SlideIn from "../components/SlideIn";
import { Link } from "react-router-dom";
function Asps() {
  return (
    <div className="w-full bg-[#f2f2f2] ">
      <div className="h-screen flex justify-center items-center mx-auto max-w-[1280px] px-6">
        <img src={Stairs} className="mx-auto hidden md:block" />
        <SlideIn>
          <div className="px-2 flex justify-center items-start flex-col">
            <h2 className="text-4xl md:text-5xl font-bold">
              Your Success,Our
              <span className="text-[#0ACDB7] underline"> Consultation.</span>
            </h2>
            <p className="md:text-2xl py-6">
              at the heart of every great achievement is a well-crafted plan.
              With our expert consultation, you gain a dedicated partner in
              navigating the path to your success, through consultative ,
              transparent and effective approach.
            </p>
            <button className="text-md px-8 py-4 bg-black text-white rounded-full mt-6 mb-6 hover:bg-[#f2f2f2] border-2 hover:text-black">
              <Link to="/Services">Learn More</Link>
            </button>
          </div>
        </SlideIn>
      </div>
    </div>
  );
}

export default Asps;
