import React from "react";
import { Routes ,Route} from "react-router-dom";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

//components
import AList from "../components/accountParts/AList";
import MyAccount from "../components/accountParts/MyAccount";
import AccountOrders from "../components/accountParts/AccountOrders";
import SavedItems from "../components/accountParts/SavedItems";
import RecentlyViewed from "../components/accountParts/RecentlyViewed";
import AccountReviwes from "../components/accountParts/AccountReviwes";
//assets
import './pages.css'
const BuyerAccount = () => {
  return (
    <>
    <div className="account-container">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          
        >
          <Grid item xs={3}>
            <div className="account-list">
              <AList />
            </div>
          </Grid>
          <Grid item xs={9}>
            <div className="accountComponents">
              
              <Routes>
                <Route path="/" index element= {<MyAccount/>}/>
                <Route path="/accountOrder/*"  element= {<AccountOrders/>}/>
                <Route path="/savedItems"  element= {<SavedItems/>}/>
                <Route path="/recentlyViewed"  element= {<RecentlyViewed/>}/>
                <Route path="/accountReviwes/*"  element= {<AccountReviwes/>}/>
              </Routes>
           </div>
          </Grid>
        </Grid>
      </Container>
      </div>
    </>
  );
};

export default BuyerAccount;
