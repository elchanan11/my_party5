import React, {useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

import Announcment from "../components/Announcment";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";
import {Fab} from "@mui/material";
import {WhatsApp} from "@mui/icons-material";
import BgImage from "../components/BgImage";
import Newsletter from "../components/NewsLetter";

export default function Home(){
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
            <Navbar home={"home"}/>
            {/*<Slider />*/}
            <BgImage />
            <Categories  />
            <Products cat={"Reccomanded"} from={'home'}/>
            <Newsletter />
            <Footer />
            <Fab size="large" color="secondary" aria-label="add"  style={{background:"green",cursor:"pointer",zIndex:100, position:"fixed",bottom: 40,right:10}}>
                <WhatsApp style={{width:"70%",height:"70%"}} onClick={()=>{
                    let postMessageToWatapp = "שלום אני מהאתר"
                        let url = `https://wa.me/+972539323849?text=${postMessageToWatapp}`;

                    window.open(url);}} />
            </Fab>

        </div>
    )
}
