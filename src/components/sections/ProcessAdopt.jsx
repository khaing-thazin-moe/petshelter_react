

import { Link } from "react-router-dom";
import { process } from "./datalist/process";

export default function ProcessAdopt(){
    return (
        <>
            <div className="py-5 process_section">
                <div className="py-5 container ">
                    {/* Start global Title */}
                    <div className="mb-5 pb-3 global_title">
                        <h2 className="text-center">Process to adopt a pet</h2>
                        <p className="fw-light text-center text-muted">Who are in extremely love with eco friendly system</p>
                    </div>
                    {/* End global title */}

                    {/* start process content container */}
                    <div>
                        <div className="row">
                            {
                                process.map(function(data){
                                    return (
                                        <div key={data.id} className="col-lg-3 col-md-6 col-sm-12">
                                        <Link href="" className="nav-link content_main_container">
                                                <div className="content_container">
                                                
                                                    <div className="process_icons" style={
                                                        {
                                                            width: "40px",
                                                            height: "40px"
                                                        }
                                                    }>
                                                        <img src={data.img} alt="" style={
                                                            {
                                                                width : "100%",
                                                                height: "100%",
                                                                objectFit: "cover"
                                                                
                                                            }
                                                        }/>
                                                    </div>
                                                    {/* start global caption */}
                                                    <div className="pt-3 text-start text-dark global_caption ">
                                                        <h4 className="py-3 fw-semibold" style={{
                                                            fontSize: "17px"
                                                        }}>{data.title}</h4>
                                                        <p className="fw-light text-start text-muted">
                                                            {data.caption}
                                                        </p>
                                                    </div>
                                                    {/* end global caption */}
                                                
                
                
                                                
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        
                        </div>
                    </div>
                    {/* end process content container */}
                </div>
            </div>
            
        </>
    )
}