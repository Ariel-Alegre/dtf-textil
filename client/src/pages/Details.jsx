import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

  import React from 'react';
import DetailsData from "../components/DetailsData/DetailsData";

export default function Details() {
    return  (
        <div>
            <Navbar/>
        <div>
     <DetailsData/>
        </div>
        <Footer/>

        </div>
    )
}