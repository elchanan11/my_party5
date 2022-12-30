import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined, Style, WhatsApp} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  width: 75%;
  max-width: 300px;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export default function ProductItem(props){
    console.log(props.item.title)
    const [productName,setProductName] = useState()
    let postMessage = "הי אני מהאתר ואני מעוניין ב "

    useEffect(()=>{
        setProductName(props.item.title)
    },[props.item])

    const handleWhatsappClick = () => {
        console.log(productName)

        let url = `https://wa.me/send?phone=${+972539323849}`;
 // Appending the message to the URL by encoding it
        url += `&text=${encodeURI(` ${postMessage + " "+productName} ` )}&app_absent=0`;

        window.open(url);
    }

    const dispatch = useDispatch()
    const product = props.item
    const [quantity,setQuantity] = useState(1)
    const handleAddTOCartClick = () => {
        console.log('s')
        dispatch(
            addProduct({product, quantity,price: parseInt(product.price)})
        )
    }
    return(
        <Container>
            <Circle/>
            <Image src={props.item.img}/>
            <Info>
                <Icon onClick={handleAddTOCartClick}>
                    <ShoppingCartOutlined />
                </Icon>
                <Link to={`/product/${props.item._id}`}
                      style={{textDecoration: 'none'}}
                >
                    <Icon >
                        <Search />
                    </Icon>
                </Link>

                <Icon onClick={handleWhatsappClick}>
                    <WhatsApp />
                </Icon>
            </Info>
        </Container>
    )
}