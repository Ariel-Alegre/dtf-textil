import BgViewOferta from "../components/BgViewOferta/BgViewOferta";
import BgViewPrice from "../components/BgViewPrice/BgViewPrice";
import Category from "../components/Category/Category";
import DtfFast from "../components/DtfFast/DtfFast";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import WhyUs from "../components/WhyUs/WhyUs";


export default function Home() {
    return (
        <div>
            <Navbar/>
            <div>
                <Category/>
                </div>
                <div>

                <BgViewPrice/>
                </div>
                <div>
                    <BgViewOferta/>
                </div>
                <div>
                    <WhyUs/>
                </div>
                <div>
                    <DtfFast/>
                </div>
                <div>
                    <Footer/>
                </div>
        </div>
    )
}