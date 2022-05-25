import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Stack,Button } from "@mui/material";
import ProductPageReview from "./ProductPageReview";
//assets
import './css/product.css';

const ProductDetails = () => {
  const [expanded, setExpanded] = useState(false);
  var handleChange = function (panel) {
    return function (event, isExpanded) {
      setExpanded(isExpanded ? panel : false);
    };
  };
  return (
    <>
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Product details
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              the most important information about this lalalal
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <>u can say anything u want</>
            </Typography>
            <Typography>
              <>u can say anything u want</>
            </Typography>
            <Typography>
              <>u can say anything u want</>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Specifications
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Specifications
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            s
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={6} md={6}>
                <div className="specific-product">
                  <h4>KEY FEATURES</h4>

                  <ul>
                    <li>Material: 97% Cotton 3% Elastane</li>
                    <li>ss</li>
                  </ul>
                </div>
              </Grid>

              <Grid item xs={6} md={6}>
                <div className="specific-product">
                  <h4>KEY FEATURES</h4>

                  <ul>
                    <li>Material: 97% Cotton 3% Elastane</li>
                    <li>ss</li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Stack
            className="product-rating-summery-header"
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              spacing={0}
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Verified Customer Feedback
              </Typography>
              <Button href="#text-buttons">SEE ALL</Button>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
           <ProductPageReview/>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default ProductDetails;
