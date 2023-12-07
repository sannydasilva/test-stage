import Menu from "../menu/Menu";
import Title from "../title/Title";
import "./article.css";
import { useState } from "react";

const Article = () => {
  const [length, setLength] = useState(30);
  const [rangeValue, setRangeValue] = useState(36);

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
      <div className="article-container">
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
          <div className="bar-progress">
            <h4 className="label">Longueur</h4>
            30
            <input
              type="range"
              min="30"
              max="245"
              step="1"
              defaultValue={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
            />{" "}
            245
          </div>
          <div className="bar-progress">
            <h4 className="label2">Largeur</h4>
            14
            <input
              type="range"
              min="14"
              max="120"
              step="1"
              defaultValue={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
            />{" "}
            120
          </div>
          <div className="epaisseur">
            <h4 className="label">Epaisseur</h4>

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
      </div>
    </>
  );
};

export default Article;
