import React, {useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import {Clear, Search, ShoppingCartOutlined, WhatsApp} from "@mui/icons-material";
import {Autocomplete, Badge, CircularProgress, Menu, TextField} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../images/logo-text.png'
import {leptop, mobile} from "../responsive";
import {useDispatch, useSelector} from "react-redux";
import {Link, Redirect, useHistory} from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './newsLetter.css'

import {publicRequest} from "../requestMethods";
import './navBar.css'
import {deleteProducts} from "../redux/cartRedux";
import {logOut} from "../redux/userRedux";
import {CSSTransition} from "react-transition-group";
import {categoryData, mainCategories} from "../data";
import SearchReasult from "./SearchReasult";
import {Offcanvas} from "react-bootstrap";

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({flex:1,alignItems:"left"})}
`;

const Center = styled.div`
  flex: 1;
  max-width: 200px;
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
  ${leptop({justifyContent:"flex-end"})}
  ${mobile({flex:1,alignItems:"right"})}
`;

const MenuLink = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-right: 7px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  ${mobile({fontsize: '12px',marginRight:"0px" })}
`


const WhatsappLink = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 7px;
  padding-right: 0;
  padding-top: 0;
  background-color: #fff;
  justify-content: space-between;
  cursor: pointer;
  margin-right: 7px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  ${mobile({fontsize: '22px',marginRight:"0px" })}
`

const ReasultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const OffCanvasBodyContainer = styled.div`
  direction: rtl;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryList = styled.ul`
  direction: rtl;
  list-style: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  direction: rtl;
  margin: 10px 0;
  text-align: center;
`;

const CategoryLink = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const OffCanvasLogo = styled.img`
  direction: rtl;
  max-height: 100px;
  max-width: 200px;
  font-weight: bold;
  color: blue;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  bottom: 0;
  right: 0;
  //text-decoration: underline;
  font-family: 'Noto Serif Hebrew', serif;
  ${mobile({height: '40px'})}
`;


