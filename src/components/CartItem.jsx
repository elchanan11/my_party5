import React from "react";
import {deleteOneProduct} from "../redux/cartRedux";
import {DeleteOutline} from "@mui/icons-material";
import styled from "styled-components";
import {mobile} from "../responsive";
import {useDispatch} from "react-redux";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
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
  ${mobile({marginBottom: "20px"})}
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const ProductNum = styled.div`
  display: flex;
  justify-content: flex-end;
  color: gray;
`
export default function CartItem(props){

    const dispatch = useDispatch()



    return(
        <Product >
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
            <ProductDetail>
                <Image
                    src={props.cartItem?.img}/>
                <Details>
                    <ProductName>
                        <b>Product:</b> {props.cartItem?.title}
                    </ProductName>
                    <ProductId>
                        <b>ID:</b> <div style={{width:"3px"}}>{props.cartItem?._id}</div>
                    </ProductId>
                </Details>
            </ProductDetail>
            <PriceDetail>
                <ProductAmountContainer>

                </ProductAmountContainer>
                <ProductPrice>₪ {props.cartItem?.price}</ProductPrice>
            </PriceDetail>
        </Product>
    )
}