import Navbar from "./navbar/Navbar";
import BluePatch from "../assets/images/blue-patch.png";
import WhitePatch from "../assets/images/white-patch.png";
import Pokemons from "../assets/images/pokemons.png";

const Home = () => {
  return (
    <div className="bg-hero bg-no-repeat w-full h-screen relative inline-block">
      <Navbar />

      <div className="flex flex-col items-center justify-center w-full pt-10">
        <div className="relative inline-block w-2/3 sm:w-1/2 lg:w-1/2 xl:w-[30%]">
          <img
            src={BluePatch}
            alt="blue-patch"
            className="h-auto"
          />
          <div className="absolute top-3 lg:top-1/3 inset-0">
            <p className="z-20 text-center text-gradient text-3xl sm:5xl lg:text-6xl font-extrabold">
              Terramon
            </p>
          </div>
        </div>

        <div className="relative inline-block w-[90%] h-32 lg:w-3/4 xl:w-[50%] mt-5">
          <img
            src={WhitePatch}
            alt="white-patch"
            className="w-full h-full lg:h-auto"
          />
          <div className="absolute px-3 top-1/4 lg:top-3 inset-0">
            <p className="z-20 text-center text-sm sm:text-lg lg:text-xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eos
              error rerum a ut commodi! Blanditiis quo ipsam consequatur fugiat.
            </p>
          </div>
        </div>
      </div>
      <img
        src={Pokemons}
        alt="pokemons"
        className="w-full h-2/5 top-[73%] object-contain absolute 2xl:top-[60%] inset-0"
      />
      <div className="flex flex-col lg:flex-row items-center justify-center w-full pt-6 lg:pt-12 lg:space-x-16 space-y-4">
        <button className="bg-gradient-to-r px-4 py-1 sm:px-8 sm:py-3 rounded-xl from-[#FF9A40] from-0% to-[#FFDE2E] to-100% text-white text-lg lg:text-2xl font-bold">
          BUY TOKEN
        </button>
        <button className="bg-gradient-to-r px-10 py-1 sm:px-14 sm:py-3 rounded-xl from-[#FF3434] from-0% to-[#FF2199] to-100% text-white text-lg lg:text-2xl font-bold">
          CHART
        </button>
      </div>
    </div>
  );
};

export default Home;
