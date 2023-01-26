import React from "react";
import styled from "styled-components";
import {leptop, mobile, tablet} from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 150px;
  height: 200px;
  background-color: rgb(248, 248, 223);
  flex-direction: column;
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  height: 200px;
  
  
  margin-top: 0px;

  margin-bottom: 15px;
  padding-left: 0%;
  margin-right: 20px;
  margin-left: 20px;
  
`
const Image = styled.img`
  width: 155px;
  height: 200px;
  max-height: 100%;

  border: none;
  border-radius: 0;
  box-shadow: 0px 0px 8px 1px rgb(196 196 196 / 50%);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;

  flex: 1;
`
const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

`
const Title = styled.h1`
  width: 155px;
  max-height: 100%;
  height: 50px;
  padding: 0;
  margin: 0;
  line-height: 1;
  font-size: 20px;
  font-weight: 600;
  color: wheat;
  position: absolute;
  bottom: 0;
  text-align: center;
  justify-content: center;
  background-color: black;
  opacity: 0.6;
`




// const Container = styled.div`
//   background-color: rgb(248, 248, 223);
//   flex-direction: column;
//   position: relative;
//   flex: 1;
//   display: flex;
//   align-items: center;
//   height: 200px;
//   border-style: solid;
//   border-width: 1px;
//   border-color: rgb(248, 248, 223);
//   //border-radius: 10px 10px 10px 10px;
//   //box-shadow: 0px 0px 8px 1px rgb(196 196 196 / 50%);
//   transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
//   margin-top: 0px;
//
//   margin-bottom: 20px;
//   padding-left: 0%;
//   margin-right: 10px;
//   margin-left: 10px;
//
//
//   ${tablet({height:"255px",marginBottom:"50px"})}
//   ${leptop({height:"305px"})}
//   ${mobile({height: "205px",marginBottom:"20px"})}
// `
//
// const Image = styled.img`
//   width: 150px;
//   height: 150px;
//   max-height: 100%;
//
//   border: none;
//   border-radius: 50%;
//   box-shadow: none;
//   flex: 1;
//   box-shadow: none;
//
//   ${tablet({height: "200px", width:"200px"})}
//   ${leptop({height:"250px",width:"250px"})}
//   ${mobile({height: "150px", width:"150px"})}
// `
//
// const Title = styled.h1`
//   padding: 0;
//   margin: 0;
//   height: 50px;
//   line-height: 1;
//   font-size: 20px;
//   font-weight: 600;
//   color: wheat;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   text-align: center;
//   justify-content: center;
//   color: black;
//   margin-top: 5px;
//   ${tablet({fontSize:"30px"})}
//   ${leptop({fontSize:"30px"})}
//   ${mobile({fontSize:"16px"})}
// `

export default function CategoryItem(props){
    return(
        <Container>
            <Link to={
                '/products/'+props.item.cat}
                  state={{title: props.item.title}}
                  style={{textDecoration: 'none'}}
            >
                <Image src={props.item.img} alt={props.item.title}/>
                <Info>
                    <Title>{props.item.title}</Title>

                </Info>
            </Link>
        </Container>
    )
}