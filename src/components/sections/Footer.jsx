import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse , faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

library.add(faHouse,faPhone,faEnvelope);


export default function Footer(){
    return (
        <>
            <footer className='footer_section py-5'>
                <div className="py-4 footer_section_container container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                            <div>
                                {/* footer header */}
                                <div>
                                    <h3 className="text-white">About Us</h3>
                                </div>
                                {/* footer header */}
                                {/* footer content */}
                                <div>
                                    <p className="">
                                    Few would argue that, despite the advanc ements off eminism over the past three decades, women still face a double standard when it comes to their behavior. While men’s borderline-inappropriate behavior. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                                {/* end footer content */}
                            </div>
                            
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                            <div>
                                {/* footer header */}
                                <div>
                                    <h3 className="text-white">Useful Links</h3>
                                </div>
                                {/* footer header */}
                                {/* footer content */}
                                <div>
                                    <div className="row">
                                        <div className="col-6">
                                            <ul className='list-unstyled'>
                                                <li className="py-2">
                                                    <Link to="/" className="nav-link">Home</Link>
                                                </li>
                                                <li className="py-2">
                                                    <Link to="/" className="nav-link">Service</Link>
                                                </li>
                                                <li className="py-2">
                                                    <Link to="/" className="nav-link">About</Link>
                                                </li>
                                                <li className="py-2">
                                                    <Link to="/" className="nav-link">Case Study</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul className='list-unstyled'>
                                                <li className="py-2">
                                                    <Link to="/" className="nav-link">Pricing</Link>
                                                </li>
                                                <li className="py-2">
                                                    <Link to="/" className="nav-link">Team</Link>
                                                </li>
                                                <li className="py-2">
                                                    <Link to="/" className="nav-link">Blog</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                                {/* end footer content */}
                            </div>
                            
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-2">
                            <div>
                                {/* footer header */}
                                <div>
                                    <h3 className="text-white">Contact Us</h3>
                                </div>
                                {/* footer header */}
                                {/* footer content */}
                                <div>
                                    <ul className='list-unstyled'>
                                        <li className="py-1">
                                            <div className="d-flex align-items-center ">
                                                <div className='me-3'>
                                                    <FontAwesomeIcon style={
                                                        {
                                                            color : "white",
                                                            fontSize: "15px"
                                                        }
                                                    } icon={faHouse} />
                                                </div>
                                                <div>
                                                    <h5 className=' text-white' style={
                                                        {
                                                            fontSize: "15px"
                                                        }
                                                    }
                                                    >Binghamton, New York</h5>
                                                    <span className='' style={
                                                        {
                                                            fontSize: "14px",
                                                            color: "#777777"
                                                        }
                                                    }>4343 Hinkle Deegan Lake Road</span>
                                                </div>
                                                
                                            </div>
                                        </li>
                                        <li className="py-1">
                                            <div className="d-flex align-items-center ">
                                                <div className='me-3'>
                                                    <FontAwesomeIcon style={
                                                        {
                                                            color : "white",
                                                            fontSize: "15px"
                                                        }
                                                    } icon={faPhone} />
                                                </div>
                                                <div>
                                                    <h5 className=' text-white' style={
                                                        {
                                                            fontSize: "15px"
                                                        }
                                                    }
                                                    >Binghamton, New York</h5>
                                                    <span className='' style={
                                                        {
                                                            fontSize: "14px",
                                                            color: "#777777"
                                                        }
                                                    }>4343 Hinkle Deegan Lake Road</span>
                                                </div>
                                                
                                            </div>
                                        </li>
                                        <li className="py-1">
                                            <div className="d-flex align-items-center ">
                                                <div className='me-3'>
                                                    <FontAwesomeIcon style={
                                                        {
                                                            color : "white",
                                                            fontSize: "15px"
                                                        }
                                                    } icon={faEnvelope} />
                                                </div>
                                                <div>
                                                    <h5 className=' text-white' style={
                                                        {
                                                            fontSize: "15px"
                                                        }
                                                    }
                                                    >Binghamton, New York</h5>
                                                    <span className='' style={
                                                        {
                                                            fontSize: "14px",
                                                            color: "#777777"
                                                        }
                                                    }>4343 Hinkle Deegan Lake Road</span>
                                                </div>
                                                
                                            </div>
                                        </li>
                                    </ul>
                                    
                                </div>
                                {/* end footer content */}
                            </div>
                            
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}