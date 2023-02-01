import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {categoryData, mainCategories, subCategiries} from '../data'
import CategoryItem from "./CategoryItem";
import {mobile} from "../responsive";
import {WhatsApp} from "@mui/icons-material";
import {Fab} from "@mui/material";
import {useLocation} from "react-router-dom";

const Container = styled.div`

  text-align: center;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: #F9F3DF;
  padding-bottom: 60px;
  padding-top: 40px;

`

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  
  ${mobile({padding: '0px'})}
`
const CategoryTitle = styled.h1`
  color: black;
  direction: rtl;
  text-align: center;
  align-items: center;
  font-size: 45px;
  margin-bottom: 40px;
`

export default function Categories(){

    const [subCtegories,setSubCategories] = useState([])
    const [subCategoryTitle,setSubCategoryTitle] = useState({})
    const location = useLocation()
    const subCategory = location.pathname.split('/')[2]


    useEffect(()=>{
            setSubCategories(subCategiries.filter(item=>{
                return(
                    item.subCat === subCategory
                )
            }))
            setSubCategoryTitle(mainCategories.filter(item=>{
                return(
                    item.cat === subCategory
                )
            }))
        console.log(subCategoryTitle)
        }
        , [subCategory])

    console.log(subCategory)
    return(
        <Container>

            <CategoryTitle style={{direction:"rtl"}}>
                {subCategoryTitle[0]?.title ? subCategoryTitle[0]?.title : "תת קטגוריה"}
            </CategoryTitle>
            <Wrapper>
                { subCtegories.map(item=>(
                    <CategoryItem item={item} key={item.id}/>
                ))}
            </Wrapper>
        </Container>

    )
}