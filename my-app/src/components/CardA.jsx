import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./css/card.css";
import Skeleton from "@mui/material/Skeleton";

const CardA = (props) => {
  const [brands, setBrand] = useState("ss");

  useEffect(() => {
    const getBrand = () => {
      axios
        .get("http://127.0.0.1:8000/brand_list/")
        .then((res) => {
          const fetchedItems = res.data;
          setBrand(fetchedItems);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getBrand();
  }, []);
  return (
    <>
      <p></p>
      <div className="card h-100">
        <div className="card">
          {/* <img src="/" className="card-img-top" alt="..."/>*/}

          <Link to={`/product/${props.id}`}>
            <Skeleton variant="rectangular" width={220} height={120} />
          </Link>
          <div className="card-img-overlay">
            <div className="upper">
              <p className="rating-star">
                4.6 <i className="fa-solid fa-star"></i>
              </p>
              <a href="" className="favorite-list">
                <i className="far fa-heart"></i>
              </a>
            </div>
            <div className="lower">
              <a href="">
                <h6 className="card-title">Add to cart</h6>
              </a>
              <a href="">
                <h6 className="card-title">Quick view</h6>
              </a>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-category">{props.name}</h5>
          <h5 className="card-name"> {brands[props.brand - 1].Brand_name}</h5>
          <h6 className="card-price row">
            <span className="col-3 card-original-price">{props.price}</span>
            <span className="col-3 card-discount-price">
              {props.price - props.price * (props.discount / 100)}{" "}
            </span>
            <span className="col-6 card-off text-end ">
              {" "}
              <span className="inner-off">SALE -{props.discount}%</span>{" "}
            </span>
          </h6>
        </div>
      </div>
    </>
  );
};

export default CardA;
