import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

import Announcment from "../components/Announcment";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";
import {Fab} from "@mui/material";
import {WhatsApp} from "@mui/icons-material";
import BgImage from "../components/BgImage";

export default function Home(){
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    return(
        <div>
            <Announcment />
            <Navbar home={"home"}/>
            {/*<Slider />*/}
            <BgImage />
            <Categories  />
            <Products cat={"Reccomanded"} from={'home'}/>
            <Footer />
            <Fab size="large" color="secondary" aria-label="add"  style={{background:"green",cursor:"pointer",zIndex:100, position:"sticky",bottom: 10,left:10}}>
                <WhatsApp style={{width:"70%",height:"70%"}} onClick={()=>{
                    let postMessageToWatapp = "שלום אני מהאתר"
                        let url = `https://wa.me/+972539323849?text=${postMessageToWatapp}`;

                    window.open(url);}} />
            </Fab>

        </div>
    )
}
