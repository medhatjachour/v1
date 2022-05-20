//libs
import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";

//components
import IntroHome from '../Views/IntroHome';
//import ComponentsView from '../Views/ComponentsView'
import Features from '../Views/Features';
import ViewA1 from '../Views/ViewA1';
import SliderAndMore from '../Views/SliderAndMore';
import SliderSkelton from '../components/skeltons/SliderSkelton';
import CatsView from '../Views/CatsView';

const Home = () => {
    const [loading, setLoading] = useState(true);
    
    const [cats, setCats] = useState([]);
    const [types, setTypes] = useState([]);
   
  useEffect(() => {
    const getCats = () => {
      setLoading(false);
      axios
        .get("http://127.0.0.1:8000/category_list/")
        .then((res) => {
          const fetchedCats = res.data;
          //console.log(res.data);
          setCats(fetchedCats);
        })
        .catch((err) => {
          console.log(err);
        });
        axios
          .get("http://127.0.0.1:8000/product_type_list/")
          .then((res) => {
            const fetchedTypes = res.data;
            console.log(res.data);
            setTypes(fetchedTypes);
          })
          .catch((err) => {
            console.log(err);
          });
      

    };
    getCats();
  }, []);

    return (
        <div>
            <IntroHome/>
            <Features/>
            <ViewA1/>

            {loading ? <SliderSkelton/>: types.map((type)=>{
                return(
                    <>
                    <CatsView 
                        key = {type.id}
                        id = {type.id}
                        name = {type.Product_type_name}
                        desc = {type.Product_type_description}
                    />
                    </>
                )
                
            })}

            {loading ? <SliderSkelton/>: cats.map((cat)=>{
                return(
                    <>
                    <SliderAndMore 
                        key = {cat.id}
                        id = {cat.id}
                        name = {cat.Category_name}
                        meta = {cat.Category_meta_title}
                    />
                    </>
                )
                
            })}
           {/* <SliderAndMore
                name = {"Category_name"}
                meta = {"Category_meta_title"}
            />
            */} 
        </div>
    );
}

export default Home;
