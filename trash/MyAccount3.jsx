
import React, {useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SettingsIcon from "@mui/icons-material/Settings";
import Alert from '@mui/material/Alert';

// for cool date view
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

//assets
import "./accountParts.css";
const MyAccount = () => {
    const [state, setState] = useState(true);//write or read only
    const [open, setOpen] = useState(false); //for the alert or feedback
    const [Fedbackmessage, setFedbackmessage] = useState("The data has updated successfully"); //also what message
    const [phone, setphone] = useState() // phone number value
    // form value and also iuse to validate
    
    const [firstNM, setFirstNM] = useState("medhat");
    const [lastNM, setLastNM] = useState("medhat");
    const [email, setEmail] = useState("medhat");
    const [phoneV, setphoneV] = useState("medhat");
    
    const handleSnackClose = () => {
        setOpen(false);
    };
    const handleChangeState = () =>{
        setState(false)
        const editBtn = document.getElementById("edit-account-details")
        const saveBtn = document.getElementById("save-account-detail")
        const phoneWrite_1 = document.getElementById("phoneWrite")
        const phoneRead_1 = document.getElementById("phoneRead")
        editBtn.classList.add("none")
        phoneRead_1.classList.add("none")
        saveBtn.classList.remove("none")
        phoneWrite_1.classList.remove("none")
    }
    const handleSaveUserAccount = () =>{
        const editBtn = document.getElementById("edit-account-details")
        const saveBtn = document.getElementById("save-account-detail")
        setState(true)
        editBtn.classList.remove("none")
        saveBtn.classList.add("none")
        setOpen(true);
        

    }

  return (
    <>
      <p className="account-overview"> ACCOUNT OVERVIEW</p>
      <Grid container spacing={2} columns={12}>
        <Grid item sm={12} md={6}>
          <div className="account-overview-card">
          <h5 className="account-overview inside-account-grid-header ">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <span> ACCOUNT DETAILS</span>
                <IconButton
                  aria-label="delete"
                  id="edit-account-details"
                  className="edit-account-details"
                  onClick={handleChangeState}
                >
                  <SettingsIcon />
                </IconButton>
              </Stack>
            </h5>
            <Box 
            //component="form" 
            onSubmit={handleSaveUserAccount} 
            sx={{ mt: 3 }}>
              <Grid container spacing={2} columns={12} justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    disabled={state}
                    onChange={(event) => setFirstNM(event.target.value)}
                    defaultValue={firstNM}
                    error={firstNM === "" || firstNM === null}
                    helperText={firstNM === "" ? "Empty!" : " "}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    disabled={state}
                    
                    onChange={(event) => setLastNM(event.target.value)}
                    defaultValue={lastNM}
                    error={lastNM === "" || lastNM === null}
                    helperText={lastNM === "" ? "Empty!" : " "}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    disabled={state}
                    onChange={(event) => setEmail(event.target.value)}
                    defaultValue={email}
                    error={email === "" || email === null || (/$|.+@.+..+/).test(email)===""}
                    helperText={email === "" ? "Empty!" : " "}

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <div 
                  id="phoneWrite" 
                  className="none">
                <PhoneInput

                  placeholder="010105683986"
                  value={phone}
                  onChange={setphone}
                  variant="standard"
                  />
                  </div>
                  <div 
                    id="phoneRead">
                  <TextField
                    required
                    fullWidth
                    name="phoneEead"
                    label="Phone"
                    type="phone"
                    autoComplete="Phone"
                    defaultValue="01015683986"
                    className="phoneRead"
                    disabled={state}
                  /></div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={1}
                      //onChange={handleChange}
                      label="Age"
                      disabled = {state}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>Male</MenuItem>
                      <MenuItem value={0}>Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{ width: "auto" }}
                    disabled = {state}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              <Grid item sm={12} md={5}>
              <button
                type="submit"
                onClick={handleSaveUserAccount} id="save-account-detail" 
                className="save-account-detail none"
              >
                Save
              </button>
              </Grid>
              
              </Grid> 
            </Box>
          </div>
        </Grid>
        <Grid item sm={12} md={6}>
          <div className="account-overview-card">2</div>
        </Grid>
        <Grid item sm={12} md={6}>
          <div className="account-overview-card">3</div>
        </Grid>
        <Grid item sm={12} md={6}>
          <div className="account-overview-card">4</div>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleSnackClose}
        message={Fedbackmessage}
      >
        <Alert onClose={handleSnackClose} severity="success" sx={{ width: '100%' }}>
            {Fedbackmessage}
        </Alert>
      </Snackbar>
    </>
    
  );
};

export default MyAccount;
