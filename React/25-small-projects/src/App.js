import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import Randomcolor from "./components/randomcolor";
import Stars from "./components/stars";
import Image from "./components/image-slider";
import Loadbtn from "./components/load-more-button";
import Qrcode from "./components/qr-code";
import Theme from "./components/light-dark-theme";
import Scroll from "./components/scroll-indicator";
import Tabs from "./components/tabs/tabs";
import Modal from "./components/modal-popup/modal";
import ModalTest from "./components/modal-popup/modal-test";
import Github from "./components/github/github";
import Search from "./components/search-with-api";
import Game from "./components/tic-tac-toe";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlags from "./components/FEATURE-FLAG";
import Mainhook from "./components/usefetch-customhook/main";
import Windowtest from "./components/window-resize-hook/test";
import ScrollToTopAndBottom from "./components/scroll-top-bottom";
import ScrollToSection from "./components/scroll-top-bottom/test";

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <Randomcolor/> */}
      {/* <Stars noofstar={10}/> */}
      {/* <Image url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/>  */}

      {/* <Loadbtn/> */}
      {/* <Qrcode/> */}
      {/* <Theme/> */}
      {/* <Scroll url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* <Tabs/> */}
      {/* <ModalTest /> */}
      {/* <Github/> */}
      {/* <Search/> */}
      <TicTacToe/>
      {/* <FeatureFlags/> */}
      {/* <Mainhook/> */}
      {/* <Windowtest/> */}
      {/* <ScrollToTopAndBottom/> */}
      {/* <ScrollToSection/> */}
    </div>
  );
}

export default App;
