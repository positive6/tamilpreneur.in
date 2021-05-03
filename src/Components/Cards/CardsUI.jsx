import React from 'react';
import './style.css';

const Card = props => {
    return (
        <a href={props.link} className="card-body-link">
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={props.imgsrc} alt="logo_card" className="card-img-top" />
                </div>
                <div className="card-body-text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">
                        {props.text}
                    </p>
                    <a href={props.link} className="card-link" >Read More...</a>
                </div>
            </div>
        </a>
    )
}
export default Card;
