
import background from "./../../assets/imgs/backgrounds/banner-bg.jpg.webp";


export default function Invitation(){
    return (
        <>
            <div className="invitation_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 col-sm-12">
                            <div className="invitation_caption">
                                <h1 className="text-white text-center">
                                    Want to help? Become a Volunteer
                                </h1>
                                <p className="py-2 text-white text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                                </p>
                                <div className="d-flex justify-content-center gap-4">
                                    {/* start global btn */}
                                    <a to="#" className="btn rounded-0 text-uppercase global_banner_btn">View PDF details</a>
                                    <a to="#" className="btn rounded-0 text-uppercase global_banner_btn">Register Now</a>
                                    {/* end global banner btn */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}