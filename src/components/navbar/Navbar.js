import BluePatch from "../../assets/images/blue-patch.png";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] lg:flex px-10 py-6 items-center">
      <div class="relative inline-block w-[10%]">
        <img
          src={BluePatch}
          alt="blue-patch"
          class="h-auto"
        />
        <div class="absolute inset-0 ">
          <p className="z-20 text-center text-gradient lg:text-2xl font-extrabold">
            Terramon
          </p>
        </div>
      </div>

      <div className="lg:flex hidden mx-auto lg:space-x-10">
        <div>
          <p className="font-semibold text-xl">Home</p>
        </div>
        <div>
          <p className="font-semibold text-xl">Token</p>
        </div>
        <div>
          <p className="font-semibold text-xl">How to buy</p>
        </div>
        <div>
          <p className="font-semibold text-xl">Metaverse</p>
        </div>
        <div>
          <p className="font-semibold text-xl">Roadmap</p>
        </div>
      </div>

      <button className="lg:flex hidden bg-gradient-to-r px-10 py-3 rounded-xl from-[#1986DE] from-2.01% to-[#83C3F6] to-97.99% text-white text-2xl font-bold">
        CONNECT WALLET
      </button>
    </div>
  );
};

export default Navbar;
