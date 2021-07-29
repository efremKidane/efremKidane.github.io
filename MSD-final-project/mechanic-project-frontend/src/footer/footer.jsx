import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerStyle";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading><u>Services</u></Heading>
            <FooterLink href="#">New Tire & Tire Repair</FooterLink>
            <FooterLink href="#">Brakes & Brake Repair</FooterLink>
            <FooterLink href="#">Oil Change</FooterLink>
            <FooterLink href="#">Exhaust System Service</FooterLink>
          </Column>
          <Column>
            <Heading></Heading>
            <FooterLink href="#">Ligths, Wipers & Accessories</FooterLink>
            <FooterLink href="#">Maintenace Package</FooterLink>
            <FooterLink href="#">Radiator & Engine Cooling</FooterLink>
          </Column>
          <Column>
            <Heading><u>Contact Us</u></Heading>
            <FooterLink href="#">Fairfield, IA</FooterLink>
            <FooterLink href="#"><i className="fas fa-phone">
                <span style={{ marginLeft: "10px" }}>
                  (345)678-2345
                </span></i></FooterLink>
            <FooterLink href="#"><Link to='/request-appointment'>Request Appointment</Link></FooterLink>
            <FooterLink href="#">United States</FooterLink>
          </Column>
          <Column>
            <Heading><u>Social Media</u></Heading>
            <FooterLink href="https://www.facebook.com/efremk2">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;