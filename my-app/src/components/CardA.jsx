import React from 'react';
import './css/card.css'
const CardA = () => {
    return (
        <>
         
        <div className="card h-100">
            <div className="card">
                <img src="assets/cute-baby-cat-cartoon-hand-drawn-style-vector-illustration.jpg" className="card-img-top" alt="..."/>
                <div className="card-img-overlay">
                    <div className="upper">
                        <p className="rating-star">4.6 <i className="fa-solid fa-star"></i></p>
                        <a href="" className="favorite-list"><i className="far fa-heart"></i></a>
                    </div>
                    <div className="lower">
                        <a href=""><h6 className="card-title">Add to cart</h6></a>
                        <a href=""><h6 className="card-title">Quick view</h6></a>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-category">Jackets & Coats</h5>
                <h5 className="card-name">Open-front coat</h5>
                <h6 className="card-price row">
                    <span className="col-3 card-original-price">250.00$</span>
                    <span className="col-3 card-discount-price">120.00$</span>
                    <span className="col-6 card-off text-end "> <span className="inner-off">SALE -50%</span> </span>
                </h6>
            </div>
        </div>
       
        </>
    );
}

export default CardA;
