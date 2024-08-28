
import Banner from "./sections/Banner";
import Footer from "./sections/Footer";
import Invitation from "./sections/Invitation";
import SelectPet from "./sections/SelectPet";
import SubBanner from "./sections/SubBanner";
import Testimonials from "./sections/Testimonials";
import VideoIntro from "./sections/VideoIntro";
import Gallery from "./sections/Gallery";
import {dogs} from "./sections/datalist/dogs";

export default function Dogs(){
    return (
        <>
            <div>
                <SubBanner page="Dogs" route="dogs"/>
                <Gallery datas = {dogs} />
                <Invitation/>
                <Footer/>
               
            </div>
            
        </>
    )
}