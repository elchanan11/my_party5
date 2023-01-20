import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
  background-color: #f5fbfd;
  flex-direction: column;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 180px;
  max-width: 200px;
  height: 200px;
  border-style: solid;
  border-width: 15px 15px 15px 15px;
  border-color: #FFF;
  //border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 0px 8px 1px rgb(196 196 196 / 50%);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  margin-top: 0px;
  
  margin-bottom: 15px;
  padding-left: 0%;
  margin-right: 10px;
  margin-left: 10px;
  ${mobile({minWidth: "110px"})}
`
const Image = styled.img`
  max-width: 100%;
  height: 200px;
  max-height: 100%;
  
  border: none;
  border-radius: 0;
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
  height: 50px;
  line-height: 1;
  font-size: 20px;
  font-weight: 600;
  color: wheat;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  justify-content: center;
  background-color: black;
  opacity: 0.6;
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
                {/*<Info>*/}
                    <Title>{props.item.title}</Title>

                {/*</Info>*/}
            </Link>
        </Container>
    )
}