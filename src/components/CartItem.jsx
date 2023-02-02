import React, {useEffect} from "react";
import {deleteOneProduct} from "../redux/cartRedux";
import {DeleteOutline, WhatsApp} from "@mui/icons-material";
import styled from "styled-components";
import {mobile} from "../responsive";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {BASE_URL} from "../requestMethods";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  max-width: 850px;
  background-color: #f6e9e9;
  ${mobile({flexDirection: "column"})}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  
`;

const Image = styled.img`
  width: 200px;
  max-height: 300px;
  
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span`
 
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({margin: "5px 15px"})}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom: "0px"})}
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const ProductNumContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  
`

const ProductNum = styled.div`
  width: 50px;
  display: flex;
  justify-content: flex-end;
  color: gray;
  cursor: pointer;
`
export default function CartItem(props){

    const dispatch = useDispatch()
    let postMessageToWatapp = "שלום אני מהאתר ואני מעוניין ב "
    const [productName,setProductName] = useState("")
    const [pageLink,setPageLink] = useState(null)

    useEffect(()=>{
        setProductName(props.cartItem.title)
        let baseUrl = window.location.origin
        setPageLink( baseUrl+ '/api/product/' + props.cartItem._id)
    },[props.cartItem])

    const handleWhatsAppClick = () => {

        let url = `https://wa.me/+972539323849?text=${postMessageToWatapp+ productName +`  \n` + pageLink}`

        window.open(url);

        setProductName("")
    }

    return(
        <Product >

            <ProductDetail>
                <Image
                    src={props.cartItem?.img}/>
                <Details>
                    <ProductName>
                        <b>Product:</b> {props.cartItem?.title}
                    </ProductName>
                    <ProductId>
                        <b>ID:</b> <div style={{width:"3px"}}>{props.cartItem?._id.substring(0,8)}...</div>
                    </ProductId>
                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>

                </ProductAmountContainer>
                <ProductPrice>₪ {props.cartItem?.price}</ProductPrice>
            </PriceDetail>
            <ProductNumContainer>
                <ProductNum onClick={handleWhatsAppClick}>
                    <WhatsApp />
                </ProductNum>
                <ProductNum >
                    <DeleteOutline
                        onClick={()=>{
                            dispatch(
                                deleteOneProduct(
                                    {product:props.cartItem,
                                        index:props.index,
                                        price: parseInt(props.cartItem.price
                                        )
                                    }
                                )
                            )
                        }}
                        style={{cursor:"pointer"}}
                    />
                </ProductNum>
            </ProductNumContainer>
        </Product>
    )
}