import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";

const CatsView = (props) => {
  return (
    <>
    <Container>      
        <div className="cats-view-home">
        <Grid container spacing={2}>
            <Grid container>
                <Grid  item xs={10} md={10}>
                    <div>
                        <h3>{props.name} <span>{props.desc}</span></h3>
                    </div>
                </Grid>
                <Grid  item xs={2} md={2}>
                 <NavLink 
                    to={`/Type/${props.id}`}>
                    <Button variant="text" endIcon={<ChevronRightIcon />} >
                    See All
                    </Button>
                </NavLink>
                </Grid>
            </Grid>
            <Grid item xs={4} md={4}>
                <div>xs=6 md=4</div>
            </Grid>
            <Grid item xs={4} md={4}>
                 <div>xs=4 md=4</div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div>xs=6 md=8</div>
            </Grid>
        </Grid>
         </div>
      </Container>
    </>
  );
};

export default CatsView;
