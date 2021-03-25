//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/navigation/Header/Header";
import Footer from "./components/navigation/Footer/Footer";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Categories from "./components/pages/Categories/Categories";
import HallOfFame from "./components/pages/HallOfFame/HallOfFame";


function App() {
  return (
    <div className="App">
      <Header />
      
      <Home />
      <About />
      <Categories />
      <HallOfFame />

      <Footer />
    </div>
  );
}

export default App;
