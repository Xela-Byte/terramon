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
    <div className="w-full lg:h-[120vh] h-auto relative overflow-hidden">
      <img
        src={RoadmapBG}
        className="roadmapBG"
        alt="bg"
      />
      <div className="relative lg:ml-[35%] 2xl:ml-[40%] ml-[25%] mt-5 lg:mt-10 inline-block w-1/2 h-10 lg:w-[30%] 2xl:w-[20%]">
        <img
          src={LightBlueGradient}
          alt="blue-patch"
          className="w-full h-full lg:h-auto"
        />
        <div className="absolute top-1 xl:top-3 2xl:top-3 inset-0">
          <p className="z-20 text-center text-white text-2xl lg:text-4xl xl:text-5xl font-bold">
            Roadmap
          </p>
        </div>
      </div>

      <div className="relative lg:absolute inline-block w-full h-full md:w-[45%] xl:w-[35%] 2xl:w-[25%] lg:left-[15%] xl:left-[15%] 2xl:left-[30%] lg:top-24 2xl:top-32 p-10">
        <img
          src={BlueGradient}
          alt="white-patch"
          className="w-full h-[25vh] 2xl:h-[23vh]"
        />
        <div className="absolute space-y-1 pt-14 pl-16 lg:pl-20 px-4 lg:px-16 inset-0">
          <p className="z-20 text-white mb-2 lg:text-3xl font-extrabold">
            Q2 2023
          </p>
          <ul className="space-y-1">
            <li>Launch of the platform</li>
            <li>Loyalty and bonus program</li>
            <li>Multi-chain functionality</li>
            <li>Adding 7 chains to the staking</li>
          </ul>
        </div>
      </div>

      <div className="relative lg:absolute inline-block lg:w-[45%] xl:w-[25%] 2xl:w-1/4 lg:left-[55%] 2xl:left-2/3 lg:top-1/4 p-10">
        <img
          src={OrangeGradient}
          alt="white-patch"
          className="w-full h-[35vh] sm:h-[30vh] lg:h-[27vh]"
        />
        <div className="absolute space-y-1 pt-12 2xl:pt-16 pl-16 lg:pl-20 px-16 inset-0">
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

      <div className="relative lg:absolute inline-block lg:w-[35%] 2xl:w-[25%] lg:left-0 lg:top-[45%] xl:top-1/3 p-10">
        <img
          src={GreenGradient}
          alt="white-patch"
          className="w-full h-[25vh] lg:h-[27vh] 2xl:h-[22vh]"
        />
        <div className="absolute space-y-1 pt-12  sm:pt-16 pl-20 px-16 inset-0">
          <p className="z-20 text-white lg:text-3xl font-extrabold">Q4 2023</p>
          <ul className="space-y-1 pt-2">
            <li> Adding new chains to the staking</li>
            <li> Launch DAO with voting for new features</li>
            <li> NFT stacking program</li>
          </ul>
        </div>
      </div>

      <div className="relative lg:absolute inline-block lg:w-[40%] lg:left-1/2 2xl:w-[30%] xl:left-[15%] lg:top-[55%] xl:top-[55%] 2xl:top-[60%] p-10">
        <img
          src={PurpleGradient}
          alt="white-patch"
          className="w-full h-[25vh] lg:h-[23vh]"
        />
        <div className="absolute space-y-1 pt-12 sm:pt-16 2xl:p-20 pl-20 px-16 inset-0">
          <p className="z-20 text-white lg:text-3xl font-extrabold">Q1 2024</p>
          <ul className="space-y-1 pt-2">
            <li> Mobile app release</li>
            <li> Secret GameFi project release</li>
            <li>More integrations with other projects</li>
          </ul>
        </div>
      </div>

      <div className="relative lg:absolute inline-block lg:w-1/3 2xl:w-[20%] lg:left-[40%] 2xl:left-[45%] lg:top-[77%] xl:top-3/4 p-10">
        <img
          src={RedGradient}
          alt="white-patch"
          className="w-full h-24 lg:h-20"
        />
        <div className="absolute space-y-1 pt-12  sm:pt-16 lg:pt-12 pl-20 px-16 inset-0">
          <p className="z-20 text-white lg:text-3xl font-extrabold">Q2 2024</p>
          <ul className="space-y-1">Attracting influencers</ul>
        </div>
      </div>

      <div className="relative lg:absolute inline-block sm:w-2/3 lg:w-[35%] 2xl:w-[23%] lg:left-[10%] 2xl:left-[23%] lg:-bottom-5 2xl:-bottom-6 p-7">
        <img
          src={IndigoGradient}
          alt="white-patch"
          className="w-full h-auto"
        />
        <div className="absolute space-y-1 pt-10 sm:pt-14 lg:pt-12 pl-12 px-16 md:px-20 inset-0">
          <p className="z-20 text-white lg:text-3xl font-extrabold">Q3 2024</p>
          <ul className="space-y-1">Launching your own DeFi protocol</ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
