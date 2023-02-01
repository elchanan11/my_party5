import React, {useEffect} from "react";
import Announcment from "../components/Announcment";
import Navbar from "../components/Navbar";
import BgImage from "../components/BgImage";
import MainCategories from "../components/MainCategories";
import Products from "../components/Products";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";
import {Fab} from "@mui/material";
import {WhatsApp} from "@mui/icons-material";
import Categories from "../components/Categories";
import {useLocation} from "react-router-dom";

export default function SubCategory(){

    const location = useLocation()
    const subCategory = location.pathname.split('/')[2]
    console.log(subCategory)

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    },[])

    return(
        <div >
            <Announcment />
            <Navbar home={"SubCategory"}/>
            <Categories  />
            <Products cat={"Reccomanded"} from={'home'}/>
            <Newsletter />
            <Footer />
            <Fab size="large" color="secondary" aria-label="add"  style={{background:"white",color:"green",cursor:"pointer",zIndex:100, position:"fixed",bottom: 40,right:10}}>
                <WhatsApp style={{width:"70%",height:"70%"}} onClick={()=>{
                    let postMessageToWatapp = "שלום אני מהאתר"
                    let url = `https://wa.me/+972539323849?text=${postMessageToWatapp}`;

                    window.open(url);}} />
            </Fab>
        </div>
    )
}
