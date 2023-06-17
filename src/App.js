import Collections from "./components/Collections";
import Community from "./components/Community";
import EarnPlatform from "./components/EarnPlatform";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Reason from "./components/Reason";
import Roadmap from "./components/Roadmap";

const App = () => {
  return (
    <>
      <Home />
      <EarnPlatform />
      <Reason />
      <Roadmap />
      <Projects />
      <Collections />
      <FAQ />
      <Community />
      <Footer />
    </>
  );
};

export default App;
