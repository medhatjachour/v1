import React, { useState, useEffect } from "react";
import axios from "axios";
// import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
// import Container from "@mui/material/Container";
import { Rating,IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ShareIcon from "@mui/icons-material/Share";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ProductDetails from "../components/ProductDetails";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
// import MyPLY from "../components/Ai/MyPLY";
//assetsimport 
import "../components/css/product.css";


const ProductPage = () => {
  const [Strokecolor, setStrokecolor] = useState("#07b0b03d");
  const [themeltcolor, setThemeltcolor] = useState("#07b0b03d");
  const [TheProduct, setTheProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // const [url, setUrl] = useState(`http://localhost:3000/product/${id}`);
  const [url, setUrl] = useState(`http://muzzboot.medhatjachour.com/`);

  const handleMainImgCarouselLeft =() =>{
    console.log("handleMainImgCarouselLeft");
  }
  const handleMainImgCarouselRight =() =>{
    console.log("handleMainImgCarouselRight");
  }
  const handleMainProductAddCart = () => {
    console.log("handleMainProductAddCart");
  }
  const handleMainProductFav = () => {
    console.log("handleMainProductFav");
  }

  useEffect(()=>{

    const imgsCarousel = () =>{
      var images = 5;
      
      var radius = 308;
      var main = document.getElementById('inner-mnp');

      var mainHeight = parseInt(window.getComputedStyle(main).height.slice(0, -2));
      // don't forget to check if the images is od or even of pd start from 270 of even start form two sides
      var theta = [7 * ( Math.PI/6 ), 4 * (Math.PI / 3), 3 * (Math.PI / 2), 5 * (Math.PI / 3), 11 * (Math.PI / 6)];
      // var theta = [0, Math.PI / 6, Math.PI / 4, Math.PI / 3, Math.PI / 2, 2 * (Math.PI / 3), 3 * (Math.PI / 4), 5 * (Math.PI / 6), Math.PI, 7 * (Math.PI / 6), 5 * (Math.PI / 4), 4 * (Math.PI / 3), 3 * (Math.PI / 2), 5 * (Math.PI / 3), 7 * (Math.PI / 4), 11 * (Math.PI / 6)];
      var circleArray = [];
      var imgsArray = [];
      for (var i = 0; i <5; i++) {
        var circle = document.createElement('div');
        var imagesIn = document.createElement("img")
        circle.className = 'circle number' + i;
        circleArray.push(circle);
        imgsArray.push(imagesIn);
        circleArray[i].posx = Math.round(radius * (Math.cos(theta[i]))) + 'px';
        circleArray[i].posy = Math.round(radius * (Math.sin(theta[i]))) + 'px';
        circleArray[i].style.position = "absolute";
        circleArray[i].style.border = "0px";
        imgsArray[i].style.width = "100%";
        imgsArray[i].style.height = "100%";
        imgsArray[i].style.borderRadius = "50%";
        imgsArray[i].setAttribute("src","https://picsum.photos/200");
        imgsArray[i].setAttribute("alt","idk");
        circleArray[i].style.top = ((mainHeight/2.46) - parseInt(circleArray[i].posy.slice(0, -2))) + 'px';
        circleArray[i].style.left = ((mainHeight / 2.40) + parseInt(circleArray[i].posx.slice(0, -2))) + 'px';
        main.appendChild(circleArray[i]);
        circleArray[i].appendChild(imgsArray[i])
      }
      }
      imgsCarousel()
  },[])


  useEffect(() => {
    const getTheProduct = () => {
      setLoading(false);
      //.get(`http://127.0.0.1:8000/product_pk/<int:${props.id}>`)

      axios
        .get(`http://127.0.0.1:8000/product_pk/${id}`)
        .then((res) => {
          const fetchedItems = res.data;
          //console.log(res.data);
          setTheProduct(fetchedItems);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getTheProduct();
  }, []);

  
  return (
    <>
      <div className="cnt" >
      <div className="productViewSection">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            item
            lg={2}
            md={5}
            sm={5}
            xs={12}
            order={{ md: 2, xs: 2, sm: 2, lg: 1 }}
          >
            <Stack direction="row" spacing={2}>
            <FacebookShareButton url={url}  className="pb-face-item">
              {/* <Button
                variant="outlined"
                startIcon={<FacebookOutlinedIcon className="pi-face-item" />}
                className="pb-face-item"
              ></Button> */}
              <FacebookOutlinedIcon className="pi-face-item" />
            </FacebookShareButton>
              <Button
                variant="outlined"
                startIcon={<InstagramIcon className="pi-insta-item" />}
                className="pb-insta-item"
              ></Button>
              <TwitterShareButton url={url} className="pb-twtr-item">
              {/* <Button
                variant="outlined"
                startIcon={<TwitterIcon className="pi-twtr-item" />}
                className="pb-twtr-item"
              ></Button> */}
              <TwitterIcon className="pi-twtr-item" />
              </TwitterShareButton>
              <WhatsappShareButton url={url} className="pb-whats-item">
              {/* <Button
                variant="outlined"
                startIcon={<WhatsAppIcon className="pi-whats-item" />}
                className="pb-whats-item"
              ></Button> */}
              <WhatsAppIcon className="pi-whats-item" />
              </WhatsappShareButton>
            </Stack>
            <Button className="btnlnk-product view-similar" href="#">
              View similar items
            </Button>
            <h2>4.5</h2>
            <div>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </div>
            <Button className="btnlnk-product reviews-lmk" href="#">
              50 Reviews
            </Button>
          </Grid>
          <Grid
            item
            lg={7}
            md={12}
            sm={12}
            xs={12}
            order={{ md: 1, xs: 1, sm: 1, lg: 2 }}
          >
            <>
              <div className="main-product-view">
                <div className="outer-mnp" id="outer-mnp">
                  {/*
                  <div className="product-img-carousel" id="product-img-carousel"></div>
                   */}
                  <div className="inner-mnp" id="inner-mnp">
                  <IconButton aria-label="left" className="image-carousel-left" id="image-carousel-left" onClick={handleMainImgCarouselLeft}>
                    <KeyboardDoubleArrowLeftIcon />
                    </IconButton>
                    <img src="https://picsum.photos/480" alt="ikd" id="product-mn-img" className="product-mn-img">
                      
                    </img>
                    <div  id="main-product-view-fav" className="main-product-view-cont main-product-view-fav">
                   <FavoriteBorderIcon onClick={handleMainProductFav}/>
                    </div>
                    
                    <div id="main-product-view-cart" className="main-product-view-cont main-product-view-cat">
                   <ShoppingCartCheckoutIcon onClick={handleMainProductAddCart} />
                    </div> 
                     <IconButton aria-label="right" className="image-carousel-right" id="image-carousel-right" onClick={handleMainImgCarouselRight}>
                  
                    <KeyboardDoubleArrowRightIcon />
                 </IconButton>
                  </div>
                
                  </div>
              </div>
            </>
          </Grid>
          <Grid
            item
            lg={3}
            md={7}
            sm={7}
            xs={12}
            order={{ md: 3, xs: 3, sm: 3, lg: 3 }}
          >
            <div className="product-dsh">
              <Grid container direction="column" justifyContent="flex-start">
                <Grid className="header-products">
                  <h3>{TheProduct.Product_name}</h3>
                  <h4>{TheProduct.Product_shop}</h4>
                </Grid>
                <Grid className="prices-holder">
                  <span className="sale-price">
                    EGP{" "}
                    {TheProduct.Product_purchase_price -
                      (TheProduct.Product_purchase_price *
                        TheProduct.Product_discount) /
                        100}
                  </span>
                  <span className="real-price">
                    EGP {TheProduct.Product_purchase_price}
                  </span>
                  <span className="discount">
                    {TheProduct.Product_discount} % off
                  </span>
                </Grid>
                <p>colors</p>
                <span className="left-scroll-color color-controls"></span>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  className="colors-product"
                >
                  <div className="color-bg-holder" id="">
                    <div id="" className="color-sm"></div>
                  </div>
                </Grid>

                <span className="left-scroll-color color-controls"></span>
              </Grid>
              <Grid>
                <p className="p-sizes">sizes</p>
                <span className="left-scroll-size size-controls"></span>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  className="sizes-product"
                >
                  <div className="size-bg-holder" id="">
                    <div id="" className="size-sm">
                        <AccountCircleOutlinedIcon className="size-user-icn"/>
                    </div>
                    
                  </div>
                  
                  <div className="size-bg-holder" id="">
                    <div id="" className="size-sm">
                        <p className="size-user-text">sm</p>
                    </div>
                    
                  </div>
                </Grid>

                <span className="left-scroll-size size-controls"></span>
              </Grid>
              <Grid
                className="product-btns"
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <button className="product-dsh-ptn fitIt">Fit it</button>
                <button className="product-dsh-ptn addToCart">
                  Add to cart
                </button>
              </Grid>
            </div>
          </Grid>
        </Grid>

      </div>
      {/* <MyPLY/> */}
      <div className="product-details-section">
        <ProductDetails/>
      </div>
      </div>
    </>
  );
};

export default ProductPage;
