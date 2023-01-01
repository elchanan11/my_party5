import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

import Announcment from "../components/Announcment";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function Home(){
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
