import React from "react";
import "./css/card.css";
import { Skeleton, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const Card = () => {
  return (
    <>
      <div className="mga-card">
        <div className="mga-card-img">
          <Skeleton variant="rectangular" height={240} />
        </div>
        <div className="mga-card-details">
          <Grid container spacing={2}>
            <Grid item xs={10} md={10}>
              <h5>item name is here</h5>
              <p> $50</p>
            </Grid>
            <Grid item xs={2} md={2}>
                <Stack>
              <Link to="#" id="">
              <ShoppingCartCheckoutIcon className="mga-card-details-cart"/>
              </Link>
              
              <Link to="#" id="">
              <FavoriteBorderIcon className="mga-card-details-love"/>
              </Link>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Card;
