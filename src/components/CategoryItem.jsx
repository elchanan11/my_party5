import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
  background-color: #f5fbfd;
  flex-direction: column;
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 130px;
  max-width: 200px;
  height: 200px;
  border-style: solid;
  border-width: 15px 15px 15px 15px;
  border-color: #FFF;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 0px 8px 1px rgb(196 196 196 / 50%);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  margin-top: 0px;
  
  --margin-bottom: 0px;
  --margin-left: 0px;
  --padding-top: 1%;
  --padding-right: 0%;
  margin-bottom: 15px;
  padding-left: 0%;
  margin-right: 10px;
  margin-left: 10px;
  ${mobile({width: "30%"})}
`
const Image = styled.img`
  max-width: 100%;
  height: 70%;
  border: none;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  flex: 1;
  
  ${mobile({})}
  box-shadow: none;
`
const Info = styled.div`
  width: 100%;
  height: 100%;
  
  
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  
`
const Title = styled.h1`
  
  padding: 0;
  margin: 0;
  line-height: 1;
  font-size: 20px;
  font-weight: 600;
  color: black;
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

                </Info>
            </Link>
        </Container>
    )
}