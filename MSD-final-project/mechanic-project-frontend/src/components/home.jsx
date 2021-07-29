import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { UserContext } from "../utils/context";
import { Paper } from "@material-ui/core";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  background-image: url;
`;

const Container = styled.div`
  margin-top: 80px;
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
  padding: 5rem 2rem h1 {
    color: #fff;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  p {
    margin: 2rem 0;
    color: #131313;
    font-size: 2.5rem;
    line-height: 1.1;
  }
`;
const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  position: realtive;
  img {
    width: 100%;
    height: 500px;
  }
`;

const Image = styled.div``;

const Button = styled.div`
  padding: 1rem 3rem;
  color: #fff;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: red;
`;

function Home() {
  const user = useContext(UserContext);

  const changePage = () => {
    user.dispatch({ type: "REQUEST_APPOINTMENT", payload: "appointment" });
  };

  const changeEmployee = ()=>{
    user.dispatch({ type: "REQUEST_APPOINTMENT", payload: "login" });
  }

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <Paper
            style={{
              padding: "5px",
              marginLeft: "10px",
              marginBottom: "10px",
              background: "#131313",
              width: "400px",
            }}
          >
            <h1 style={{ color: "#fff", padding: "1rem" }}>
              WELCOME TO EFI MECHANIC
            </h1>
            <p style={{ color: "#fff", padding: "1rem" }}>
              For technician known for thier work & thier Word choose Efi
              Mechanics
            </p>
          </Paper>
          <NavLink
            to="/request-appointment"
            onClick={changePage}
            style={{ textDecoration: "none", margin: "10px" }}
          >
            <Button>REQUEST APPOINTMENT</Button>
          </NavLink>
        </ColumnLeft>
        <ColumnRight>
          <img src="https://www.sbdcnet.org/wp-content/uploads/2020/05/tim-mossholder-V37iTrYZz2E-unsplash-e1588620611528.jpg" />
          <NavLink
            to="/login-employee"
            onClick={changeEmployee}
            style={{ textDecoration: "none", margin: "10px" }}
          >
            <Button style={{ background: "yellow", color: "#131313" }}>
              LOG IN AS EMPLOYEE
            </Button>
          </NavLink>
        </ColumnRight>
      </Container>
    </Section>
  );
}

export default Home;
