import React from "react";
import { Grid, Rating, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LinearProgress from "@mui/material/LinearProgress";
//components
import ProductPageReviewItem from "./ProductPageReviewItem";
//assets
import "./css/product.css";
const ProductPageReview = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={4} className="columns-product-rating">
          <h5>VERIFIED RATINGS</h5>
          <br />
          <p>from 55 Verified ratings this prodect gets</p>
          <div className="rating-value-product">
            <p> 4.5 / 5 </p>
            <Rating name="read-only" value={4.52} precision={0.5} readOnly />
          </div>
          <ul>
            <li>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="baseline"
                spacing={1}
              >
                <span>5</span> <StarIcon /> (251)
                <LinearProgress
                  value={(4.5 / 5) * 100}
                  className="rate-product-progressBar"
                />
              </Stack>
            </li>
          </ul>
        </Grid>

        <Grid item xs={8} className="columns-product-rating ProductPageReview">
          <h4>Product Reviews 22</h4>
          <ProductPageReviewItem />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPageReview;
