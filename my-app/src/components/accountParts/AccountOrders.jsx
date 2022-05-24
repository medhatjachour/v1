import React from 'react';
import OrderItem from './orderItem';
import OrderFullDetails from './OrderFullDetails';
import { Routes ,Route} from "react-router-dom";

const AccountOrders = () => {
    return (
        <div>
           <div className='order-account-header'><h3>AccountOrders</h3></div> 
              <Routes>
                <Route path="/" index element= {<OrderItem/>}/>
                <Route path="/orderFullDetails"  element= {<OrderFullDetails/>}/>
              </Routes>
        </div>
    );
}

export default AccountOrders;
