
import Banner from "./sections/Banner"
import Footer from "./sections/Footer"
import Invitation from "./sections/Invitation"
import SelectPet from "./sections/SelectPet"
import SubBanner from "./sections/SubBanner"
import Testimonials from "./sections/Testimonials"
import VideoIntro from "./sections/VideoIntro"
import VolunteerForm from "./sections/VolunteerForm"

export default function Volunteer(){
    return (
        <>
            <div>
                <SubBanner page="Become a Volunteer" route="Become a Volunteer"/>
                <VolunteerForm/>
                <Invitation/>
                <Footer/>
               
            </div>
            
        </>
    )
}