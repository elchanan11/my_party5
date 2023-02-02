import React, {useEffect} from "react";
import {deleteOneProduct} from "../redux/cartRedux";
import {DeleteOutline, WhatsApp} from "@mui/icons-material";
import styled from "styled-components";
import {mobile} from "../responsive";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {BASE_URL} from "../requestMethods";
import {Link, useNavigate} from "react-router-dom";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 100%;
  background-color: #fdf5f6;
  text-underline: none;
  ${mobile({flexDirection: "column"})}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  
`;

const Image = styled.img`
  width: 200px;
  max-height: 200px;
  cursor: pointer;
`;

const Details = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-underline: none;
`;

const ProductName = styled.span`
  font-weight: 600;
  direction: rtl;
`;

const ProductId = styled.div`
 width: 100%;
  direction: rtl;
`;


export default function SearchItems(props){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    let postMessageToWatapp = "שלום אני מהאתר ואני מעוניין ב "
    const [productName,setProductName] = useState("")
    const [pageLink,setPageLink] = useState(null)

    useEffect(()=>{
        setProductName(props.cartItem.title)
        let baseUrl = window.location.origin
        setPageLink( baseUrl+ '/product/' + props.cartItem._id)
    },[props.cartItem])

    const handleWhatsAppClick = () => {

        let url = `https://wa.me/+972539323849?text=${postMessageToWatapp+ productName +`  \n` + pageLink}`

        window.open(url);

        setProductName("")
    }

    const handleToProductClick = () =>{
        navigate(`/product/${props.cartItem._id}`)
    }

    return(
        <Link reloadDocument to={`/product/${props.cartItem._id}`}  style={{ textDecoration: 'none' }} >
            <Product
            //     onClick={()=>{
            //     window.location.reload()
            // }}
            >
                <ProductDetail>
                    <Image
                        onClick={handleToProductClick}
                        src={props.cartItem?.img}/>
                    <Details>
                        <ProductName >
                            {props.cartItem?.title}
                        </ProductName>
                        <ProductId >
                            {props.cartItem?.desc.substring(0,50)+"..."}
                        </ProductId>
                    </Details>
                </ProductDetail>
            </Product>
        </Link>
    )
}