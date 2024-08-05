import Container from "../components/Container";
import Mehar from "../assets/Mehar.png";
import FadeIn from "../components/FadeIn";
const Why = () => {
  return (
    <Container className="text-textBlack min-h-[100svh] flex justify-center items-center">
      <div className="  p-8">
        <div className="text-center flex items-center justify-center flex-col">
          <FadeIn>
            <img src={Mehar} alt="Mehar Co Logo" className="md:w-78" />
          </FadeIn>
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              What <span className=" text-red-600">Services</span> Do We Offer ?
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
          {" "}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="m:h-12 m:w-12"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
              </svg>
              <p className="mt-2 text-gray-900">IT Services</p>
            </div>
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
                  d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.2109 8.84009C18.0578 8.09677 17.6931 7.41362 17.1609 6.87256C16.6288 6.33149 15.9516 5.95549 15.2109 5.79004"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 7.51001C21.6283 6.19924 20.928 5.00529 19.9655 4.04102C19.003 3.07674 17.8101 2.37408 16.5 2"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="mt-2 text-gray-900">Telecom</p>
            </div>
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
            <div className="flex flex-col items-center">
              <svg
                width={50}
                height={50}
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="m:h-12 m:w-12"
              >
                <g>
                  <path
                    className="st0"
                    d="M256.008,411.524c54.5,0,91.968-7.079,92.54-13.881c2.373-28.421-34.508-43.262-49.381-48.834
		c-7.976-2.984-19.588-11.69-19.588-17.103c0-3.587,0-8.071,0-14.214c4.611-5.119,8.095-15.532,10.183-27.317
		c4.857-1.738,7.627-4.524,11.095-16.65c3.69-12.93-5.548-12.5-5.548-12.5c7.468-24.715-2.357-47.944-18.825-46.246
		c-11.358-19.857-49.397,4.54-61.31,2.841c0,6.818,2.834,11.92,2.834,11.92c-4.143,7.882-2.548,23.564-1.389,31.485
		c-0.667,0-9.016,0.079-5.468,12.5c3.452,12.126,6.23,14.912,11.088,16.65c2.079,11.786,5.571,22.198,10.198,27.317
		c0,6.143,0,10.627,0,14.214c0,5.413-12.35,14.548-19.611,17.103c-14.953,5.262-51.746,20.413-49.373,48.834
		C164.024,404.444,201.491,411.524,256.008,411.524z"
                  />
                  <path
                    className="st0"
                    d="M404.976,56.889h-75.833v16.254c0,31.365-25.524,56.889-56.889,56.889h-32.508
		c-31.366,0-56.889-25.524-56.889-56.889V56.889h-75.834c-25.444,0-46.071,20.627-46.071,46.071v362.969
		c0,25.444,20.627,46.071,46.071,46.071h297.952c25.445,0,46.072-20.627,46.072-46.071V102.96
		C451.048,77.516,430.421,56.889,404.976,56.889z M402.286,463.238H109.714V150.349h292.572V463.238z"
                  />
                  <path
                    className="st0"
                    d="M239.746,113.778h32.508c22.405,0,40.635-18.23,40.635-40.635V40.635C312.889,18.23,294.659,0,272.254,0
		h-32.508c-22.406,0-40.635,18.23-40.635,40.635v32.508C199.111,95.547,217.341,113.778,239.746,113.778z M231.619,40.635
		c0-4.492,3.634-8.127,8.127-8.127h32.508c4.492,0,8.127,3.635,8.127,8.127v16.254c0,4.492-3.635,8.127-8.127,8.127h-32.508
		c-4.493,0-8.127-3.635-8.127-8.127V40.635z"
                  />
                </g>
              </svg>
              <p className="mt-2 text-gray-900">Jobs</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
};

export default Why;
