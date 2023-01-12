
import React, {useEffect,useState} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import Products from "../components/Products";
import Footer from "../components/Footer";
import {mobile} from "../responsive";
import {useLocation, useNavigate} from "react-router-dom";
import {WhatsApp} from "@mui/icons-material";
import {Autocomplete, Fab, TextField} from "@mui/material";

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
  padding-left: 10px;
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
  background-color: #fae8e8;
  width: 90px;
  height: 40px;
  border: 1px solid #b5b3b3;
`
const Option = styled.option`
  
`

export default function ProductList(){
    const location = useLocation()
    const cat = location.pathname.split('/')[2]
    const categoryTitle = location.state.title
    const [sort,setSort] = useState("newest")
    const [serchFilter,setSearchFilter] = useState("")

    const navigate = useNavigate();

    const [query,setQuery] = useState("")
    const [products,setProducts] = useState([])

    const handleSort = (e) =>{
        setSort(e.target.value)
    }

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
                    <Select onChange={handleSort}>
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
                </Filter>

                {/*{<Autocomplete*/}
                {/*    options={products}*/}
                {/*    getOptionLabel={(option) => option.title} renderInput={(params) =>*/}
                {/*        <TextField*/}
                {/*            {...params}*/}
                {/*            label="חפש"*/}
                {/*            size="small"*/}
                {/*            variant="outlined"*/}
                {/*            onChange={(e)=>{setQuery(e.target.value)}}*/}
                {/*            style={{padding:0,height:2,width:"70px",margin:0,zIndex:0,marginBottom:"40px",marginRight:"4px"}}*/}
                {/*        />*/}
                {/*    }*/}
                {/*    isOptionEqualToValue={(option, value) => option.id === value.id}*/}
                {/*    //onChange={(event:any,newVal:string)=>setQuery(newVal)}*/}
                {/*    sx={{ width: 100,padding:0 }}*/}

                {/*/>}*/}
            </FilterContainer>
            <Products cat={cat} sort={sort} />
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
