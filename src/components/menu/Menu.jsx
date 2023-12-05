import "./menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary menu">
        <NavLink to="/">
          <div className="icon-menu">
            <i className="home icon"></i>
          </div>
        </NavLink>
        <a className="active item">Produits</a>
        <a className="item">Le Concept</a>
        <a className="item">Boutique</a>
        <a className="item">Avis</a>
        <a className="item">Articles</a>
      </div>
    </div>
  );
};

export default Menu;
