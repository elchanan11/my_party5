import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined, Style, WhatsApp} from "@mui/icons-material";
import {Link, useHistory, useNavigate, useParams} from "react-router-dom";
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import {mobile} from "../responsive";
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
const TitleContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  
  z-index: 3;
  display: flex;
  
  text-align: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  
`;

const Title = styled.h3`
  bottom: 0;
  left: 0;
  margin-top: 180px;
  width: 80%;
  color: #e5faf2;
  
  padding-top: 30px;
  //background-color: #e9f5f5;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 350px;

  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3ecec;
  position: relative;

  ${mobile({minWidth:"280px"})}
  &:hover ${Info} {
    opacity: 1;
  }
  // &:hover ${TitleContainer} {
  //   opacity: 1;
  //
  // }
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

    const [productName,setProductName] = useState("")
    let postMessageToWatapp = "שלום אני מהאתר ואני מעוניין ב "
    const dispatch = useDispatch()
    const [product,setProduct] = useState(props.item)
    const [quantity,setQuantity] = useState(1)
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const navigate = useNavigate()
    let param = useParams()

    useEffect(()=>{
        setProductName(props.item.title)
        setProduct(props.item)
    },[props.id,param])

    const handleWhatsappClick = () => {
        let url = `https://wa.me/+972539323849?text=${postMessageToWatapp+productName}`;

        window.open(url);

        setProductName("")
    }

    const handleAddTOCartClick = () => {
        console.log('s')
        dispatch(
            addProduct({product, quantity,price: parseInt(product.price)})
        )
    }

    const handleImageLoded  = () =>{
        console.log('imageloded')
    }

    const handleImageClicked = () =>{
        navigate(`/product/${props.item._id}`)
    }
    return(
        <Container onClick={handleImageClicked}>
            <Circle />
            <Image loading="lazy" src={props.item.img} onLoad={handleImageLoded} />
            <Info>
                <Icon onClick={handleAddTOCartClick}>
                    <ShoppingCartOutlined />
                </Icon>
                <Link
                    reloadDocument
                    to={{
                        pathname:`/product/${props.item._id}`,
                        state: {}
                    }}
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
            {/*<TitleContainer>*/}
            {/*    <Title>*/}
            {/*        בלונים יפים מיוחדים נאים מתוקים*/}
            {/*    </Title>*/}
            {/*</TitleContainer>*/}

        </Container>
    )
}