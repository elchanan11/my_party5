import Navbar from "./Navbar";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #DC0000;
  color: white;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`


export default function Announcment(){
    return(
        <Container>
          Deal!  Free Shipping for new customers!!
        </Container>
    )
}