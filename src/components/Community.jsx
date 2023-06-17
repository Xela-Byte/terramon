import CommunityBG from "../assets/images/community-bg.jpg";
import LightBlueGradient from "../assets/images/lightblue-gradient.png";
import DeepBlueGradient from "../assets/images/community-deepblue-patch.png";
import "../css/roadmap.css";
import CommunityPokemon from "../assets/images/community-shared.png";
import TwitterIcon from "../assets/images/twitter.png";
import DiscordIcon from "../assets/images/discord.png";
import TelegramIcon from "../assets/images/telegram.png";

const Community = () => {
  return (
    <div className="roadmapContainer">
      <img
        src={CommunityBG}
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
            Community
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between relative ml-[40%] mt-10 w-[20%]">
        <div className="bg-gradient-to-r flex items-center justify-center w-[50px] h-[50px] p-2 rounded-xl from-[#1986DE] from-2.01% to-[#83C3F6] to-97.99%">
          <img
            src={TwitterIcon}
            alt=""
          />
        </div>
        <div className="bg-gradient-to-r flex items-center justify-center w-[50px] h-[50px] p-2 rounded-xl from-[#14B75F] from-0% to-[#6CDA8B] to-100%">
          <img
            src={DiscordIcon}
            alt=""
          />
        </div>
        <div className="bg-gradient-to-r flex items-center justify-center w-[50px] h-[50px] p-2 rounded-xl from-[#FF9A40] from-0% to-[#FFDE2E] to-100%">
          <img
            src={TelegramIcon}
            alt=""
          />
        </div>
      </div>
      <img
        src={CommunityPokemon}
        className="w-1/2 h-3/4 relative -mt-[5%] mx-auto object-contain"
        alt="bg"
      />
      <div className="absolute z-20 bottom-[15%] left-[25%] w-[50%] h-16">
        <img
          src={DeepBlueGradient}
          alt="blue-patch"
          className="w-full h-full"
        />
        <div className="absolute top-3 inset-0">
          <p className="z-20 text-center text-deepBlue lg:text-4xl font-bold">
            Terramon DAO coming soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;
