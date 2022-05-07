//libs
import React from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';

//components
import CardA from '../components/CardA';

const ComponentsView = () => {
    const [items, setItems] = useState([])
    const [loading,setLoading] = useState(false)

/*
    useEffect(() => {
        const url = "https://fakerapi.it/api/v1/products?_quantity=5";
        //const url = "http://127.0.0.1:8000/Product_list";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
    */
    useEffect(() => {
        const getItems = () =>{
            setLoading(true)
              
  
        axios.get('http://127.0.0.1:8000/Product_list/')
        .then(res => {
            const fetchedItems = res.data
            console.log(res.data);
            setItems(fetchedItems)
        })
        .catch(err => {})
   

        }
        getItems();
    }, []);
    
    return (
        <div>
            {items.map((item)=>{
                return(
                    <CardA
                        key={item.id}
                    />
                )
            })

            }
        </div>
    );
}

export default ComponentsView;
