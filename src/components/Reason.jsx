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
    <div className="reasonContainer">
      <img
        src={ForestBG}
        className="reasonBG"
        alt="bg"
      />
      <div className="relative inline-block w-[30%] ml-[35%] mt-12">
        <img
          src={LightBluePatch}
          alt="blue-patch"
          className="h-full"
        />
        <div className="absolute top-[20%] inset-0">
          <p className="z-20 text-center text-white lg:text-5xl font-extrabold">
            Why Pokeballs?
          </p>
        </div>
      </div>
      <div className="relative inline-block w-[50%] mt-5 ml-[25%]">
        <img
          src={WhitePatch}
          alt="white-patch"
          className="h-auto"
        />
        <div className="absolute px-3 top-1/4 inset-0">
          <p className="z-20 text-center lg:text-xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eos
            error rerum a ut commodi! Blanditiis quo ipsam consequatur fugiat.
          </p>
        </div>
      </div>

      <div className="relative inline-block w-[20%] mt-5 ml-[40%]">
        <img
          src={Phone}
          alt="phone"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute inline-block w-[25%] left-0 p-10">
        <img
          src={PurplePatchPlus}
          alt="white-patch"
          className="h-auto scale-75"
        />
        <div className="absolute pt-20 px-16 inset-0">
          <img
            src={Photo}
            className="scale-50 m-auto"
            alt=""
          />
          <p className="z-20 text-center lg:text-lg font-semibold">
            Get NFT by accomplishing achievements
          </p>
        </div>
      </div>

      <div className="absolute inline-block w-[25%] left-20 bottom-0 p-10">
        <img
          src={OrangePatchPlus}
          alt="white-patch"
          className="h-auto scale-75"
        />
        <div className="absolute pt-20 px-16 inset-0">
          <img
            src={Person}
            className="scale-50 m-auto"
            alt=""
          />
          <p className="z-20 text-center lg:text-lg font-semibold">
            Get NFT by accomplishing achievements
          </p>
        </div>
      </div>

      <div className="absolute inline-block w-[25%] left-2/3 top-1/3 p-10">
        <img
          src={BluePatchPlus}
          alt="white-patch"
          className="h-auto scale-75"
        />
        <div className="absolute pt-14 px-16 inset-0">
          <img
            src={Eth}
            className="scale-50 m-auto"
            alt=""
          />
          <p className="z-20 text-center lg:text-lg font-semibold">
            Get NFT by accomplishing achievements
          </p>
        </div>
      </div>

      <div className="absolute inline-block w-[25%] left-3/4 top-[60%] p-10">
        <img
          src={GreenPatchPlus}
          alt="white-patch"
          className="h-auto scale-75"
        />
        <div className="absolute pt-14 px-16 inset-0">
          <img
            src={Divide}
            className="scale-50 m-auto"
            alt=""
          />
          <p className="z-20 text-center lg:text-lg font-semibold">
            Get NFT by accomplishing achievements
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reason;
