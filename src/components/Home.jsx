import BluePatch from "../assets/images/blue-patch.png";
import WhitePatch from "../assets/images/white-home-patch.png";
import Pokemons from "../assets/images/pokemons.png";
import Navbar from "./navbar/Navbar";
import Arrow from "../assets/images/green-arrow.png";
import Eth from "../assets/images/ether.png";
import Card from "../assets/images/card.png";
import USDT from "../assets/images/usdt.png";

const Home = () => {
  return (
    <div className="bg-hero bg-no-repeat w-full h-auto relative inline-block">
      <Navbar />

      <div className="flex flex-col items-center justify-center w-full pt-10">
        <div className="relative inline-block w-2/3 sm:w-1/2 lg:w-1/2 xl:w-[40%] 2xl:w-[30%]">
          <img
            src={BluePatch}
            alt="blue-patch"
            className="h-auto"
          />
          <div className="absolute top-3 lg:top-1/3 xl:top-[20%] inset-0">
            <p className="z-20 text-center text-gradient text-3xl sm:5xl lg:text-6xl font-extrabold">
              Terramon
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row lg:justify-evenly my-10 p-5 lg:pt-5">
          <div>
            <div className="relative inline-block sm:pl-[15%] md:pl-[25%] lg:pl-0">
              <img
                src={WhitePatch}
                alt="blue-patch"
                className="h-[35vh] sm:h-[30vh]"
              />
              <div className="absolute top-0 p-5">
                <p>
                  <span className="text-pink font-semibold text-sm">
                    Presale {"  "}
                  </span>
                  is in Progress
                </p>
                <p className="text-black font-bold text-lg">
                  Pika Token: the incredible,
                </p>
                <p className="text-orange font-bold text-lg">
                  play to earn full utility meme coin
                </p>
                <p className="text-green font-semibold">
                  Earn.{" "}
                  <span className="text-orange font-semibold">Stake.</span>{" "}
                  Play.{" "}
                  <span className="text-orange font-semibold">Connect. </span>{" "}
                </p>
                <p className="text-sm font-semibold mt-5">
                  Welcome to Terraverse, the exciting new web3 game that lets
                  you collect, nurture and battle Terramon NFTs.
                </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-center lg:justify-start lg:pt-5">
              <button className="bg-gradient-to-r px-10 py-1 sm:px-14 sm:py-3 rounded-xl from-[#FF3434] from-0% to-[#FF2199] to-100% text-white text-lg lg:text-2xl font-bold">
                CHART
              </button>
            </div>
          </div>
          <div className="w-full lg:w-72 2xl:w-80 h-auto rounded-lg mt-12 lg:mt-0 mb-16 bg-transparentColor z-20">
            <div className="w-full rounded-t-lg bg-deeperBlue py-3">
              <p className="text-center text-gradient text-2xl sm:text-3xl sm:my-5 font-bold">
                Until Stage X
              </p>
              <div className="flex justify-between pt-3 px-5">
                <div className="w-[60px] h-[60px] flex flex-col items-center">
                  <div className="w-[40px] h-[40px] bg-white rounded-md flex items-center justify-center">
                    <p className="text-lg font-bold">10</p>
                  </div>
                  <p className="text-white text-sm text-center mt-2">Days</p>
                </div>
                <p className="text-white text-xl">:</p>
                <div className="w-[60px] h-[60px] flex flex-col items-center">
                  <div className="w-[40px] h-[40px] bg-white rounded-md flex items-center justify-center">
                    <p className="text-lg font-bold">11</p>
                  </div>
                  <p className="text-white text-sm text-center mt-2">Hours</p>
                </div>
                <p className="text-white text-xl">:</p>
                <div className="w-[60px] h-[60px] flex flex-col items-center">
                  <div className="w-[40px] h-[40px] bg-white rounded-md flex items-center justify-center">
                    <p className="text-lg font-bold">14</p>
                  </div>
                  <p className="text-white text-sm text-center mt-2">
                    Minuites
                  </p>
                </div>
                <p className="text-white text-xl">:</p>
                <div className="w-[60px] h-[60px] flex flex-col items-center">
                  <div className="w-[40px] h-[40px] bg-white rounded-md flex items-center justify-center">
                    <p className="text-lg font-bold">49</p>
                  </div>
                  <p className="text-white text-sm text-center mt-2">Seconds</p>
                </div>
              </div>
              <div className="flex w-full p-5">
                <div className="flex w-1/2 items-center">
                  <img
                    src={Arrow}
                    className="scale-50"
                    alt=""
                  />
                  <p className="text-green font-bold">55.44% Sold</p>
                </div>
                <div className="flex flex-col ml-auto">
                  <p className="text-center text-gradient text-sm font-bold">
                    5,528,789
                  </p>
                  <p className="text-white">remaining</p>
                </div>
              </div>
              <div className="w-[90%] mx-auto h-5 mb-5 rounded-xl bg-orange ">
                <div className="w-1/2 h-full rounded-xl bg-green" />
              </div>
            </div>
            <div className="w-full h-[40%] p-5">
              <div className="flex justify-between">
                <div className="flex bg-white rounded-md px-3 py-1 items-center justify-center">
                  <img
                    src={Eth}
                    className="scale-50"
                    alt=""
                  />
                  <p className="text-sm font-semibold">ETH</p>
                </div>
                <div className="flex bg-white rounded-md px-3 py-1 items-center justify-center">
                  <img
                    src={Card}
                    className="scale-50"
                    alt=""
                  />
                  <p className="text-sm font-semibold">Card</p>
                </div>
                <div className="flex bg-white rounded-md px-3 py-1 items-center justify-center">
                  <img
                    src={USDT}
                    className="scale-50"
                    alt=""
                  />
                  <p className="text-sm font-semibold">USDT</p>
                </div>
              </div>

              <form className="py-5">
                <label htmlFor="amountpaid">
                  <p className="text-sm text-white mb-2">
                    Amount in ETH you pay
                  </p>
                </label>
                <input
                  type="text"
                  className="w-full placeholder:font-bold placeholder:text-black p-2 mb-5 rounded-md"
                  placeholder="0"
                />
                <label htmlFor="amountpaid">
                  <p className="text-sm text-white mb-2">
                    Amount in Pika Token you receive
                  </p>
                </label>
                <input
                  type="text"
                  className="w-full placeholder:font-bold placeholder:text-black p-2 rounded-md"
                  placeholder="0"
                />
                <button
                  type="submit"
                  className="w-full mt-10 bg-gradient-to-r px-5 py-2 rounded-xl from-[#1986DE] from-2.01% to-[#83C3F6] to-97.99% text-white text-lg font-bold">
                  CONNECT WALLET
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <img
        src={Pokemons}
        alt="pokemons"
        className="w-full h-2/5 md:h-1/4 top-[75%] object-contain absolute z-10 2xl:top-[75%] inset-0"
      />
    </div>
  );
};

export default Home;
