//libs
import React from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';

//components
import CardA from '../components/CardA';

const ComponentsView = () => {
    const [items, setItems] = useState([])
    const [loading,setLoading] = useState(false)
    let data ;
    useEffect(() => {
        const getItems = async() =>{
            setLoading(true)
            const response = await fetch ('http://127.0.0.1:8000/Product_list/')
            const fetchedItems = await response.json()
            setItems(fetchedItems)
            //console.log(response);

              
  
        axios.get('http://127.0.0.1:8000/Product_list/')
        .then(res => {
            data = res.data;
            console.log(data);
            //this.setState({
             //   details : data    
            //});
        })
        .catch(err => {})

        }
        console.log(data);
        
        getItems();
    }, []);
    return (
        <div>
            <CardA/>
        </div>
    );
}

export default ComponentsView;
