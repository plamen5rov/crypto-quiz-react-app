//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Home from "./components/pages/Home"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
