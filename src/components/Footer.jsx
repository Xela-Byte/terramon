import "../css/footer.css";
import FooterBG from "../assets/images/footer-patch.png";
import BluePatch from "../assets/images/blue-patch.png";

const Footer = () => {
  return (
    <div className="footerContainer -mt-16">
      <img
        src={FooterBG}
        className="footerBG"
        alt="bg"
      />
      <div className="wrapper flex">
        <div className="w-[50%] flex flex-col">
          <div class="relative inline-block w-[30%] mx-10 mt-20 mb-2">
            <img
              src={BluePatch}
              alt="blue-patch"
              class="h-auto"
            />
            <div class="absolute top-2 inset-0 ">
              <p className="z-20 text-center text-gradient lg:text-4xl font-extrabold">
                Terramon
              </p>
            </div>
          </div>
          <div class="relative inline-block mx-10 mt-10">
            <p>Copyright © 2023. All rights reserved</p>
          </div>
        </div>
        <div className="w-[15%] relative mx-10 mt-24 flex justify-between ml-auto">
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
