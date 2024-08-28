
import Navbar from "../Navbar"
import BannerCarousel from "./BannerCarousel"

export default function Banner(){
    return (
        <>
            <div>
                <div className="banner_main_container">
                    <div className="">
                        <Navbar/>
                    </div>
                    <div className="banner_container">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <h1 className=" text-white fw-bold">ADOPT US. WE NEED YOUR HELP</h1>
                                            <p className="text-white fw-medium">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et nostrum hic quia. Beatae quasi cum natus aliquid possimus impedit commodi sequi incidunt, rerum magni iste ipsam dolores saepe in!
                                            </p>
                                            {/* start global btn */}
                                            <a to="#" className="btn btn-primary rounded-0 text-uppercase global_banner_btn">Find a pet to adopt</a>
                                            {/* end global banner btn */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* start owl carousel slider */}
                        
                        
                        
                        {/* end owl carousel slider */}
                    </div>
                </div>
                <div className="banner_slider">
                    <BannerCarousel/>
                </div>
                
            </div>
        </>
    )
}