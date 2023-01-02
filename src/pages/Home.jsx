import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

import Announcment from "../components/Announcment";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function Home(){
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    return(
        <div>
            <Announcment />
            <Navbar home={"home"}/>
            <Slider />
            <Categories />
            <Products cat={"Reccomanded"}/>
            <Footer />
        </div>
    )
}
