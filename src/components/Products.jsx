import {productData} from "../data";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
`

export default function Products(props){
    const [products,setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    useEffect(()=>{
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    props.cat ? "http://localhost:5000/api/product?category="+props.cat
                        : "http://localhost:5000/api/product"
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
            {products.map(productItem=>(
                <ProductItem key={productItem._id} item={productItem}/>
            ))}
        </Container>
    )
}