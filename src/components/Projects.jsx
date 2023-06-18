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
      className="w-full h-auto overflow-visible lg:h-[250vh] xl:h-[200vh]"
      style={{
        backgroundImage: `url(${Volcano})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="relative ml-[35%] lg:ml-[25%] mt-10 inline-block w-[30%] lg:w-1/2">
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
      <div className="w-full h-fit flex flex-col lg:flex-row relative">
        <img
          src={PixelatedPokemon}
          className="scale-50 relative lg:absolute lg:left-0 xl:left-1/4"
          alt=""
        />
        <div className="relative lg:absolute inline-block w-full lg:w-1/2 xl:w-[30%] lg:left-[45%] xl:left-1/2 lg:top-12 xl:top-20 p-10">
          <img
            src={WhitePatch1}
            alt="white-patch"
            className="w-full h-[45vh] xl:h-auto"
          />
          <div className="absolute px-16 inset-0 flex flex-col justify-center text-center">
            <p className="text-pink text-xl lg:text-2xl font-bold mb-3">
              Pika Token
            </p>
            <p className="text-[3.5vw] sm:text-lg lg:text-[0.9rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
            </p>
            <button className="w-full sm:w-2/3 lg:w-1/2 mx-auto mt-5 bg-gradient-to-r px-3 py-2 rounded-xl from-[#FF3434] from-0% to-[#FF2199] to-100% text-white text-xl font-bold">
              BUY TOKEN
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-[20%] flex flex-col lg:flex-row relative">
        <img
          src={Pokeball}
          className="scale-50 relative lg:absolute lg:top-40 lg:left-1/2"
          alt=""
        />
        <div className="relative lg:absolute inline-block w-full lg:w-1/2 xl:w-[30%] lg:left-[5%] xl:left-1/2 lg:top-52 xl:top-20 p-10">
          <img
            src={WhitePatch1}
            alt="white-patch"
            className="w-full h-[45vh] xl:h-auto"
          />
          <div className="absolute px-16 inset-0 flex flex-col justify-center text-center">
            <p className="text-pink text-xl lg:text-2xl font-bold mb-3">
              Pika Token
            </p>
            <p className="text-[3.5vw] sm:text-lg lg:text-[0.9rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
            </p>
            <button className="w-full sm:w-2/3 lg:w-1/2 mx-auto mt-5 bg-gradient-to-r px-3 py-2 rounded-xl from-[#FF3434] from-0% to-[#FF2199] to-100% text-white text-xl font-bold">
              BUY TOKEN
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="w-full mt-[20%] lg:mt-[55%] xl:mt-1/2 flex flex-col lg:flex-row relative">
        <img
          src={PokemonGirl}
          className="scale-50 relative lg:absolute -mt-12 lg:-top-12 xl:left-1/4"
          alt=""
        />
        <div className="relative lg:absolute inline-block w-full lg:w-1/2 xl:w-[30%] lg:left-1/2 lg:top-20 p-10">
          <img
            src={WhitePatch1}
            alt="white-patch"
            className="w-full h-[45vh] xl:h-auto"
          />
          <div className="absolute px-16 inset-0 flex flex-col justify-center text-center">
            <p className="text-pink text-xl lg:text-2xl font-bold mb-3">
              Pika Token
            </p>
            <p className="text-[3.5vw] sm:text-lg lg:text-[0.9rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
            </p>
            <button className="w-full sm:w-2/3 lg:w-1/2 mx-auto mt-5 bg-gradient-to-r px-3 py-2 rounded-xl from-[#FF3434] from-0% to-[#FF2199] to-100% text-white text-xl font-bold">
              BUY TOKEN
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="w-full mt-[20%] flex flex-col lg:flex-row relative">
        <img
          src={Phone}
          className="scale-75 lg:scale-50 relative lg:absolute lg:top-40 xl:top-10 lg:left-1/2"
          alt=""
        />
        <div className="relative lg:absolute inline-block w-full lg:w-1/2 xl:w-[30%] xl:left-1/2 lg:top-60 xl:top-20 p-10">
          <img
            src={WhitePatch1}
            alt="white-patch"
            className="w-full h-[45vh] xl:h-auto"
          />
          <div className="absolute px-16 inset-0 flex flex-col justify-center text-center">
            <p className="text-pink text-xl lg:text-2xl font-bold mb-3">
              Pika Token
            </p>
            <p className="text-[3.5vw] sm:text-lg lg:text-[0.9rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
            </p>
            <button className="w-full sm:w-2/3 lg:w-1/2 mx-auto mt-5 bg-gradient-to-r px-3 py-2 rounded-xl from-[#FF3434] from-0% to-[#FF2199] to-100% text-white text-xl font-bold">
              BUY TOKEN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
