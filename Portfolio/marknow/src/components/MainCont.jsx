import IntroSect from "./IntroSect";
import About from "./About";
import Pals from "./Pals";
import Services from "./Services";

const MainCont = () => {
  return (
    <main>
      <div>
        <IntroSect />
        <About />
        <Pals />
        <Services />
      </div>
    </main>
  )
}

export default MainCont;