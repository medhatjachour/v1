import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';



const Home2rows = () => {

    
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBrands = () => {
          setLoading(true);
          axios
            .get("http://127.0.0.1:8000/brand_list/")
            .then((res) => {
              const fetchedItems = res.data;
              console.log(res.data);
              setBrands(fetchedItems);
            })
            .catch((err) => {
              console.log(err);
            });
        };
        getBrands();
      }, []);
      const BrandSkelton = () => {
          return(
              <>
                <Skeleton key={1} variant="circular" width={100} height={100} />
                <Skeleton key={2} variant="circular" width={100} height={100} />
                <Skeleton key={3} variant="circular" width={100} height={100} />
                <Skeleton key={4} variant="circular" width={100} height={100} />
                <Skeleton key={5} variant="circular" width={100} height={100} />
                <Skeleton key={6} variant="circular" width={100} height={100} />
                <Skeleton key={7} variant="circular" width={100} height={100} />
                <Skeleton key={8} variant="circular" width={100} height={100} />
              </>
          )
      }

    return (
        <>
            <div className='brands-trusted-holder-'>
                <Stack direction="row" spacing={5}> 
                    {loading? <BrandSkelton/>: brands.map((brand)=>{return(
                        <>
                        {/* it's supposed to be an image*/ }
                            <span>{brand.Brand_name}</span>
                        </>
                    )})}
                </Stack>
            </div>
        </>
    );
}

export default Home2rows;
