import React from "react";
import { Grid } from "@mui/material";

//components
import SimpleCard from "../components/SimpleCard";
const TypeSubHolder = (props) => {
  return (
    <>
      <div>
        <h4>Chose A Category</h4>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          {/* here  we gonna iterate */}

          <Grid item md={1} xs={3} >
            <SimpleCard
                key={props.id}
                id={props.id}
            />
            
          </Grid>


          <Grid item md={1} xs={3} >
            <SimpleCard
                key={props.id}
                id={props.id + 1}
            />
            
          </Grid>

        </Grid>
      </div>
    </>
  );
};

export default TypeSubHolder;
