import {useEffect} from "react";
import CartItem from "./CartItem";
import {mainCategories} from "../data";
import {useSelector} from "react-redux";
import styled from "styled-components";
import SearchItems from "./SearchItems";

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
`

export default function SearchReasult(props){

    const cart = useSelector(state=>state.cart)

    useEffect(()=>{
        if (props.serchText.length > 1){
            console.log(props.serchText)
        }
    },[props.serchText])
    return(
        <Container>
            {cart.products.map((productItem,index)=>(
                <SearchItems cartItem={productItem} key={index} index={index}/>
            ))}

        </Container>
    )
}