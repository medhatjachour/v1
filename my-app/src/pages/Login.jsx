import React ,{useState}from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Textfield from '../components/FormsUI/Textfield';

import Button from '../components/FormsUI/Button';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { Skeleton, Typography } from "@mui/material";
const INITIAL_FORM_STATE_REVIEW = {
    KeepLoged: 0,
    email: '',
    password: '',
  };
  
  
  const FORM_VALIDATION_REVIEW = Yup.object().shape({
    KeepLoged: Yup.string()
      .required('Required'),
      email: Yup.string()
      .required('Required'),
      password: Yup.string()
      .required('Required'),
    
  });
  
  
 

const Login = () => {
    
  
    const [value, setValue] = useState(parseInt(0));
    const [hover, setHover] = useState(-1);
    return (
        <div>
        <Grid item sm={12} md={6}>
          <div className="account-overview-card">
          <h5 className="account-overview inside-account-grid-header ">
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
              >
              <IconButton
                aria-label="delete"
                id="edit-account-payment"
                className="edit-account-details"
              >
                <ArrowLeftIcon />
              </IconButton>
              </Stack>
            </h5>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE_REVIEW
              }}
              validationSchema={FORM_VALIDATION_REVIEW}
              onSubmit={values => {
                console.log(values);
              }}
            >
              <Form key={1}>
            <Box 
            //component="form" 
            //onSubmit={handleSaveUserAccount} 
            sx={{ mt: 3 }}>
              <Grid container spacing={2} columns={12} justifyContent="center">
                <Grid item xs={12} sm={12}>
                  
                  <Typography>
                    LogIn 
                  </Typography>
                  <Stack direction="row" spacing={2}>
                  
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} 
                     >
                    <Textfield
                      name="email"
                      label="email"
                    />
                </Grid>
             
                <Grid item xs={12} sm={12} 
                     >
                     <Textfield
                       name="password"
                       label="password"
                     />
                </Grid>
              
              <Grid item sm={12} md={5}>
                <div>
                  <Button
                      id="save-account-review" 
                      className="save-account-detail"
                  >
                    Save
                  </Button>
              </div>
              </Grid>
              
              </Grid> 
            </Box>
            
            </Form>
            </Formik>
          </div>
        </Grid>
        </div>
    );
}

export default Login;
