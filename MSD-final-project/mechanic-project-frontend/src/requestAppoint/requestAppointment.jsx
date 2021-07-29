import React, { useContext, useState } from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/context";
import FormUserDetails from "./formUserDetails";
import FormPersonalDetails from "./formPersonalDetails";
import Confirm from "./confirm";
import { useStyles, intialState } from "./requestStyle";
import { message } from "./emailItem";
import Success from "./success";

export default function RequestApp() {
  const [state, setState] = useState(intialState);
  const[error, setError] = useState()

  //Proceed to next step
  const nextStep = () => {
    setState({ ...state, step: state.step + 1 });
  };

  //go back to prev state
  const prevStep = () => {
    setState({ ...state, step: state.step - 1 });
  };

  //handle field change
  const handleChange = (input) => (e) => {

    setState({ ...state, [input]: e.target.value });
  };

  const confirmAppointment = () => {
    console.log(state);
    // axios
    //   .get(
    //     `http://localhost:5000/sendEmail?recipient=${state.email}&sender=${message.sender}&topic=${state.service}&text=${message.text}+ ${state.date}`
    //   )
    //   .then((data) => {
    //     console.log("send");
    //   });
    axios
      .post("http://localhost:5000/appointment", state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const classes = useStyles();
  const user = useContext(UserContext);
  const { step } = state;
  const {
    date,
    time,
    service,
    serviceDescription,
    firstName,
    lastName,
    email,
    phone,
    vehicleMake,
    vehicleModel,
    vehicleYear,
  } = state;
  const value = {
    date,
    time,
    service,
    serviceDescription,
    firstName,
    lastName,
    email,
    phone,
    vehicleMake,
    vehicleModel,
    vehicleYear,
  };

  //to go to the main page
  const BackHome = () => {
    user.dispatch({ type: "REQUEST_APPOINTMENT", payload: 'home' });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2 className={classes.h2}>REQUEST APPOINTMENT</h2>
            <p className={classes.p}>FAIRFILED, IA</p>
          </Paper>
        </Grid>
        <Grid item xs={8} className={classes.papers}>
          {/* <Paper className={classes.papers}> */}
          {step === 1 && (
            <FormUserDetails
              nextStep={nextStep}
              handleChange={handleChange}
              value={value}
              confirmApp={confirmAppointment}
            />
          )}
          {step === 2 && (
            <FormPersonalDetails
              nextStep={nextStep}
              prevStep={prevStep}
              handleChange={handleChange}
              value={value}
              confirmApp={confirmAppointment}
            />
          )}
          {step === 3 && (
            <Confirm
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
              value={value}
              confirmApp={confirmAppointment}
            />
          )}
          {step === 4 && <Success value={value} />}
          {/* </Paper> */}
        </Grid>
        <Grid item xs={4} className={classes.papers}>
          {/* <Paper className={classes.papers}> */}
          <Paper elevation={4} className={classes.paperInfo}>
            <h2 className={classes.info}>NEED AN APPOINTMENT SOONER?</h2>{" "}
            <p className={classes.p1}>Give us a call, we're here to help.</p>
            <i className="fas fa-phone" style={{ color: "yellow" }}>
              <span style={{ marginLeft: "10px" }}>(345)678-2345</span>
            </i>
          </Paper>
          <h1>My Store</h1>
          <hr />
          <h3>
            <u>EFI MECHANICS FAIRFIELD, IA</u>
          </h3>
          <h4>203 main dr</h4>
          <h4>Fairfield, IA 52556</h4>
          {/* </Paper> */}
        </Grid>
        <Link to="/" onClick={BackHome}>
          Back
        </Link>
      </Grid>
    </div>
  );
}
