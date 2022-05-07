import React from 'react';
import { NavLink, useParams } from "react-router-dom";

const ProductPage = () => {
    const { id } = useParams();
    return (
        <>
           {id}
        </>
    );
}

export default ProductPage;
