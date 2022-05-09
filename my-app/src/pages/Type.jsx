import React from 'react';
import { NavLink, useParams } from "react-router-dom";


const Type = () => {
    const { id } = useParams();
    return (
        <div>
            {id}
        </div>
    );
}

export default Type;
