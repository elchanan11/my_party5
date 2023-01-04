
import React, {useEffect,useState} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import Products from "../components/Products";
import Footer from "../components/Footer";
import {mobile} from "../responsive";
import {useLocation} from "react-router-dom";
import {WhatsApp} from "@mui/icons-material";
import {Fab} from "@mui/material";

const Container = styled.div`
  background-color: #fae8e8;
`
const Title = styled.h1`
  margin: 5px;
  right: 0;
  text-align: center;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 5px 20px;
  display: flex;
  ${mobile({margin: '2px 20px'})}

`
const FilterText = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin-left: 10px;
`
const Select = styled.select`
  
`
const Option = styled.option`
  
`

export default function ProductList(){
    const location = useLocation()
    const cat = location.pathname.split('/')[2]
    const categoryTitle = location.state.title
    const [sort,setSort] = useState("newest")
    const [serchFilter,setSearchFilter] = useState("")

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    },[])

    return(
        <Container>
            <Announcment />
            <Navbar />
            <Title>
                {categoryTitle}
            </Title>
            <FilterContainer>
                <Filter>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value={'newest'}>
                            חדש ביותר
                        </Option>
                        <Option value={'asc'}>
                           מהנמוך לגבוה
                        </Option >
                        <Option value={'desc'}>
                            מהגבוה לנמוך
                        </Option>
                    </Select>
                    <FilterText>
                        מחיר
                    </FilterText>
                </Filter>
            </FilterContainer>
            <Products cat={cat} sort={sort}/>
            <Footer />
            <Fab size="large" color="secondary" aria-label="add"  style={{background:"green",cursor:"pointer",zIndex:100, position:"fixed",bottom: 10,left:10}}>
                <WhatsApp style={{width:"70%",height:"70%"}} onClick={()=>{
                    let postMessageToWatapp = "שלום אני מהאתר"
                    let url = `https://wa.me/+972539323849?text=${postMessageToWatapp}`;

                    window.open(url);}} />
            </Fab>
        </Container>
    )
}
