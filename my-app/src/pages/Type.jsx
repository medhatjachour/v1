//libs
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

//components
import TypeIntro from '../Views/TypeIntro';
import TypeSubHolder from "../Views/TypeSubHolder";
import MainItemsView from "../Views/MainItemsView";
// assets
import '../components/css/type.css'

const Type = () => {
    const { id } = useParams();
    const [typeCat, setTypeCat] = useState([]);
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    const getTypeCat = () => {
      setLoading(false);
        //.get(`http://127.0.0.1:8000/product_pk/<int:${props.id}>`)
      
      axios
        .get("http://127.0.0.1:8000/product_type_list/")
        .then((res) => {
          const fetchedItems = res.data;
          //console.log(res.data);
          setTypeCat(fetchedItems);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getTypeCat();
  }, []);
    return (
        <div>
          <>
            {id}
            {loading?<div>skelton</div>:
            <>
              <TypeIntro
                  id = {id}
              />
              <TypeSubHolder
                key={Math.random()}
                id={id}
              />
              <MainItemsView
                id={id}
              />
            </>
            }
            </>
        </div>
    );
}

export default Type;
