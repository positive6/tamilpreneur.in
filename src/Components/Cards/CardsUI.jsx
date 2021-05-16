import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Card = (props) => {
  return (
    <Link to={props.link} className="card-body-link">
      <div className="card text-center shadow">
        <div className="overflow">
          <img src={props.imgsrc} alt="logo_card" className="card-img-top" />
        </div>
        <div className="card-body-text-dark">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">{props.text}</p>
          <h3 className="card-footnote">
            {props.footnoteleft} &nbsp;&nbsp;&nbsp;&nbsp;
            {props.footnoteright}
          </h3>
        </div>
      </div>
    </Link>
  );
};
export default Card;
