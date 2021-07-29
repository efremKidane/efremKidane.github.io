import React from "react";
import { Avatar, Button, Grid, Paper, TextField } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { useState } from "react";
import axios from "axios";

const SearchCustomer = () => {
  const [state, setState] = useState({
    email: "",
    phone: "",
    show: false,
    dat: {},
  });

  const paperStyle = {
    flexGrow: 1,
    flexDirection: "column",
    padding: 20,
    height: "50vh",
    width: "100%",
    margin: "20px auto",
  };

  const handleChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  const handleClick = ()=>{
      const searchData = {
          email: state.email,
          phone: state.phone
      }

      console.log(searchData);
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} style={{ background: "#131313" }}>
          <h1 style={{ fontFamily: "fantasy", margin: "10px", color: "#fff" }}>
            Efi Mechanic Appointments
          </h1>
          <Button
            variant="outlined"
            color="primary"
            style={{ align: "flex-end", padding: "20px", margin: "10px" }}
          >
            Back to home page
          </Button>
        </Grid>
        {state.show && (
          <Grid item xs={12}>
            <Paper elevation={10} style={paperStyle}>
              <h2>Search For Appointments</h2>
              <TextField
                value={state.email}
                onChange={handleChange("email")}
                label="Enter Email"
              />
              <br />
              <TextField
                value={state.phone}
                onChange={handleChange("Phone")}
                label="Enter Phone"
              />
              <br />
              <br />
              <Button variant="outlined" color="primary" onClick={handleClick}>
                search
              </Button>
            </Paper>
          </Grid>
        )}
        {!state.show && (
          <div style={{ padding: "20px" }}>
            <h2>Appointment Schedule</h2>
            <p>Full Name: </p>
            <p>Email: </p>
            <p>Service: </p>
            <p>Vehicle-Type: </p>
            <p>Service Description: </p>
            <p>Time And Date: </p>
          </div>
        )}
      </Grid>
    </div>
  );
};

export default SearchCustomer;
