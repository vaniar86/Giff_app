import "./App.css";
import { Link, Route } from "wouter";
import { GifContextProvider } from "./Context/GifContext";
import Home from "./pages/Home";
import logo from "./Assets/Images/logoImgCir.png";
import SearchResult from "./pages/SearchResult";
import Details from "./pages/Details";
import './Styles/styles.css'

const App = () => {
  return (
    <div className="App">
      <section className="App-Content">
        <Link to="/">
          <img className="appLogo" alt="giffy logo" src={logo} />
        </Link>
        <GifContextProvider>
          <Route component={Home} path="/" />
          <Route component={SearchResult} path="/search/:keyword" />
          <Route component={Details} path='/gifsDetails/:id'/>
        </GifContextProvider>
      </section>
    </div>
  );
};

export default App;
