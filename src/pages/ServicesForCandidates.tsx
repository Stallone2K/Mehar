import QnA from "../components/QnA";
import EndToEnd from "../assets/undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_team_effort_yj7m_ej3u_wvay_kpbw_-1-_tsjm_-1-_yvec_-1-_7peh_-1-_wh0r_-1-_aqrv.svg";
import Breadcrumb from "../components/Breadcrumb";
import FadeIn from "../components/FadeIn";
function ServicesForCandidates() {
  return (
    <>
      <Breadcrumb></Breadcrumb>
      <div className="flex justify-center items-center h-[90svh] mx-auto max-w-[1280px] px-6">
        <div>
          <h1 className=" text-4xl md:text-5xl font-bold">
            Your <span className="text-[#0ACDB7]">Career,</span> Our Commitment:
            Empowering Your Path To{" "}
            <span className="text-[#0ACDB7]">Success</span>.
          </h1>
          <button className="text-md mx-2 px-8 py-4 bg-black text-white rounded-full mt-6 mb-6 hover:bg-white border-2 hover:text-black">
            <a href="/">Contact Now</a>
          </button>

          <p className="text-md">
            Unlock New Possibilities: Find Your Perfect Fit with Us.
          </p>
        </div>
        <div className="HeroSVG">
          <img src={EndToEnd} alt="" className=" hidden lg:block" />
        </div>
        <div className="divider"></div>
      </div>
      <FadeIn>
        <QnA></QnA>
      </FadeIn>
    </>
  );
}

export default ServicesForCandidates;
