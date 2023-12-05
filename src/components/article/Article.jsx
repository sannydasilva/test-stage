import Menu from "../menu/Menu";
import Title from "../title/Title";
import "./article.css";
import { useState } from "react";

const Article = () => {
  const [length, setLength] = useState(30);

  const handleIncrement = () => {
    if (length < 245) {
      setLength(length + 10);
    }
  };

  const handleDecrement = () => {
    if (length > 30) {
      setLength(length - 10);
    }
  };

  const progressWidth = ((length - 30) / (245 - 30)) * 100 + "%";

  return (
    <>
      <Title />
      <Menu />
      <img className="img-etageres3" src="./etageres3.jpg" alt="" />
      <div className="modif-etagere">
        <h2>Etagères sur mesure</h2>
        250.00 €<h3>Essence de Bois</h3>
        <div className="ui form">
          <div className="inline fields">
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>Frêne</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>Chêne</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>Noyer</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name="frequency" />
                <label>Chêne</label>
              </div>
            </div>
          </div>
        </div>
        <h3>Dimensions</h3>
        <div className="ui progress">
          <div className="bar">
            <div
              className="progress"
              style={{
                width: progressWidth,
              }}
            ></div>
          </div>
          <div className="label">Longueur: {length} cm</div>
        </div>
        <div className="ignored">
          <div className="ui icon buttons">
            <div
              className="decrement ui basic inverted red button icon"
              onClick={handleDecrement}
            >
              <i className="minus icon"></i>
            </div>
            <div
              className="increment ui basic inverted green button icon"
              onClick={handleIncrement}
            >
              <i className="plus icon"></i>
            </div>
          </div>
        </div>
        <div className="ui progress">
          <div className="bar">
            <div
              className="progress"
              style={{
                width: progressWidth,
              }}
            ></div>
          </div>
          <div className="label">Largeur: {length} cm</div>
        </div>
        <div className="ignored">
          <div className="ui icon buttons">
            <div
              className="decrement ui basic inverted red button icon"
              onClick={handleDecrement}
            >
              <i className="minus icon"></i>
            </div>
            <div
              className="increment ui basic inverted green button icon"
              onClick={handleIncrement}
            >
              <i className="plus icon"></i>
            </div>
          </div>
        </div>
        <div className="epaisseur">
          <div className="label">Epaisseur</div>

          <div className="field">
            <div className="ui radio checkbox">
              <input type="checkbox" name="frequency" />
              <label>3</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="checkbox" name="frequency" />
              <label>4</label>
            </div>
          </div>
        </div>
        <button className="button-panier">Ajouter au panier</button>
        <br />
        <button className="button-commande">Commander et payer</button>
      </div>
    </>
  );
};

export default Article;
