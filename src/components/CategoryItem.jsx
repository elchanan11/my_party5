import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  
  position: relative;
  min-width: 280px;
  
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({maxHeight: '30vh'})}
`
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  
`
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #EFEFEF;
  opacity: 0.8;
  color: black;
  
  cursor: pointer;
  font-weight: 600;
`

export default function CategoryItem(props){
    return(
        <Container>
            <Link to={
                '/products/'+props.item.cat}
                  state={{title: props.item.title}}
                  style={{textDecoration: 'none'}}
            >
                <Image src={props.item.img}/>
                <Info>
                    <Title>{props.item.title}</Title>
                    <Button>Shop Now!</Button>
                </Info>
            </Link>
        </Container>
    )
}