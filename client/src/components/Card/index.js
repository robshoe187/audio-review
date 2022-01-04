import React from 'react';
import "./style.css";

const Card = () => {

    return (
    <div className="col card card-width mx-4">
    <img src="../images/cambridge-dacmagic.jpg" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Cambridge Audio DacMagic</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href='/' className='card-link'>Read Review</a>
    </div>
  </div>

    );
};

export default Card;