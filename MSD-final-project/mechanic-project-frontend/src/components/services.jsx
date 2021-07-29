import React,{ useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Footer from "../footer/footer";
import { serviceItems } from "./serviceItems";
import { NavLink, Link } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { UserContext } from "../utils/context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 80,
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  papers: {
    backgroundColor: "black",
  },
  h2: {
    color: "white",
  },
  h3: {
    color: "black",
  },
  img: {
    width: "100%",
    height: 200,
  },
  link: {
    textDecoration: "none",
  },

  button: {
    backgroundColor: "red",
    color: "#fff",
  },
  sol:{
      color: "#fff"
  }
}));

export default function Services() {
  const classes = useStyles();
  const user = useContext(UserContext);

  const changePage = ()=>{
    user.dispatch({type:"REQUEST_APPOINTMENT", payload: 'appointemet'})
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.papers}>
          <Paper className={classes.papers}>
            <CssBaseline />
            <h2 className={classes.h2}>EFI MECHANIC SERVICES</h2>
            <h3 className={classes.sol}>the efi Mechanic is the new Gold Standard</h3>
            <NavLink to="/request-appointment" className={classes.link} onClick={changePage}>
              <button className={classes.button}>Request Appointmen</button>
            </NavLink>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>
              <strong>Auto Repair Services</strong>
            </h2>
          </Paper>
        </Grid>
        {serviceItems.map((item, index) => {
          return (
            <Grid item xs={4} key={index}>
              <Paper className={classes.paper}>
                <img src={item.img} className={classes.img} />
                <h3 className={classes.h3}>
                  <u>{item.title}</u>
                </h3>
                <p>{item.description}</p>
                <Link to='/request-appointment' onClick={changePage}>Request Appointmen</Link>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
