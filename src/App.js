//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Categories from "./components/pages/Categories/Categories";
import HallOfFame from "./components/pages/HallOfFame/HallOfFame";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import UserProfile from "./components/user/UserProfile/UserProfile";


function App() {
  return (
    <div className="App">
      <Header />
      
      <Home />
      <About />
      <Categories />
      <HallOfFame />
      <Register />
      <Login />
      <UserProfile />

      <Footer />
    </div>
  );
}

export default App;
