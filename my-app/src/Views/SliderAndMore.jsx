//libs
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Stack from "@mui/material/Stack";
//components
import CardA from "../components/CardA";
import CardSkelton from "../components/CardSkelton.tsx";

const SliderAndMore = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const  nextFunctionForS = () =>{
    console.log("sssssss");
    const item = document.getElementById("theViewIWantCarousel")
    console.log(item.getBoundingClientRect());
    console.log(item.scrollLeft);
    item.scrollLeft +=  400

  }
  const perviousFunctionForS = ()=>{
    console.log("perv");
    const item = document.getElementById("theViewIWantCarousel")
    console.log(item.getBoundingClientRect());
    console.log(item.scrollLeft);
    item.scrollLeft -= 400
    }

  useEffect(() => {
    const getItems = () => {
      setLoading(true);
      axios
        .get("http://127.0.0.1:8000/Product_list/")
        .then((res) => {
          const fetchedItems = res.data;
          console.log(res.data);
          setItems(fetchedItems);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getItems();
  }, []);

  return (
    <>
      <Container>
        <div className="sliderAndMore">
          <div className="sliderAndMoreContainer">
            <div className="headerSM">
              <Stack direction="row" spacing={2}>
                <header>
                  <h3>
                    The Header <span>some more info</span>
                  </h3>
                </header>

                <Button variant="text" endIcon={<ChevronRightIcon />}>
                  See All
                </Button>
              </Stack>
            </div>
            <div className="sliderM">
              
            <span id="previous" className="previous"  onClick={perviousFunctionForS}> <KeyboardArrowLeftIcon/> </span>
                   
              <Stack direction="row" spacing={2} id='theViewIWantCarousel'>
                {!loading ? (
                  <CardSkelton />
                ) : (
                  items.map((item) => {
                    return (
                      <>
                        <CardA 
                               key={item.id}  
                               id = {item.id}
                               name = {item.Product_name}
                               brand = {item.Product_brand}
                               discount  = {item.Product_discount}
                               price = {item.Product_sale_price}
                        />

                      </>
                    );
                  })
                )}
              </Stack>
              
              <span id="next" className="next" onClick={nextFunctionForS}> <ChevronRightIcon/> </span>
                    
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SliderAndMore;
