import React from "react";
import { Grid, Stack, Rating } from "@mui/material";
import './css/product.css';
const ProductPageReviewItem = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        className="ProductPageReviewItem"
      >
        <Grid item xs={9} md={9}>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <h2>State</h2>

            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
            <p>the comment left</p>
            <p>on ../../.... by medhatjachour</p>
          </Stack>
        </Grid>

        <Grid item xs={3} md={3}>
          ss
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPageReviewItem;
