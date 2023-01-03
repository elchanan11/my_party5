import {productData} from "../data";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import axios from "axios";
import {publicRequest} from "../requestMethods";

const Container = styled.div`

  text-align: center;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: #fae8e8;

`

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
`
const NoProducts = styled.span`
  text-align: center;
  
`

const CategoryTitle = styled.h1`
  color: black;
  text-align: center;
  align-items: center;
  font-size: 35px;
  margin-bottom: 20px;
  padding-top: 20px;
  
`

export default function Products(props){
    const [products,setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    useEffect(()=>{
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(
                    props.cat ? "/product?category="+props.cat
                        : "/product"
                )
                console.log(res.data)
                setProducts(res.data)
            }catch (err){
                console.log(err)
            }
        }

        getProducts()
    },[props.cat])

    useEffect(()=>{

        if (props.sort==="newest"){
            console.log(props.sort)
            setProducts((prev)=>
                [...prev].sort((a,b) => {return new Date(b.createdAt) - new Date(a.createdAt)})
            )
        }else if (props.sort==="asc"){
            console.log(props.sort)
            setProducts((prev)=>
                [...prev].sort((a,b) => a.price - b.price)
            )
        }else {
            console.log(props.sort)
            setProducts((prev) =>
                [...prev].sort((a,b) => b.price - a.price)
            )
        }
        console.log(products)
    }, [props.sort])

    return(
        <Container>
            {props.from === 'home' &&
                <CategoryTitle>
                    מוצרים מומלצים
                </CategoryTitle>
            }
            <Wrapper>
                {products.length !== 0 ? products.map(productItem=>(
                        <ProductItem key={productItem._id} item={productItem}/>
                    )) :
                    <NoProducts>
                        אין כרגע מוצרים זמינים בקטגוריה זו
                    </NoProducts>
                }
            </Wrapper>
        </Container>

    )
}