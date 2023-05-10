import "./App.css";
// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// FontAwasome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faListAlt,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope, faKey, faListAlt, faThumbsUp);

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
