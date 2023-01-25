import React, {useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined, WhatsApp} from "@mui/icons-material";
import {Autocomplete, Badge, CircularProgress, Menu, TextField} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../logo-text.png'
import {mobile} from "../responsive";
import {useDispatch, useSelector} from "react-redux";
import {Link, Redirect, useHistory} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {publicRequest} from "../requestMethods";
import './navBar.css'
import {deleteProducts} from "../redux/cartRedux";
import {logOut} from "../redux/userRedux";
import {CSSTransition} from "react-transition-group";
import {categoryData} from "../data";

const Container = styled.div`
  width: 100%;
  position: sticky;
  box-shadow: 0 4px 2px -2px gray;
background-color: white;
  top: 0;
  z-index: 99;
  min-height: 60px;
  
  ${mobile({height: '50px'})}
`
const Wrapper = styled.div`
  
  display: flex;
  justify-content: space-between;
  padding: 10px 20px ;
  align-items: center;
  ${mobile({padding: '10px 0'})}
`;
const Left = styled.div`
  flex: 1;
  height: 30px;
  display: flex;
  padding: 1px;
  align-items: center;
  
  justify-content: flex-start;
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
  ${mobile({flex:1,justifyContent: "flex-end",alignItems:"right"})}
`;

const MenuLink = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 7px;
  ${mobile({fontsize: '12px',marginRight:"0px" })}
`

export default function Navbar(props){
    // const navigate = useNavigate();

    const quantity = useSelector(state=>state.cart.quantity)
    const [quantityValue,setQuanValue] = useState(quantity)
    const [loding,setLoading] = useState(false)
    let postMessageToWatapp = "שלום אני מהאתר "

    useEffect(() => {
        const makeAnimation = () =>{
            setQuanValue(quantity)
            setLoading(true)
            console.log(loding)
            setTimeout (()=>{
                setLoading(false)
            },1500)
        }
        if (quantityValue !== quantity){
            makeAnimation()
        }
    }
    , [quantity]);

    // const [query,setQuery] = useState("")
    // const [products,setProducts] = useState([])



    // useEffect(()=>{
    //     const fetchUsers = async ()=>{
    //         try {
    //             const res =  await publicRequest.get(`/product`)
    //             setProducts(res.data)
    //         }catch (e) {
    //             console.log(e)
    //         }
    //     }
    //     fetchUsers()
    // },[])

    // useEffect(()=>{
    //     const getProduct = async () => {
    //         // const res =  await publicRequest.get(`/product/find/${query._id}`)
    //          console.log(query)
    //          navigate(`/product/${query._id}`)
    //     }
    //     if (query !== "") {
    //         getProduct()
    //     }
    //
    // },[query])


    /////////////////////////////////for Drop down menu/////////////////////////

        const [isNavVisible, setNavVisibility] = useState(false);
        const [isSmallScreen, setIsSmallScreen] = useState(false);

        useEffect(() => {
            const mediaQuery = window.matchMedia("(max-width: 700px)");
            mediaQuery.addListener(handleMediaQueryChange);
            handleMediaQueryChange(mediaQuery);

            return () => {
                mediaQuery.removeListener(handleMediaQueryChange);
            };
        }, []);

        const handleMediaQueryChange = (mediaQuery) => {
            if (mediaQuery.matches) {
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
            }
        };

        const toggleNav = () => {
            setNavVisibility(!isNavVisible);
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        };

    const handleWhatsappClick = (e) => {
        e.stopPropagation();
        let url = `https://wa.me/+972539323849?text=${postMessageToWatapp}`;

        window.open(url);
    }

    return(
        <Container
             style={{position:isNavVisible===true ? "absolute" : "sticky"}}
        >
            <Wrapper>
                <Left>
                    <Link to={"/cart"}>
                        <MenuLink style={{marginLeft:"20px"}}>
                        {
                            !loding ?
                                    <Badge style={{marginRight:4}} color="primary" badgeContent={quantityValue} aria-label='Go to cart'>
                                        <ShoppingCartOutlined />
                                   </Badge>
                                :
                                <CircularProgress size="2rem" />

                        }
                        </MenuLink>
                    </Link>

                </Left>
                <Center>
                    <Link to={"/"} aria-label='Back to home page'>
                        <Logo1 src={Logo} style={{marginRight:"5px"}} alt={"לוגו"}/>
                    </Link>
                </Center>
                <Right>
                    <MenuLink style={{marginRight:"10px"}} onClick={handleWhatsappClick}>
                        <WhatsApp aria-label='Contact us in whatsapp'/>
                    </MenuLink>
                    <MenuLink>
                        <MenuIcon
                            onClick={toggleNav}
                            className="Burger"
                            aria-label='open navigation bar'
                        />
                    </MenuLink>
                </Right>
            </Wrapper>
            <CSSTransition
                in={isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    {
                        categoryData.map(catItem=>(
                            <Link
                                key={catItem.id}
                                to={
                                '/products/'+catItem.cat}
                                  state={{title: catItem.title}}
                                  style={{textDecoration: 'none'}}
                                  onClick={toggleNav}
                                aria-label={`${catItem.title}`}
                            >
                                {catItem.title}
                            </Link>
                        ))
                    }

                </nav>
            </CSSTransition>
        </Container>
    )
}
