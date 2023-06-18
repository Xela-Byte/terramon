import "../css/reason.css";
import WhitePatch from "../assets/images/white-patch.png";
import ForestBG from "../assets/images/forestBG.jpg";
import LightBluePatch from "../assets/images/lightBlue-patch.png";
import PurplePatchPlus from "../assets/images/purple-gradient-patch-plus.png";
import OrangePatchPlus from "../assets/images/yellow-gradient-patch-plus.png";
import BluePatchPlus from "../assets/images/blue-gradient-patch-plus.png";
import GreenPatchPlus from "../assets/images/green-gradient-patch-plus.png";
import Phone from "../assets/images/phone.png";
import Photo from "../assets/images/photo.png";
import Person from "../assets/images/person.png";
import Eth from "../assets/images/eth.png";
import Divide from "../assets/images/divide.png";

const Reason = () => {
  return (
    <div className="w-full lg:h-screen h-auto relative overflow-hidden">
      <img
        src={ForestBG}
        className="reasonBG"
        alt="bg"
      />
      <div className="relative inline-block w-[60%] ml-[20%] sm:w-1/2 sm:ml-[25%] lg:w-1/2 2xl:w-[40%] 2xl:ml-[30%] mt-12">
        <img
          src={LightBluePatch}
          alt="blue-patch"
          className="h-full"
        />
        <div className="absolute top-[20%] inset-0">
          <p className="z-20 text-center text-white sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
            Why Pokeballs?
          </p>
        </div>
      </div>
      <div className="relative inline-block w-[90%] h-32 ml-[5%] lg:w-3/4 sm:mt-10 lg:mt-5 lg:ml-[12.5%]">
        <img
          src={WhitePatch}
          alt="white-patch"
          className="w-full h-full lg:h-auto"
        />
        <div className="absolute w-full px-3 top-1/4 lg:top-3 2xl:top-1/4 inset-0">
          <p className="z-20 text-center text-sm sm:text-lg lg:text-xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eos
            error rerum a ut commodi! Blanditiis quo ipsam consequatur fugiat.
          </p>
        </div>
      </div>

      <div className="relative lg:inline-block hidden lg:w-[20%] mt-5 ml-[40%]">
        <img
          src={Phone}
          alt="phone"
          className="w-full h-auto"
        />
      </div>

      <div className="relative lg:absolute inline-block w-full sm:w-2/3 sm:ml-[18%] lg:w-1/3 xl:w-[30%] 2xl:w-1/4 lg:-left-[20%] xl:top-[35%] p-10">
        <img
          src={PurplePatchPlus}
          alt="white-patch"
          className="h-auto scale-100"
        />
        <div className="absolute w-full pt-10 px-10 sm:px-20 sm:pt-16 lg:pt-10 xl:pt-14 2xl:pt-16 lg:px-10 2xl:px-16 inset-0">
          <img
            src={Photo}
            className="scale-[0.40] lg:scale-50 m-auto"
            alt=""
          />
          <p className="z-20 text-center text-lg font-semibold">
            Get NFT by accomplishing achievements
          </p>
        </div>
      </div>

      <div className="relative lg:absolute inline-block w-full sm:w-2/3 sm:ml-[18%] xl:ml-[15%] lg:w-1/3 xl:w-[30%] 2xl:w-1/4 lg:bottom-0 lg:-left-32 xl:left-0 p-10">
        <img
          src={OrangePatchPlus}
          alt="white-patch"
          className="h-auto scale-100 lg::scale-75"
        />
        <div className="absolute w-full pt-10 px-10 sm:px-20 sm:pt-16 lg:pt-14 lg:px-12 xl:pt-20 2xl:pt-12 xl:px-16 inset-0">
          <img
            src={Person}
            className="scale-[0.40] lg:scale-[0.4] xl:scale-50 m-auto"
            alt=""
          />
          <p className="z-20 text-center text-lg font-semibold">
            Get NFT by accomplishing achievements
          </p>
        </div>
      </div>

      <div className="relative lg:absolute inline-block w-full sm:w-2/3 sm:ml-[18%] lg:w-1/2 xl:w-1/2 2xl:w-[35%] lg:-right-10 lg:top-1/3 xl:top-[30%] p-10">
        <img
          src={BluePatchPlus}
          alt="white-patch"
          className="h-auto scale-100 lg:scale-75"
        />
        <div className="absolute w-full pt-10 px-10 sm:px-20 sm:pt-16 lg:pt-16 xl:pt-20 xl:pr-36 2xl:px-16 inset-0">
          <img
            src={Eth}
            className="scale-[0.40] lg:scale-50 m-auto"
            alt=""
          />
          <p className="z-20 text-center lg:text-lg font-semibold xl:px-10">
            Get NFT by accomplishing achievements
          </p>
        </div>
      </div>

      <div className="relative lg:absolute inline-block w-full sm:w-2/3 sm:ml-[18%] lg:w-1/2 xl:w-[45%] 2xl:w-[40%] lg:-right-10 lg:-bottom-10 p-10">
        <img
          src={GreenPatchPlus}
          alt="white-patch"
          className="h-auto scale-100 lg:scale-75"
        />
        <div className="absolute w-full pt-10 px-10 sm:px-20 sm:pt-16 lg:pt-20 xl:px-16 inset-0">
          <img
            src={Divide}
            className="scale-[0.40] lg:scale-[0.40] xl:scale-50 m-auto"
            alt=""
          />
          <p className="z-20 text-center lg:text-lg font-semibold xl:px-16">
            Get NFT by accomplishing achievements
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reason;
