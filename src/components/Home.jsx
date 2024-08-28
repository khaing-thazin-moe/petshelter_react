
import Banner from "./sections/Banner";
import SelectPet from "./sections/SelectPet";
import ProcessAdopt from "./sections/ProcessAdopt";
import Testimonials from "./sections/Testimonials";
import Invitation from "./sections/Invitation";
import Footer from "./sections/Footer";
import SubBanner from "./sections/SubBanner";
import VideoIntro from "./sections/VideoIntro";

export default function Home(){
    return (
        <>
            <Banner/>
            <SelectPet/>
            <div className='py-5 container'>
                <VideoIntro/>
            </div>
            <ProcessAdopt/>
            <Testimonials/>
            <Invitation/>
            <Footer/>
        </>
    )
}