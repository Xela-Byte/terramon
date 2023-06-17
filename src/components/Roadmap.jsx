import RoadmapBG from "../assets/images/roadmapBG.jpg";
import "../css/roadmap.css";
import LightBlueGradient from "../assets/images/lightblue-gradient.png";
import BlueGradient from "../assets/images/blue-gradient.png";
import OrangeGradient from "../assets/images/yellow-gradient.png";
import GreenGradient from "../assets/images/green-gradient.png";
import PurpleGradient from "../assets/images/purple-gradient.png";
import RedGradient from "../assets/images/red-gradient.png";
import IndigoGradient from "../assets/images/indigo-gradient.png";

const Roadmap = () => {
  return (
    <div className="roadmapContainer">
      <img
        src={RoadmapBG}
        className="roadmapBG"
        alt="bg"
      />
      <div className="relative ml-[42.5%] mt-10 inline-block w-[15%]">
        <img
          src={LightBlueGradient}
          alt="blue-patch"
          className="w-full h-auto"
        />
        <div className="absolute top-1 inset-0">
          <p className="z-20 text-center text-white lg:text-4xl font-bold">
            Roadmap
          </p>
        </div>
      </div>

      <div className="absolute inline-block w-[25%] left-[30%] top-24 p-10">
        <img
          src={BlueGradient}
          alt="white-patch"
          className="w-full h-auto"
        />
        <div className="absolute space-y-1 pt-14 pl-20 px-16 inset-0">
          <p className="z-20 text-white lg:text-3xl font-extrabold">Q2 2023</p>
          <ul className="space-y-1">
            <li>Launch of the platform</li>
            <li>Loyalty and bonus program</li>
            <li>Multi-chain functionality</li>
            <li>Adding 7 chains to the staking</li>
          </ul>
        </div>
      </div>

      <div className="absolute inline-block w-[25%] left-[55%] top-1/3 p-10">
        <img
          src={OrangeGradient}
          alt="white-patch"
          className="w-full h-auto"
        />
        <div className="absolute space-y-1 pt-12 pl-20 px-16 inset-0">
          <p className="z-20 text-white lg:text-3xl font-extrabold">Q3 2023</p>
          <ul className="space-y-1">
            <li> Release unique NFT Collection</li>
            <li> NFT giveaway for the top referrers</li>
            <li> Referral update: Teams and more bonuses</li>
            <li> Security Audit</li>
            <li> IDO token sale</li>
          </ul>
        </div>
      </div>

      <div className="absolute inline-block w-[25%] left-0 top-1/3 p-10">
        <img
          src={GreenGradient}
          alt="white-patch"
          className="w-full h-auto"
        />
        <div className="absolute space-y-1 pt-12 pl-20 px-16 inset-0">
          <p className="z-20 text-white lg:text-3xl font-extrabold">Q4 2023</p>
          <ul className="space-y-1 pt-2">
            <li> Adding new chains to the staking</li>
            <li> Launch DAO with voting for new features</li>
            <li> NFT stacking program</li>
          </ul>
        </div>
      </div>

      <div className="absolute inline-block w-[25%] left-[15%] top-[55%] p-10">
        <img
          src={PurpleGradient}
          alt="white-patch"
          className="w-full h-auto"
        />
        <div className="absolute space-y-1 pt-12 pl-20 px-16 inset-0">
          <p className="z-20 text-white lg:text-3xl font-extrabold">Q1 2024</p>
          <ul className="space-y-1 pt-2">
            <li> Mobile app release</li>
            <li> Secret GameFi project release</li>
            <li>More integrations with other projects</li>
          </ul>
        </div>
      </div>

      <div className="absolute inline-block w-[20%] left-[40%] top-3/4 p-10">
        <img
          src={RedGradient}
          alt="white-patch"
          className="w-full h-20"
        />
        <div className="absolute space-y-1 pt-12 pl-20 px-16 inset-0">
          <p className="z-20 text-white lg:text-3xl font-extrabold">Q2 2024</p>
          <ul className="space-y-1">Attracting influencers</ul>
        </div>
      </div>

      <div className="absolute inline-block w-[20%] left-[23%] bottom-0 p-7">
        <img
          src={IndigoGradient}
          alt="white-patch"
          className="w-full h-auto"
        />
        <div className="absolute space-y-1 pt-12 pl-12 px-16 inset-0">
          <p className="z-20 text-white lg:text-3xl font-extrabold">Q3 2024</p>
          <ul className="space-y-1">Launching your own DeFi protocol</ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
