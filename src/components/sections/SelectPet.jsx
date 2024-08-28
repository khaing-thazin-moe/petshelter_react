


import VideoIntro from './VideoIntro';

import bannerImg from "./../../assets/imgs/banners/about-img.jpg.webp";

export default function SelectPet(){
    return (
        <>
            <section>
                {/* start select box */}
                <div className="container">
                    <div className="p-4 d-flex justify-content-between select_pet_container" >
                        <h1>Please Select your Favourite Pet</h1>
                        <a to="#" className="p-3  btn btn-md rounded-0 text-uppercase global_secondary_btn">Fill Adoption Form</a>
                    </div>
                </div>
                {/* end select box */}

                {/* start select box banner */}
                <div className="mt-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-3">
                            <img src={bannerImg} style={
                                {
                                    width: "100%",
                                    height: "auto"
                                }
                            } alt="girl and dog" />
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12 mb-3">
                            <div className="h-100 row">
                                <div className="h-100 col-lg-6 col-md-10 col-sm-12">
                                    <div className="h-100 d-flex align-items-center">
                                        {/* global content */}
                                        <div>
                                            <h1 className="fw-bold">Globally Connected by Large Network</h1>
                                            <span className="d-block py-3 text-dark">We are here to listen from you deliver exellence</span>
                                            <p className="text-muted fw-light">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                                            </p>
                                            <a to="#" className="p-3 px-4  btn btn-md rounded-0 text-uppercase global_secondary_btn">Get Details</a>
                                        </div>
                                        {/* end global content */}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* end select box banner */}
            </section>
        </> 
    )
}