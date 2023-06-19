import BluePatch from "../../assets/images/blue-patch.png";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] lg:flex px-5 py-6 lg:px-10 lg:py-6 items-center">
      <div class="relative inline-block w-1/2 sm:w-1/4 lg:w-[20%] 2xl:w-[12%]">
        <img
          src={BluePatch}
          alt="blue-patch"
          class="h-auto"
        />
        <div class="absolute inset-0 ">
          <p className="z-20 text-center text-gradient text-lg lg:text-2xl font-extrabold">
            Terramon
          </p>
        </div>
      </div>

      <div className="lg:flex hidden mx-auto lg:space-x-5 xl:space-x-10">
        <div>
          <p className="font-semibold text-xl lg:text-lg">Home</p>
        </div>
        <div>
          <p className="font-semibold text-xl lg:text-lg">Token</p>
        </div>
        <div>
          <p className="font-semibold text-xl lg:text-lg">How to buy</p>
        </div>
        <div>
          <p className="font-semibold text-xl lg:text-lg">Metaverse</p>
        </div>
        <div>
          <p className="font-semibold text-xl lg:text-lg">Roadmap</p>
        </div>
      </div>

      <button className="lg:flex hidden bg-gradient-to-r lg:px-5 lg:py-2  rounded-xl from-[#1986DE] from-2.01% to-[#83C3F6] to-97.99% text-white text-2xl font-bold">
        CONNECT WALLET
      </button>
    </div>
  );
};

export default Navbar;
