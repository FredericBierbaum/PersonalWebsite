import "./App.scss";
import Navigation from "./components/LandingPage/Navigation/Navigation";
import { BrowserRouter } from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Navigation />
        <MainContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
