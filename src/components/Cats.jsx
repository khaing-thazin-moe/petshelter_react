

import Banner from "./sections/Banner"
import Gallery from "./sections/Gallery"
import Footer from "./sections/Footer"
import Invitation from "./sections/Invitation"
import SelectPet from "./sections/SelectPet"
import SubBanner from "./sections/SubBanner"
import Testimonials from "./sections/Testimonials"
import VideoIntro from "./sections/VideoIntro"
import { cats } from "./sections/datalist/cats"

export default function Cats(){
    return (
        <>
            <div>
                <SubBanner page="Cats" route="cats"/>
                <Gallery datas={cats}/>
                <Invitation/>
                <Footer/>
               
            </div>
            
        </>
    )
}