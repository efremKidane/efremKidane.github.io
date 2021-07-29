import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Footer from "../footer/footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 80,
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
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.papers}>
          <Paper className={classes.papers}>
            <h2 className={classes.h2}>EFI MECHANIC SERVICES</h2>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2><strong>Auto Repair Services</strong></h2>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src="https://image.shutterstock.com/image-photo/auto-mechanic-working-on-car-260nw-1458396509.jpg"
              alt="Girl in a jacket"
              width="400"
              height="300"
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src="https://image.shutterstock.com/image-photo/auto-mechanic-working-on-car-260nw-1458396509.jpg"
              alt="Girl in a jacket"
              width="300"
              height="300"
            />
            <p>hello again </p>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src="https://image.shutterstock.com/image-photo/auto-mechanic-working-on-car-260nw-1458396509.jpg"
              alt="Girl in a jacket"
              width="300"
              height="300"
            />
            <p>helo my name is efrem how is every thing so whats up</p>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src="https://image.shutterstock.com/image-photo/auto-mechanic-working-on-car-260nw-1458396509.jpg"
              alt="Girl in a jacket"
              width="300"
              height="300"
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src="https://image.shutterstock.com/image-photo/auto-mechanic-working-on-car-260nw-1458396509.jpg"
              alt="Girl in a jacket"
              width="300"
              height="300"
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img
              src="https://image.shutterstock.com/image-photo/auto-mechanic-working-on-car-260nw-1458396509.jpg"
              alt="Girl in a jacket"
              width="300"
              height="300"
            />
            <p>helo my name is efrem how is every thing so whats up</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