export default function Navbar(props){
    // const navigate = useNavigate();

    const quantity = useSelector(state=>state.cart.quantity)
    const [quantityValue,setQuanValue] = useState(quantity)
    const [loding,setLoading] = useState(false)
    let postMessageToWatapp = "שלום אני מהאתר "
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [badgeAnimation,setBadgeAnimation] = useState("medium")
    const [isSearchFieldOpen, setIsSearchFiledOpen] = useState(false)
    const [isSearchResult, setIsSearchResult] = useState(false)
    const [textSearch,setTextSearch] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);


    useEffect(() => {
        const makeAnimation = () =>{
            // setQuanValue(quantity)
            // setLoading(true)
            // console.log(loding)
            // setTimeout (()=>{
            //     setLoading(false)
            // },1500)
            setQuanValue(quantity)
            setLoading(true)
            setBadgeAnimation("large")
            console.log(loding)
            setTimeout (()=>{
                setBadgeAnimation("medium")
                setLoading(false)
            },1500)

        }
        if (quantityValue !== quantity){
            makeAnimation()
        }
    }
    , [quantity]);


    /////////////////////////////////for Drop down menu/////////////////////////


        useEffect(() => {
            const mediaQuery = window.matchMedia("(max-width: 700px)");
            mediaQuery.addListener(handleMediaQueryChange);
            handleMediaQueryChange(mediaQuery);

            return () => {
                mediaQuery.removeListener(handleMediaQueryChange);
            };
        }, []);

        useEffect(()=>{
          console.log("reloaded")
        },[])

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

    const handleSearchClicked = (e) => {
        if (isSearchFieldOpen){
            setIsSearchFiledOpen(!isSearchFieldOpen)
            setIsSearchResult(false)
            setTextSearch("")
        }else {
            setIsSearchFiledOpen(!isSearchFieldOpen)
            // window.scrollTo({
            //     top: 0,
            //     left: 0,
            //     behavior: "smooth"
            // });
        }
    }

    const handleSearchChanged = (e) => {
        setTextSearch(e.target.value)
        if (e.target.value.length > 1){
            setIsSearchResult(true)
        }else {
            setIsSearchResult(false)
        }
    }
    return(
        <Container
             style={{position:"sticky"}}
        >
            <Wrapper>
                {
                    isSearchFieldOpen ?
                    <ReasultContainer>
                        <input onChange={handleSearchChanged}
                                   placeholder={"חפש מוצרים"}
                                   style={{
                                       backgroundColor:"white",
                                       height:"50px",

                                       border:"none",




                                       direction:"rtl"
                                       ,textAlign:"right",
                                       marginRight : "3 px",
                                       alignItems:"center",
                                       display:"flex",
                                       fontSize:"20px"
                                    }}
                        />
                        {
                            isSearchResult &&
                            <SearchReasult serchText={textSearch}/>
                        }
                        <Clear
                            onClick={handleSearchClicked}
                            fontSize={"large"}
                            style={{cursor:"pointer",position:"absolute",top:16}}
                        />
                    </ReasultContainer> :
                        <>
                            <Left>
                                <Link to={"/cart"}>
                                    <MenuLink style={{marginLeft:"20px"}}>
                                        {
                                            // !loding ?
                                            <Badge style={{marginRight:4}} color="primary" badgeContent={quantityValue} aria-label='Go to cart'>
                                                <ShoppingCartOutlined fontSize={badgeAnimation} />
                                            </Badge>
                                            // :
                                            // <CircularProgress size="2rem" />

                                        }
                                    </MenuLink>
                                </Link>
                                <WhatsappLink
                                    onClick={handleWhatsappClick}
                                >
                                    <WhatsApp fontSize={"large"} style={{color:"green"}} aria-label={'whatsapp link'} />
                                </WhatsappLink>
                            </Left>
                            <Center>
                                <Link to={"/"} aria-label='Back to home page'>
                                    <Logo1 src={Logo} style={{marginRight:"5px"}} alt={"לוגו"}/>
                                </Link>
                            </Center>
                            <Right>
                                <MenuLink style={{marginLeft:"10px",justifyContent:"flex-end"}} onClick={handleSearchClicked}>
                                    {
                                        // !isSearchFieldOpen ?
                                            <Search />
                                        // :
                                            // <Clear />
                                    }

                                </MenuLink>

                                <MenuLink>
                                    <MenuIcon
                                        onClick={toggleShow}
                                        className="Burger"
                                        aria-label='open navigation bar'
                                    />
                                </MenuLink>
                            </Right>
                        </>
                }
            </Wrapper>
            {/*<CSSTransition*/}
            {/*    in={isNavVisible}*/}
            {/*    timeout={350}*/}
            {/*    classNames="NavAnimation"*/}
            {/*    unmountOnExit*/}
            {/*>*/}
            {/*    <nav className="Nav">*/}
            {/*        {*/}
            {/*            mainCategories.map(catItem=>(*/}
            {/*                <Link*/}
            {/*                    key={catItem.id}*/}
            {/*                    to={*/}
            {/*                        '/subCategory/'+catItem.cat}*/}
            {/*                      state={{title: catItem.title}}*/}
            {/*                      style={{textDecoration: 'none'}}*/}
            {/*                      onClick={toggleNav}*/}
            {/*                    aria-label={`${catItem.title}`}*/}
            {/*                >*/}
            {/*                    {catItem.title}*/}
            {/*                </Link>*/}
            {/*            ))*/}
            {/*        }*/}

            {/*    </nav>*/}
            {/*</CSSTransition>*/}

            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <OffCanvasBodyContainer>

                        </OffCanvasBodyContainer>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <OffCanvasBodyContainer>
                        <CategoryList>
                            <Link to={"/"} aria-label='Back to home page'>
                                <OffCanvasLogo src={Logo} style={{marginRight:"5px"}} alt={"לוגו"}/>
                            </Link>
                            {
                                mainCategories.map(catItem=>(
                                    <CategoryItem key={catItem.id}>
                                        <Link
                                            to={
                                            '/subCategory/'+catItem.cat}
                                            state={{title: catItem.title}}
                                            style={{textDecoration: 'none'}}
                                            onClick={toggleShow}
                                            aria-label={`${catItem.title}`}
                                        >
                                            <CategoryLink
                                            >
                                                {
                                                    catItem.title
                                                }
                                            </CategoryLink>
                                        </Link>
                                    </CategoryItem>
                                ))
                            }
                        </CategoryList>
                    </OffCanvasBodyContainer>
                </Offcanvas.Body>
            </Offcanvas>
            {/* {*/}
            {/*    isSearchFieldOpen &&*/}
            {/*    <ReasultContainer>*/}
            {/*        <TextField onChange={handleSearchChanged}*/}
            {/*                   fullWidth label="חפש מוצר"*/}
            {/*                   id="fullWidth"*/}
            {/*                   style={{backgroundColor:"whitesmoke",direction:"rtl",textAlign:"right"}}*/}
            {/*        />*/}
            {/*        {*/}
            {/*            isSearchResult &&*/}
            {/*            <SearchReasult serchText={textSearch}/>*/}
            {/*        }*/}
            {/*    </ReasultContainer>*/}
            {/*}*/}
        </Container>
    )
}
