import "../css/roadmap.css";
import CollectionBG from "../assets/images/collection.jpg";
import BlackPokemon from "../assets/images/black-pokemon.png";
import RedPokemon from "../assets/images/red-pokemon.png";
import BluePokemon from "../assets/images/blue-pokemon.png";
import GreyPokemon from "../assets/images/grey-pokemon.png";
import YellowPokemon from "../assets/images/yellow-pokemon.png";
import WhitePokemon from "../assets/images/white-pokemon.png";

const Collections = () => {
  return (
    <div className="w-full lg:h-screen h-auto relative overflow-hidden">
      <img
        src={CollectionBG}
        className="roadmapBG"
        alt="bg"
      />
      <div className="relative mt-10 inline-block px-5 lg:ml-[12.5%] xl:ml-[25%] text-center lg:w-3/4 xl:w-1/2">
        <p className="text-xl lg:text-3xl font-bold text-deepBlue">
          Making deposits and inviting referrals you can collect an entire NFT
          collection
        </p>
      </div>

      <div className="relative mt-10 inline-block text-center h-[90%] w-full">
        <img
          src={BlackPokemon}
          className="relative lg:absolute scale-50 sm:left-1/4 lg:left-0 xl:top-1/4 2xl:top-0"
          alt="black-pokemon"
        />
        <img
          src={BluePokemon}
          className="relative lg:absolute scale-50 sm:left-[20%] lg:left-1/4 lg:top-[10%] xl:top-1/4 2xl:top-0"
          alt="black-pokemon"
        />
        <img
          src={YellowPokemon}
          className="relative lg:absolute scale-50 sm:left-[20%] lg:top-1/3 lg:left-1/4 lg:bottom-0"
          alt="black-pokemon"
        />
        <img
          src={GreyPokemon}
          className="relative lg:absolute scale-50 sm:left-[20%] lg:left-1/2 lg:top-[15%] xl:top-1/4 2xl:top-0"
          alt="black-pokemon"
        />
        <img
          src={RedPokemon}
          className="relative lg:absolute scale-50 sm:left-[20%] lg:left-[73%] xl:left-3/4 lg:top-[5%] xl:top-1/4 2xl:top-0"
          alt="black-pokemon"
        />
        <img
          src={WhitePokemon}
          className="relative lg:absolute scale-50 lg:left-[35%] xl:right-0 lg:bottom-0"
          alt="black-pokemon"
        />
      </div>
    </div>
  );
};

export default Collections;
