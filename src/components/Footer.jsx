import "../css/footer.css";
import FooterBG from "../assets/images/footer-patch.png";
import BluePatch from "../assets/images/blue-patch.png";

const Footer = () => {
  return (
    <div className="w-full sm:h-[30vh] relative overflow-hidden -mt-16">
      <img
        src={FooterBG}
        className="footerBG"
        alt="bg"
      />
      <div className="wrapper flex flex-col sm:flex-row">
        <div className="w-[50%] flex flex-col">
          <div class="relative inline-block w-full sm:w-2/3 lg:w-1/2 xl:w-[30%] lg:mx-10 mt-20 lg:mb-2">
            <img
              src={BluePatch}
              alt="blue-patch"
              class="h-auto"
            />
            <div class="absolute top-2 inset-0">
              <p className="z-20 text-center text-gradient sm:text-2xl md:text-4xl font-extrabold">
                Terramon
              </p>
            </div>
          </div>
          <div class="relative w-full inline-block mx-10 mt-10">
            <p>Copyright © 2023. All rights reserved</p>
          </div>
        </div>
        <div className="w-full p-5 sm:w-[40%] xl:w-[15%] relative sm:mx-10 sm:mt-24 md:mt-10 flex justify-between sm:ml-auto">
          <div className="space-y-3">
            <p>Home</p>
            <p>About </p>
            <p>Features</p>
            <p>Roadmap</p>
          </div>
          <div className="space-y-3">
            <p>NFT Collection</p>
            <p>FAQ</p>
            <p>Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
