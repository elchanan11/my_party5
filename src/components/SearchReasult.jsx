import {useEffect, useState} from "react";
import CartItem from "./CartItem";
import {mainCategories} from "../data";
import {useSelector} from "react-redux";
import styled from "styled-components";
import SearchItems from "./SearchItems";
import {publicRequest} from "../requestMethods";

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
`

export default function SearchReasult(props){

    const cart = useSelector(state=>state.cart)
    const [searchedProducts,setSearchedProducts] = useState([])

    useEffect(()=>{
        const handleSearch = async () =>{
            const res = await publicRequest.get('product/search?filter='+props.serchText)
            console.log(res.data)
            setSearchedProducts(res.data)
        }
        if (props.serchText.length > 1){
            handleSearch()
        }
    },[props.serchText])
    return(
        <Container>
            {searchedProducts.map((productItem,index)=>(
                <SearchItems cartItem={productItem} key={index} index={index}/>
            ))}

        </Container>
    )
}