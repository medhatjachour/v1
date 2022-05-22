import React ,{useState, useEffect}from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Rating } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';


//assets
import '../components/css/product.css'
const ProductPage = () => {
  const [Strokecolor, setStrokecolor] = useState("#07b0b03d");
  const [themeltcolor, setThemeltcolor] = useState("#07b0b03d");
  const [TheProduct, setTheProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  
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
      {id}
      <div className="productViewSection">   
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        
        >
            <Grid item lg={3} md={6} sm={6} xs={12} order={{ md: 2, xs: 2, sm: 2, lg: 1 }}>
                
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" startIcon={<FacebookIcon className="pi-face-item" />} className="pb-face-item"></Button>
                    <Button variant="outlined" startIcon={<InstagramIcon className="pi-insta-item" />} className="pb-insta-item"></Button>
                    <Button variant="outlined" startIcon={<TwitterIcon className="pi-twtr-item" />} className="pb-twtr-item"></Button>
                    <Button variant="outlined" startIcon={<WhatsAppIcon className="pi-whats-item" />} className="pb-whats-item"></Button>
                </Stack>
                <Button className="btnlnk-product view-similar" href="#">View similar items</Button>
                <h2>
                    4.5
                </h2>
                <div> 
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </div>
                <Button className="btnlnk-product reviews-lmk" href="#">50 Reviews</Button>

            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12} order={{ md: 1, xs: 1, sm: 1, lg: 2 }}>
            <>
                <div className="main-product-view">
                  <div className="outer-mnp">
                    <div className="inner-mnp">
                    <div class="product-container col-12 col-md-5 col-lg-6 p-md-0">
                <svg class="circle-container" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 70 1000 810">
                    <defs>
                        <pattern id="image1" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 300 300">
                        <image x="0%" y="0%" width="300" height="300" href="assets/2.jpg"></image>
                        </pattern>
                        <pattern id="image2" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 300 300">
                        <image x="0%" y="0%" width="300" height="300" href="assets/3.jpg"></image>
                        </pattern>
                        <pattern id="image3" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 300 300">
                        <image x="0%" y="0%" width="300" height="300" href="assets/4.png"></image>
                        </pattern>
                        <pattern id="image4" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 300 300">
                        <image x="0%" y="0%" width="300" height="300" href="assets/1.png"></image>
                        </pattern>
                        <pattern id="image5" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 300 300">
                        <image x="0%" y="0%" width="300" height="300" href="assets/5.jpg"></image>
                        </pattern>
                        <pattern id="image6" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 300 300">
                        <image x="0%" y="0%" width="300" height="300" href="assets/cute-baby-cat-cartoon-hand-drawn-style-vector-illustration.jpg"></image>
                        </pattern>
                        <pattern id="image0" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 300 300">
                        <image x="0%" y="0%" width="300" height="300" href="assets/cute-baby-cat-cartoon-hand-drawn-style-vector-illustration.jpg"></image>
                        </pattern>
                    </defs>
                    <circle class="circle circle--main" cx="50%" cy="50%" r="300"/>
                    <circle class="circle circle--main-2" cx="50%" cy="50%" r="325" fill="none" stroke-width="5" stroke={themeltcolor} />
                    <circle class="circle circle--sec-1" cx="50%" cy="50%" r="325" fill="none" stroke-width="3" stroke={Strokecolor} stroke-dasharray="240 1300"/>
                    <circle class="circle circle--main-3" cx="50%" cy="50%" r="470" fill="none" stroke-width="5" stroke-dasharray="1450 2000" stroke={themeltcolor} />
                    <a href="" data-pic="url(#image1)"><circle class="circle s circle--one" cx="85%" cy="73%" r="62"/></a>
                    <a href="" data-pic="url(#image2)"><circle class="circle s circle--two" cx="70%" cy="93%" r="62"/></a>  
                    <a href="" data-pic="url(#image3)"><circle class="circle s circle--three" cx="50%" cy="99%" r="62"/></a>
                    <a href="" data-pic="url(#image4)"><circle class="circle s circle--four" cx="30%" cy="93%" r="62"/></a>
                    <a href="" data-pic="url(#image5)"><circle class="circle s circle--five" cx="15%" cy="73%" r="62"/></a>
                    <g>
                        <circle cx="30%" cy="19%" r="25" fill={Strokecolor}></circle>    
                       {/*  <FavoriteBorderIcon/>
                    */}
                    </g>
                    <g>
                        <circle cx="70%" cy="19%" r="25" fill={Strokecolor}></circle>    
                        <text id="chk1" x="68.4%" y="20.5%"><ShareIcon/> </text>
                    </g>
                </svg>
            </div>
                    </div>
                  </div>
                </div>
            </>
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12} order={{ md: 3, xs: 3, sm: 3, lg: 3 }}>
            <div className="product-dsh">

              <Grid
                container
                direction="column"
                justifyContent="flex-start"
              >
                <Grid className="header-products">
                  
                  <h3>{TheProduct.Product_name}</h3>
                  <h4>{TheProduct.Product_shop}</h4>
                  
                </Grid>
                <Grid className="prices-holder">
                  <span className="sale-price">EGP {TheProduct.Product_purchase_price - (TheProduct.Product_purchase_price * TheProduct.Product_discount)/100 }</span>
                  <span className="real-price">EGP {TheProduct.Product_purchase_price}</span>
                  <span className="discount">{TheProduct.Product_discount} % off</span>
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
                  <p>sizes</p>
                      <span className="left-scroll-size size-controls"></span>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      className="sizes-product"
                    >
                        <div className="size-bg-holder" id="">
                          <div id="" className="size-sm"></div>
                        </div>
                    </Grid>
            
                      <span className="left-scroll-size size-controls"></span>
                
                </Grid>
                <Grid className="product-btns"
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center">
                  <button className="product-dsh-ptn fitIt">Fit it</button>
                  <button className="product-dsh-ptn addToCart">Add to cart</button>
                </Grid>
            </div>
            </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ProductPage;
