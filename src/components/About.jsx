

import Banner from "./sections/Banner"
import Footer from "./sections/Footer"
import Invitation from "./sections/Invitation"
import SelectPet from "./sections/SelectPet"
import SubBanner from "./sections/SubBanner"
import Testimonials from "./sections/Testimonials"
import VideoIntro from "./sections/VideoIntro"

export default function About(){
    return (
        <>
            <div>
                <SubBanner page="About Us" route="about"/>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                    <VideoIntro/>
                    </div>
                </div>
                <SelectPet/>
                <Testimonials/>
                <Invitation/>
                <Footer/>
               
            </div>
            
        </>
    )
}