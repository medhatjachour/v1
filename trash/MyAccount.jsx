import { Grid } from "@mui/material";
import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SettingsIcon from "@mui/icons-material/Settings";
import Snackbar from '@mui/material/Snackbar';

import Alert from '@mui/material/Alert';

// for cool date view
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

//assets
import "./accountParts.css";
const MyAccount = () => {
    const [state, setState] = useState(true);
    const [open, setOpen] = useState(false);
    const [Fedbackmessage, setFedbackmessage] = useState("The data has updated successfully");
   
    const handleSnackClose = () => {
        setOpen(false);
    };
    const handleChangeState = () =>{
        setState(false)
        const editBtn = document.getElementById("edit-account-details")
        const saveBtn = document.getElementById("save-account-detail")
        editBtn.classList.add("none")
        saveBtn.classList.remove("none")
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
            <div className="acc-over-dinside">
              {/* start put some info */}
              <Grid container spacing={2} columns={12} justifyContent="center">
                <Grid item sm={12} md={6}>
                  <TextField
                    helperText="Please enter first your name"
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                    defaultValue="Medhat"
                    disabled = {state}
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    defaultValue="Ashour"
                    disabled = {state}
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    defaultValue="Medhatashour@mazboot.com"
                    disabled = {state}
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <TextField
                    id="standard-basic"
                    label="Phone"
                    variant="standard"
                    defaultValue="0101565869"
                    disabled = {state}
                  />
                </Grid>
                <Grid item sm={12} md={6}>
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
                <Grid item sm={12} md={6}>
                  {/*  
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Age
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={20}
                      //onChange={handleChange}
                      label="Age"
                      disabled = {state}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={20}>22</MenuItem>
                    </Select>
                  </FormControl>
                      
                         
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                
                    <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    //value={value}
                    //onChange={handleChange}
                    //renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                 */}{" "}
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
                  <button onClick={handleSaveUserAccount} id="save-account-detail" className="save-account-detail none"></button>
                </Grid>
              </Grid>
            </div>
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
