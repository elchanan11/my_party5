import React from "react";
import styled from "styled-components";
import {categoryData} from '../data'
import CategoryItem from "./CategoryItem";
import {mobile} from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #f5fbfd;
  ${mobile({padding: '0px',flexDirection:"column"})}
`

export default function Categories(){
    return(
        <Container>
            {categoryData.map(item=>(
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
    )
}