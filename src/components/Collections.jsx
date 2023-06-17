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
    <div className="roadmapContainer">
      <img
        src={CollectionBG}
        className="roadmapBG"
        alt="bg"
      />
      <div className="relative mt-10 inline-block ml-[25%] text-center w-1/2">
        <p className="text-3xl font-bold text-deepBlue">
          Making deposits and inviting referrals you can collect an entire NFT
          collection
        </p>
      </div>

      <div className="relative mt-10 inline-block text-center h-[90%] w-full">
        <img
          src={BlackPokemon}
          className="absolute scale-50 top-1/4"
          alt="black-pokemon"
        />
        <img
          src={BluePokemon}
          className="absolute scale-50 left-1/4 top-1/4"
          alt="black-pokemon"
        />
        <img
          src={YellowPokemon}
          className="absolute scale-50 left-1/4 bottom-0"
          alt="black-pokemon"
        />
        <img
          src={GreyPokemon}
          className="absolute scale-50 left-1/2 top-1/4"
          alt="black-pokemon"
        />
        <img
          src={RedPokemon}
          className="absolute scale-50 left-3/4 top-1/4"
          alt="black-pokemon"
        />
        <img
          src={WhitePokemon}
          className="absolute scale-50 right-0 bottom-0"
          alt="black-pokemon"
        />
      </div>
    </div>
  );
};

export default Collections;
