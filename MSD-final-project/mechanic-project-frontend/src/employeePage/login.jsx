import React from "react";
import { Avatar, Button, Grid, Paper, TextField } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./../utils/context";

const Login = () => {
  const user = useContext(UserContext);
  const [state, setState] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  const submit = () => {
    axios.post("http://localhost:5000/login", state).then((data) => {
      if (data.data.status) {
        user.dispatch({ type: "TOKEN", payload: data.data.data });
      }
    });
  };

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "20px auto",
  };

  const avatarStyle = { backgroundColor: "#1bbd7e" };

  return (
    <div
      style={{
        backgroundImage: `url('http://www.charlottesmobilemechanic.com/wp-content/uploads/2019/01/Mobile-Car-Mechanic-Tampa.jpg')`,
      }}
    >
      <Grid>
        <Grid item xs={12} style={{ background: "#131313" }}>
          <h1 style={{ fontFamily: "fantasy", margin: "10px", color: "#fff" ,padding:"20px"}}>
            Efi Mechanic Log in to see Appointments Schedule
          </h1>
          <Button
            variant="outlined"
            color="primary"
            style={{ align: "flex-end", padding: "20px", margin: "10px" }}
          >
            Back to home page
          </Button>
        </Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Log In</h2>
          </Grid>
          <TextField
            label="user name"
            placeholder="Enter username"
            value={state.userName}
            onChange={handleChange("userName")}
            fullWidth
            required
          />
          <TextField
            label="password"
            placeholder="Enter password"
            type="password"
            value={state.password}
            onChange={handleChange("password")}
            fullWidth
            required
          />
          <br />
          <br />
          <Button type="submit" color="primary" onClick={submit} fullWidth>
            Log In
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
