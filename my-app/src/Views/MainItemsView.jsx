import React from "react";
import { Grid } from "@mui/material";

//components
import TypesSortingHolder from "../components/types/TypesSortingHolder";
const MainItemsView = (props) => {
  return (
    <>
      <div className="main-items-view">
        main items view {props.id}
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
                        
            <Grid item xs={3} className="type-filtration">
                <TypesSortingHolder/>
            </Grid>
            <Grid item xs={9}>
                
            </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MainItemsView;
