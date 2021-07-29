import React, { Component } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-form-validator-core";
import { options } from "./requestStyle";
import { services } from "./requestStyle";

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
  justify-content: flex-end;
  align-items: flex-start;
  padding: 2rem;
  position: realtive;
`;

export default class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { value, handleChange } = this.props;
    return (
      <React.Fragment>
        <AppBar
          style={{ position: "static", padding: "20px", background: "#000" }}
        >
          APPOINTMENT DETAILS
        </AppBar>
        <Container>
          <ColumnLeft>
          <h3>Prefferd Date</h3>
            <TextField
              type="date"
              inputProps={{
                min: new Date(),
              }}
              label="Date"
              defaultValue={value.date}
              onChange={handleChange("date")}
            />
            <br />
            <h3>Prefferd Time</h3>
            <TextField
              select
              label="Time"
              value={value.time}
              onChange={handleChange("time")}
              helperText="Please select your prefferd time"
            >
              {options.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <h3>Service Needed</h3>
            <TextField
              select
              label="Service"
              value={value.service}
              onChange={handleChange("service")}
              helperText="Please select your prefferd time"
            >
              {services.map((service, index) => (
                <MenuItem key={index} value={service}>
                  {service}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <h3>More Description</h3>
            <TextField
              label="serviceDescription"
              onChange={handleChange("serviceDescription")}
              defaultValue={value.serviceDescription}
              fullWidth
              multiline
              rows={3}
              autocomplete="none"
            />
          </ColumnLeft>
          <ColumnRight>
            <br />
            <br />
            <Button
              style={{ alignSelf: "center" }}
              variant="outlined"
              color="primary"
              onClick={this.continue}
            >
              Continue
            </Button>
          </ColumnRight>
        </Container>
      </React.Fragment>
    );
  }
}
