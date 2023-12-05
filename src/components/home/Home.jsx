import Etagere from "../etagere/Etagere";
import Menu from "../menu/Menu";
import Title from "../title/Title";
import "./home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavLink to="/article">
        <button className="home-button">CONFIGURER</button>
      </NavLink>
      <Title />
      <Menu />
      <Etagere />
    </div>
  );
};

export default Home;
