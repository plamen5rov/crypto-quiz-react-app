//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Categories from "./components/pages/Categories/Categories";
import HallOfFame from "./components/pages/HallOfFame/HallOfFame";

import { Route, Link, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/categories" component={Categories} />
        <Route path="/halloffame" component={HallOfFame} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
