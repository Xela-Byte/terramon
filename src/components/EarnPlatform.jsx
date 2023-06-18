import Pokemon from "../assets/images/pokemon.png";
import Background from "../assets/images/bg-secondary.jpg";
import BackgroundWhite from "../assets/images/bg-white-patch.png";
import PurplePatch from "../assets/images/purple-patch.png";
import PurpleGradientPatch from "../assets/images/purple-gradient-patch.png";
import BlueGradientPatch from "../assets/images/blue-gradient-patch.png";

import "../css/earn-platform.css";

const EarnPlatform = () => {
  return (
    <div className="w-full lg:h-screen 2xl:h-[75vh] h-auto relative overflow-hidden">
      <img
        src={Background}
        className="platformBG hidden lg:flex"
        alt="bg"
      />
      <div className="relative w-[100%] h-auto lg:w-1/2 lg:absolute">
        <img
          src={BackgroundWhite}
          className="platformWhiteBG w-full"
          alt="bg"
        />

        <div className="listContainer w-full px-2  py-10 2xl:p-10">
          <div className="listContent w-[100%] mb-3 lg:w-52 lg:mb-1 lg:h-20">
            <img
              src={PurplePatch}
              className="absolute object-cover scale-75"
              alt="patch"
            />
            <p className="text-white text-4xl font-extrabold listText">Stake</p>
          </div>
          <p className="px-12 mb-5 lg:mb-3 text-xl font-medium">
            Stake Pokeballs Tokens or Pokeballs-ETH LP to earn Plasma Points.
            Plasma points will not be tradable. With Plasma Points you can mint
            rare NFTs called Origin Pokeballeps. There will only be a LIMITED
            number of these available.
          </p>{" "}
          <div className="listContent w-[100%] mb-3 lg:mb-1 lg:w-52 lg:h-20">
            <img
              src={PurpleGradientPatch}
              className="absolute object-cover scale-75"
              alt="patch"
            />
            <p className="text-white text-4xl font-extrabold listText">Earn</p>
          </div>
          <p className="px-12 mb-5 lg:mb-3 text-xl font-medium">
            Whoever has the biggest stake gets the most Plasma for each block.
            Lock your stake for longer and it will count as a bigger share.
          </p>{" "}
          <div className="listContent w-[100%] mb-3 lg:mb-1 lg:w-52 lg:h-20">
            <img
              src={BlueGradientPatch}
              className="absolute object-cover scale-75"
              alt="patch"
            />
            <p className="text-white text-4xl font-extrabold listText">Stake</p>
          </div>
          <p className="px-12 mb-5 lg:mb-3 text-xl font-medium">
            Spend Plasma to mint Genesis NFTs, characters needed to play Super
            Galactic.
          </p>
          <div className="w-full flex items-center justify-center pt-2 xl:pt-7 2xl:pt-14">
            <button className="bg-gradient-to-r px-6 py-3 rounded-xl from-[#14B75F] from-0% to-[#6CDA8B] to-100% text-white text-xl font-bold">
              START EARNING
            </button>
          </div>
        </div>
      </div>
      <img
        src={Pokemon}
        className="absolute scale-50 object-cover left-[65%] lg:left-[45%] lg:top-1/3 top-1/4 hidden lg:right-10 lg:flex"
        alt="pokemon"
      />
    </div>
  );
};

export default EarnPlatform;
