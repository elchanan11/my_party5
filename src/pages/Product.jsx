import {Add, Remove, ShoppingCartOutlined, WhatsApp} from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import productPic from '../product.jpg'
import {mobile, tablet} from "../responsive";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {publicRequest} from "../requestMethods";
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import Loading from "../components/Loading";

const Container = styled.div`
  background-color: #f3ecec;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({flexDirection: 'column', padding: "10px"})}

`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: gray;
  text-align: center;
  font-size: 12px;
  justify-content: flex-start;
  
`;

const ImageNote = styled.span`
  
`

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  max-height: 450px;
  height: 90vh;
  ${mobile({height: '80%'})}
`;
const InfoAndIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${mobile({flexDirection:"column"})}
`

const InfoContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  ${mobile({padding: '10px'})}
  ${tablet({padding:0})}

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
  justify-content: center;
  flex: 1;
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
    const [imageIsLoaded,setImageIsLoaded] = useState(false)

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

    const handleImageLoded = () => {
        setImageIsLoaded(
            true
        )
    }

    console.log(productId)
    return (
        <Container>
            {!imageIsLoaded && <Loading />}
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} onLoad={handleImageLoded}/>
                    <ImageNote>
                        *התמונה להמחשה בלבד
                    </ImageNote>
                </ImgContainer>
                <InfoAndIconContainer>
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
                            <WhatsApp/>
                        </Icon>
                        <Icon color={"0002A1"} onClick={handleAddTOCartClick}>
                            <ShoppingCartOutlined />
                        </Icon>
                    </IconContainer>
                </InfoAndIconContainer>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Product;