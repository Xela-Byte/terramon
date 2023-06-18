import Background from "../assets/images/faq-bg.jpg";
import Pokemon from "../assets/images/pokemon-faq.png";
import BackgroundWhite from "../assets/images/white-inverse-patch.png";
import YellowGradient from "../assets/images/yellow-faq.png";

import "../css/earn-platform.css";

const FAQ = () => {
  return (
    <div className="w-full lg:h-screen h-[75vh] relative overflow-hidden">
      <img
        src={Background}
        className="platformBG"
        alt="bg"
      />
      <div className="relative mb-5 h-auto ml-[37.5%] lg:absolute z-30 lg:ml-[45%] mt-10 inline-block w-1/4 lg:w-[10%] lg:h-[50px]">
        <img
          src={YellowGradient}
          alt="blue-patch"
          className="w-full h-full"
        />
        <div className="absolute top-1 inset-0">
          <p className="z-20 text-center text-white lg:text-4xl font-bold">
            F.A.Q.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative lg:overflow-hidden lg:ml-auto z-30">
        <img
          src={BackgroundWhite}
          className="platformWhiteBG hidden lg:flex"
          alt="bg"
        />
        <div className="listContainer px-5 space-y-6 lg:space-y-10 lg:pt-40">
          <div className="w-full lg:w-1/2 mx-auto bg-gradient-to-r px-4 lg:px-14 py-1 lg:py-3 rounded-xl from-[#2843D2] from-0% to-[#6B7EDB] to-100% text-white text-lg lg:text-xl font-semibold">
            How do I create an account?
          </div>
          <div className="w-full lg:w-1/2 mx-auto bg-gradient-to-r px-4 lg:px-14 py-1 lg:py-3 rounded-xl from-[#14B75F] from-0% to-[#6CDA8B] to-100% text-white text-lg lg:text-xl font-semibold">
            How to make a deposit?
          </div>
          <div className="w-full lg:w-1/2 mx-auto bg-gradient-to-r px-4 lg:px-14 py-1 lg:py-3 rounded-xl from-[#FF9A40] from-0% to-[#FFDE2E] to-100% text-white text-lg lg:text-xl font-semibold">
            How do I increase my income?
          </div>
          <div className="w-full lg:w-1/2 mx-auto bg-gradient-to-r px-4 lg:px-14 py-1 lg:py-3 rounded-xl from-[#FF3434] from-0% to-[#FF2199] to-100% text-white text-lg lg:text-xl font-semibold">
            How to invite friends?
          </div>
          <div className="w-full lg:w-1/2 mx-auto bg-gradient-to-r px-4 lg:px-14 py-1 lg:py-3 rounded-xl from-[#A70EB2] from-0% to-[#FF60E6] to-100% text-white text-lg lg:text-xl font-semibold">
            How to get NFT?
          </div>
        </div>
      </div>
      <img
        src={Pokemon}
        className="absolute scale-50 top-36 bottom-0 -left-20"
        alt="pokemon"
      />
    </div>
  );
};

export default FAQ;
