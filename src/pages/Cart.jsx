import {Add, Mail, Remove, WhatsApp} from "@mui/icons-material";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useState} from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({display: "none"})}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
  flex: 3;
`;

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

const ProductId = styled.span``;

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

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: right;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const IconConainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`
const Note = styled.p`
  text-align: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 20;
  color: gray;
`
const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {

    const cart = useSelector(state=>state.cart)
    let productNum = 1

    let productName = []
    let postMessageToWatapp = "שלום אני מהאתר ואני מעוניין ב "

    const handleWhatsAppClick = () => {

        cart.products.map((productItem)=> {
            productName.push(productItem.title)
        })

        console.log(productName)
//         let url = `https://wa.me/send?phone=${+972539323849}`;
// //  Appending the message to the URL by encoding it
//         url += `&text=${encodeURI(` ${postMessage + " "+productName} ` )}&app_absent=0`;

        let url = `https://wa.me/+972539323849?text=${postMessageToWatapp+productName}`

        window.open(url);
        productName = []
    }

    return (
        <Container>
            <Navbar />
            <Announcment />
            <Wrapper>
                <Title>הסל שלך</Title>
                <Top>
                    <Link to={"/"}>
                        <TopButton>המשך לקנות</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>סל({cart.quantity})</TopText>

                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((productItem)=>(
                            <Product key={productNum}>
                                {productNum+=1}
                                <ProductDetail>
                                    <Image
                                        src={productItem.img}/>
                                    <Details>
                                        <ProductName>
                                            <b>Product:</b> {productItem.title}
                                        </ProductName>
                                        <ProductId>
                                            <b>ID:</b> {productItem._id}
                                        </ProductId>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>

                                    </ProductAmountContainer>
                                    <ProductPrice>₪ {productItem.price}</ProductPrice>
                                </PriceDetail>
                            </Product>
                        ))}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>סיכום הזמנה</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>₪ {cart.total}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>₪ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <IconConainer>
                            <Icon color={'82CD47'} onClick={handleWhatsAppClick}>
                                {<WhatsApp />}
                            </Icon>
                            <Icon color={'E60023'}>
                                {<Mail />}
                            </Icon>
                        </IconConainer>
                        <Note>
                            לחץ על אחד הכפתורים לתשלום במייל\וואצאפ*
                        </Note>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;