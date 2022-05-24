import React from "react";
import Grid from "@mui/material/Grid";
import { Stack, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const OrderItem = () => {
  return (
    <>
      <div className="item-order-account">
        <Grid container spacing={2} columns={12}>
          <Grid item sm={4} md={2}>
            <Skeleton variant="rectangular" width={120} height={110} />
          </Grid>
          <Grid item sm={4} md={5}>
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={1.2}
            >
              <h5 className="order-item-name">name</h5>
              <h5 className="order-item-size">size :</h5>
              <h5 className="order-item-date">date :</h5>
              <span className="order-item-status green">States</span>
            </Stack>
          </Grid>
          <Grid item sm={4} md={5} justifyContent="flex-end">
            
          <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="flex-end"
              spacing={3}
            >
            <p className="order-item-number-order">order num</p>
            <Link to="orderFullDetails" className="order-item-fulldet">
              SEE DETAILS
            </Link>
          </Stack>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default OrderItem;
