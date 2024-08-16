import { motion } from "framer-motion";
import Rocket from "../assets/undraw_predictive_analytics_re_wxt8.svg";

function Hero() {
  return (
    <>
      <motion.div
        className="flex h-full flex-col items-start justify-end"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        whileInView="visible"
        exit="hidden"
        animate="hidden"
        viewport={{ amount: 0.98 }}
      >
        <div className="flex justify-center items-center h-[90svh] mx-auto max-w-[1280px] px-6">
          <div>
            <h1 className=" text-4xl md:text-5xl font-bold">
              Your Journey To <span className="text-[#0ACDB7]">Success,</span>
              <br />
              Starts With Our Customized
              <span className="text-[#0ACDB7]"> Talent Strategies.</span>
            </h1>
            <p className="text-md">
              Success comes from our tech and human-focused strategy, whether
              on-site or remote.
            </p>
          </div>
          <div className="HeroSVG">
            <img src={Rocket} alt="" className="hidden lg:block " />
          </div>
          <div className="divider"></div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
