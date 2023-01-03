import React from "react";
import styled from "styled-components";
import {categoryData} from '../data'
import CategoryItem from "./CategoryItem";
import {mobile} from "../responsive";

const Container = styled.div`

  text-align: center;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: #f3efef;
  
`

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  
  ${mobile({padding: '0px'})}
`
const CategoryTitle = styled.h1`
  color: black;
  text-align: center;
  align-items: center;
  font-size: 35px;
  margin-bottom: 20px;
  padding-top: 20px;
  
`

export default function Categories(){
    return(
        <Container>

            <CategoryTitle>
                קטגוריות מוצרים
            </CategoryTitle>
            <Wrapper>
                { categoryData.map(item=>(
                    <CategoryItem item={item} key={item.id}/>
                ))}
            </Wrapper>
        </Container>

    )
}