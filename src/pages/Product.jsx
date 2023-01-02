import {Add, Remove, ShoppingCartOutlined, WhatsApp} from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import productPic from '../product.jpg'
import {mobile} from "../responsive";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {publicRequest} from "../requestMethods";
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({flexDirection: 'column', padding: "10px"})}

`;

const ImgContainer = styled.div`
  flex: 1;
  color: gray;
  text-align: right;
  font-size: 12px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  max-height: 450px;
  height: 90vh;
  
  ${mobile({height: '80%'})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding: '10px'})}

`;

const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 50px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: center;
  font-weight: 600;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  text-align: center;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width: '100%'})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  ${mobile({justifyContent: "center"})}
`

const Icon = styled.div`
  width: 50px;
  height: 50px;
  color: white;
  display: flex;
  margin: 5px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: #${props=>props.color};
  border-radius: 50%;
  &:hover {
    border: black 1px solid;
    transform: scale(1.01);
  }
`;

const Product = () => {
    const location = useLocation()
    const productId = location.pathname.split('/')[2]
    const [product,setProduct] = useState({})
    const [quantity,setQuantity] = useState(1)
    const dispatch = useDispatch()
    const [productName,setProductName] = useState("")
    let postMessageToWatapp = "שלום אני מהאתר ואני מעוניין ב "

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/product/find/${productId}`)
                setProduct(res.data)
            }catch (err){
                console.log(err)
            }
        }
        getProduct()
    },[])

    useEffect(()=>{
        setProductName(product.title)
    },[product])

    const handleAddTOCartClick = () => {
        dispatch(
            addProduct({product, quantity,price: parseInt(product.price)})
        )
    }

    const handleWhatsAppClick = () => {

        console.log(productName)

        let url = `https://wa.me/+972539323849?text=${postMessageToWatapp+productName}`

        window.open(url);

        setProductName("")
    }

    console.log(productId)
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                    *התמונה להמחשה בלבד
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>
                        {product.desc}
                    </Desc>
                    <Price>₪ {product.price}</Price>
                    <AddContainer>
                        <AmountContainer>

                        </AmountContainer>
                    </AddContainer>

                </InfoContainer>
                <IconContainer>
                    <Icon color={"7DCE13"} onClick={handleWhatsAppClick}>
                        {/*<a href=`https://wa.me/+972539323849?text=${encodeURI(`היי, אני מהאתר ואני מעוניין ב: `)}&app_absent=0` target="_blank">*/}
                            <WhatsApp/>

                        {/*</a>*/}
                    </Icon>
                    <Icon color={"0002A1"} onClick={handleAddTOCartClick}>
                        <ShoppingCartOutlined />
                    </Icon>
                </IconContainer>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Product;