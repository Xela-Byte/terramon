import Navbar from "./navbar/Navbar";
import BluePatch from "../assets/images/blue-patch.png";
import WhitePatch from "../assets/images/white-patch.png";
import Pokemons from "../assets/images/pokemons.png";

const Home = () => {
  return (
    <div className="bg-hero bg-no-repeat w-full h-screen relative inline-block">
      <Navbar />

      <div className="flex flex-col items-center justify-center w-full lg:pt-10">
        <div className="relative inline-block w-[30%]">
          <img
            src={BluePatch}
            alt="blue-patch"
            className="h-auto"
          />
          <div className="absolute top-1/3 inset-0">
            <p className="z-20 text-center text-gradient lg:text-6xl font-extrabold">
              Terramon
            </p>
          </div>
        </div>

        <div className="relative inline-block w-[50%] mt-5">
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
      </div>
      <img
        src={Pokemons}
        alt="pokemons"
        className="w-full h-2/5 object-contain absolute top-[60%] inset-0"
      />
      <div className="flex items-center justify-center w-full lg:pt-12 lg:space-x-16">
        <button className="bg-gradient-to-r px-8 py-3 rounded-xl from-[#FF9A40] from-0% to-[#FFDE2E] to-100% text-white text-2xl font-bold">
          BUY TOKEN
        </button>
        <button className="bg-gradient-to-r px-14 py-3 rounded-xl from-[#FF3434] from-0% to-[#FF2199] to-100% text-white text-2xl font-bold">
          CHART
        </button>
      </div>
    </div>
  );
};

export default Home;
