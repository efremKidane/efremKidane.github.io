import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import {year} from "./requestStyle";
import { make } from "./requestStyle";
import { model } from "./requestStyle"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3rem calc();
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #131313;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
`;
const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  position: realtive;
`;

export default class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { value, handleChange } = this.props;

    return (
      <React.Fragment>
        <AppBar
          style={{ position: "static", padding: "20px", background: "#000" }}
        >
          MY INFORMATION
        </AppBar>
        <Container>
          <ColumnLeft>
            <h3>Contact Information</h3>
            <TextField
              required
              label="First Name"
              defaultValue={value.firstName}
              onChange={handleChange("firstName")}
            />
            <br />
            <TextField
              required
              label="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={value.lastName}
            />
            <br />
            <TextField
              required
              label="Email"
              onChange={handleChange("email")}
              defaultValue={value.email}
            />
            <br />
            <TextField
              required
              label="phone"
              onChange={handleChange("phone")}
              defaultValue={value.phone}
            />
            <br />
            <br />
            <Button variant="outlined" color="primary" onClick={this.back}>
              Back
            </Button>
          </ColumnLeft>
          <ColumnRight>
            <h3>Vehicle Information</h3>
            <br />
            <TextField
              select
              label="Vehicle Year"
              value={value.vehicleYear}
              onChange={handleChange("vehicleYear")}
              helperText="Please select Vehicle Year"
            >
              {year.map((year, index) => (
                <MenuItem key={index} value={year}>
                  {year}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <TextField
              select
              label="Vehicle Make"
              value={value.vehicleMake}
              onChange={handleChange("vehicleMake")}
              helperText="Please select Vehicle Make"
            >
              {make.map((make, index) => (
                <MenuItem key={index} value={make}>
                  {make}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <TextField
              select
              label="Vehicle Model"
              value={value.vehicleModel}
              onChange={handleChange("vehicleModel")}
              helperText="Please select Vehicle Model"
            >
              {model[value.vehicleMake].map((make, index) => (
                <MenuItem key={index} value={make}>
                  {make}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <Button variant="outlined" color="primary" onClick={this.continue}>
              Continue
            </Button>
          </ColumnRight>
        </Container>
      </React.Fragment>
    );
  }
}
