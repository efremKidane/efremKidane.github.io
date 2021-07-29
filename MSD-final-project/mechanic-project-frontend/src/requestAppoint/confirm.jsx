import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useContext } from "react";
import { UserContext } from './../utils/context';

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

export default function Confirm (props) {
  const  user = useContext(UserContext);
  const history = useHistory();
 const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

 const confirm = (e) => {
    e.preventDefault();
    props.confirmApp();
    user.dispatch({ type: "REQUEST_APPOINTMENT", payload: 'home' });
    history.push("/Success");

  };

    const { value } = props;

    return (
      <React.Fragment>
        <AppBar
          style={{ position: "static", padding: "20px", background: "#000" }}
        >
          REVIEW & SUBMIT
        </AppBar>
        <h2>Appointment Summary</h2>
        <Container>
          <ColumnLeft>
            <h3>information</h3>
            <p>{value.firstName}</p>
            <p>{value.lastName}</p>
            <p>{value.email}</p>
            <p>{value.phone}</p>
            <h3>Date & Time</h3>
            <p>{value.date}</p>
            <p>{value.time}</p>
            <Button variant="outlined" color="primary" onClick={back}>
              Back
            </Button>
          </ColumnLeft>
          <ColumnRight>
            <Button variant="outlined" color="primary" onClick={confirm}>
              Confirm & Continue
            </Button>
          </ColumnRight>
        </Container>
      </React.Fragment>
    );
  
}
