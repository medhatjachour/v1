//libs
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
//components
import CardA from "../components/CardA";
import CardSkelton from "../components/CardSkelton.tsx";

const SliderAndMore = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const  nextFunctionForS = () =>{
    const item = document.getElementById("theViewIWantCarousel" + props.id)
    item.scrollLeft +=  400

  }
  const perviousFunctionForS = ()=>{
    const item = document.getElementById("theViewIWantCarousel" + props.id)
    item.scrollLeft -= 400
    }


  useEffect(() => {
    const getItems = () => {
      setLoading(true);
        //.get(`http://127.0.0.1:8000/product_pk/<int:${props.id}>`)
      
      axios
        .get("http://127.0.0.1:8000/Product_list/")
        .then((res) => {
          const fetchedItems = res.data;
          //console.log(res.data);
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
              <Grid container spacing={2}>
              <Grid  item xs={10} md={10}>
                <header>
                  <h3>
                    {props.name} <span>{props.meta}</span>
                  </h3>
                </header>
                </Grid>
              <Grid  item xs={2} md={2}>
                <Button variant="text" endIcon={<ChevronRightIcon />}>
                  See All
                </Button>
                
                </Grid>
              </Grid>
            </div>
            <div className="sliderM">
              
            <div id={"previous" +props.id} className="previous"  onClick={perviousFunctionForS}> <KeyboardArrowLeftIcon/> </div>
                   
              <Stack direction="row" spacing={2} id={"theViewIWantCarousel" + props.id} className="theViewIWantCarousel">
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
              
                <div id={"next" + props.id} className="next" onClick={nextFunctionForS}> <ChevronRightIcon/> </div>
                    
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SliderAndMore;
