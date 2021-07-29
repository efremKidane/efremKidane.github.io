import React, { Component } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import NavBar from "../navbar/navbar";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5px;
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #131313;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5px;
`;
const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 5px;
  position: realtive;

  Button {
    justify-content: flex-end;
    alignitems: flex-end;
    alignself: flex-end;
  }
`;

export default class Success extends Component {
  render() {
    const { value } = this.props;

    return (
      <React.Fragment>
        <NavBar />
        <AppBar
          style={{
            position: "static",
            padding: "20px",
            background: "#74eda4",
            marginTop: "60px",
          }}
        >
          Success
        </AppBar>
        <h2>Thank you for your Appointment request</h2>
        <p>An appointment request has recieved to Efi mechanics</p>
        <p>We will respond to your request within few minutes to your email</p>
        <h3>Shop Hours</h3>
        <p>Monday 8:00AM - 6:00PM</p>
        <p>Tuesday 8:00AM - 6:00PM</p>
        <p>Wensday 8:00AM - 6:00PM</p>
        <p>Thersday 8:00AM - 6:00PM</p>
        <p>Friday 8:00AM - 6:00PM</p>
        <p>Saturday 8:00AM - 6:00PM</p>
      </React.Fragment>
    );
  }
}
