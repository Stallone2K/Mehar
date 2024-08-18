import Container from "../components/Container";
import Mehar from "../assets/Logo.png";
import FadeIn from "../components/FadeIn";
const Why = () => {
  return (
    <Container className="text-textBlack min-h-[100svh] flex justify-center items-center py-8">
      <div className="  p-8">
        <div className="text-center flex items-center justify-center flex-col">
          <FadeIn>
            <img src={Mehar} alt="Mehar Co Logo" className="md:w-78" />
          </FadeIn>
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              What <span className=" text-[#0ACDB7]">Services</span> Do We Offer
              ?
            </h1>
          </FadeIn>
          <FadeIn>
            <h2 className="text-xl md:text-2xl mt-2">
              Strategic Solutions For Your Business And Career Success.
            </h2>
          </FadeIn>
        </div>

        <FadeIn>
          <p className="text-center mt-4 text-gray-600 text-md md:text-lg">
            At Mehar Consultants and Services, we’re committed to being a
            dependable business consulting firm, devoted to fostering the growth
            and maximizing the potential of businesses. Our team comprises
            seasoned consultants with diverse industry expertise across various
            business domains. <br />
            Our primary focus is comprehending your distinct challenges and
            aspirations to deliver personalized, tailor-made solutions precisely
            aligned with your unique needs.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m:h-12 m:w-12"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.9438 3.33038C22.0707 2.96779 21.9787 2.56456 21.7071 2.29292C21.4354 2.02128 21.0322 1.92926 20.6696 2.05617L1.85999 8.63954C0.577721 9.08834 0.504876 10.8743 1.74631 11.426L9.24237 14.7576L12.574 22.2537C13.1257 23.4951 14.9117 23.4223 15.3605 22.14L21.9438 3.33038ZM9.77851 12.8073L3.71105 10.1106L19.37 4.63L13.8894 20.289L11.1927 14.2215L14.7071 10.7071C15.0976 10.3166 15.0976 9.68342 14.7071 9.29289C14.3166 8.90237 13.6834 8.90237 13.2929 9.29289L9.77851 12.8073Z"
                  fill="#000000"
                />
              </svg>
              <p className="mt-2 text-gray-900">Recruitment</p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                fill="#000000"
                height="50"
                width="50"
                version="1.2"
                baseProfile="tiny"
                id="_x31_"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-63 65 128 128"
                className="m:h-12 m:w-12"
              >
                <path
                  d="M-37.4,95.7h28.5v34.1h-28.5V95.7z M2.4,95.7h22.8v5.7H2.4V95.7z M2.4,124.2h22.8v5.7H2.4V124.2z M2.4,109.9h22.8v5.7H2.4
	V109.9z M-37.4,138.6h62.5v5.7h-62.5V138.6z M-37.4,166.4h62.5v5.7h-62.5V166.4z M-37.4,152.1h62.5v5.7h-62.5V152.1z M-39,66.6v10.9
	h-12.6v114.2h92.6v-10.9h12.6V66.6H-39z M35.3,186.1H-46V83.1h7h5.7h68.6v91.9v5.7V186.1z M48,175.1h-7V77.4h-74.3v-5.1H48V175.1z"
                />
              </svg>
              <p className="mt-2 text-gray-900">Staffing</p>
            </div>
            <div className="flex flex-col items-center">
              <svg
                fill="#000000"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="m:h-12 m:w-12"
              >
                <path d="M17.093,1.293l-11.2,11.2a.99.99,0,0,0-.242.391l-1.6,4.8A1,1,0,0,0,5,19a1.014,1.014,0,0,0,.316-.051l4.8-1.6a1.006,1.006,0,0,0,.391-.242l11.2-11.2a1,1,0,0,0,0-1.414l-3.2-3.2A1,1,0,0,0,17.093,1.293ZM9.26,15.526l-2.679.893.893-2.679L17.8,3.414,19.586,5.2ZM3,21H20a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z" />
              </svg>
              <p className="mt-2 text-gray-900">Training</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
};

export default Why;
