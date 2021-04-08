import "./App.css";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Categories from "./components/pages/Categories/Categories";
import HallOfFame from "./components/pages/HallOfFame/HallOfFame";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Profile from "./components/user/Profile/Profile";
import { Route, Switch } from "react-router-dom";
import { AuthProvider } from "components/utils/AuthContext";
import PrivateRoute from "./components/utils/PrivateRoute";
import Dashboard from "components/pages/Dashboard/Dashboard";

function App() {
  return (
    
<AuthProvider>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/categories" component={Categories} />
          <Route path="/hall-of-fame" component={HallOfFame} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route
            render={() => <h1 style={{ padding: 50 }}>Page not found!</h1>}
          />
          <Route path="/admin" component={Dashboard} />
        </Switch>

        <Footer />
      </div>
    </AuthProvider>
    
    
  );
}

export default App;
