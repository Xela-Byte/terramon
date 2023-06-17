import "../css/roadmap.css";
import ProjectBlueGradient from "../assets/images/project-blue-patch.png";
import Volcano from "../assets/images/volcano.jpg";
import Pokeball from "../assets/images/pokeball.png";
import PixelatedPokemon from "../assets/images/pixelated-pokemon.png";
import PokemonGirl from "../assets/images/pokemon-girl.png";
import Phone from "../assets/images/project-phone.png";
import WhitePatch1 from "../assets/images/white-patch-1.png";

const Projects = () => {
  return (
    <div
      className="roadmapContainer"
      style={{
        minHeight: "100vh",
        overflow: "visible",
        backgroundImage: `url(${Volcano})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "200vh",
      }}>
      <div className="relative ml-[35%] mt-10 inline-block w-[30%]">
        <img
          src={ProjectBlueGradient}
          alt="blue-patch"
          className="w-full h-14"
        />
        <div className="absolute top-2 inset-0">
          <p className="z-20 text-center text-white lg:text-4xl font-bold">
            Future Projects
          </p>
        </div>
      </div>
      <div className="w-full h-fit flex relative">
        <img
          src={PixelatedPokemon}
          className="scale-50 absolute left-1/4"
          alt=""
        />
        <div className="absolute inline-block w-[30%] left-1/2 top-20 p-10">
          <img
            src={WhitePatch1}
            alt="white-patch"
            className="w-full h-auto"
          />
          <div className="absolute px-16 inset-0 flex flex-col justify-center text-center">
            <p className="text-pink text-2xl font-bold mb-3">Pika Token</p>
            <p className="text-[0.9rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
            </p>
            <button className="w-1/2 mx-auto mt-5 bg-gradient-to-r px-3 py-2 rounded-xl from-[#FF3434] from-0% to-[#FF2199] to-100% text-white text-xl font-bold">
              BUY TOKEN
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-[20%]  flex relative">
        <img
          src={Pokeball}
          className="scale-50 absolute left-1/2"
          alt=""
        />
        <div className="absolute inline-block w-[30%] left-1/4 top-20 p-10">
          <img
            src={WhitePatch1}
            alt="white-patch"
            className="w-full h-auto"
          />
          <div className="absolute px-16 inset-0 flex flex-col justify-center text-center">
            <p className="text-pink text-2xl font-bold mb-3">Pika Token</p>
            <p className="text-[0.9rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
            </p>
            <button className="w-1/2 mx-auto mt-5 bg-gradient-to-r px-3 py-2 rounded-xl from-[#FF3434] from-0% to-[#FF2199] to-100% text-white text-xl font-bold">
              BUY TOKEN
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="w-full mt-[20%]  flex relative">
        <img
          src={PokemonGirl}
          className="scale-50 absolute -top-12 left-1/4"
          alt=""
        />
        <div className="absolute inline-block w-[30%] left-1/2 top-20 p-10">
          <img
            src={WhitePatch1}
            alt="white-patch"
            className="w-full h-auto"
          />
          <div className="absolute px-16 inset-0 flex flex-col justify-center text-center">
            <p className="text-pink text-2xl font-bold mb-3">Pika Token</p>
            <p className="text-[0.9rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
            </p>
            <button className="w-1/2 mx-auto mt-5 bg-gradient-to-r px-3 py-2 rounded-xl from-[#FF3434] from-0% to-[#FF2199] to-100% text-white text-xl font-bold">
              BUY TOKEN
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="w-full mt-[20%]  flex relative">
        <img
          src={Phone}
          className="scale-50 absolute top-10 left-1/2"
          alt=""
        />
        <div className="absolute inline-block w-[30%] left-1/4 top-48 p-10">
          <img
            src={WhitePatch1}
            alt="white-patch"
            className="w-full h-auto"
          />
          <div className="absolute px-16 inset-0 flex flex-col justify-center text-center">
            <p className="text-pink text-2xl font-bold mb-3">Pika Token</p>
            <p className="text-[0.9rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
            </p>
            <button className="w-1/2 mx-auto mt-5 bg-gradient-to-r px-3 py-2 rounded-xl from-[#FF3434] from-0% to-[#FF2199] to-100% text-white text-xl font-bold">
              BUY TOKEN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
