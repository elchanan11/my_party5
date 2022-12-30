import React from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@mui/icons-material";
import {Badge} from "@mui/material";
import Logo from '../logo.png'
import backgroundLogo from '../img_23.png'
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Container = styled.div`
  min-height: 60px;
  margin-bottom: 5px;
  ${mobile({height: '50px'})}
`
const Wrapper = styled.div`
  background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.9)),
  url(${backgroundLogo}) center;
  
  display: flex;
  justify-content: space-between;
  padding: 10px 20px ;
  align-items: center;
  ${mobile({padding: '10px 0'})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: 'none'})}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  ${mobile({marginLeft: '7px'})}
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({width: '50px'})};
  text-align: right;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo1 = styled.img`
  max-height: 100px;
  max-width: 200px;
  font-weight: bold;
  color: blue;
  cursor: pointer;
  //text-decoration: underline;
  font-family: 'Noto Serif Hebrew', serif;
  ${mobile({height: '40px'})}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2,justifyContent: 'center'})}
`;

const MenuLink = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontsize: '12px' , marginLeft: "6px"})}
`

export default function Navbar(){
    const quantity = useSelector(state=>state.cart.quantity)

    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language >
                        EN
                    </Language>
                    <SearchContainer >
                        <Input placeholder={'חפש'}>
                        </Input>
                        <Search style={{color:"gray" ,fontSize:"16px"}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to={"/"}>
                        <Logo1 src={Logo}/>
                    </Link>
                </Center>
                <Right>
                    <MenuLink>
                        הירשם
                    </MenuLink>
                    <MenuLink>
                        התחבר
                    </MenuLink>
                    <Link to={"/cart"}>
                        <MenuLink>
                            <Badge color="primary" badgeContent={quantity}>
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuLink>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}
