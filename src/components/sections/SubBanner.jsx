
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../Navbar";

export default function SubBanner({page,route}){
    return (
        <>
            <section className="banner_main_container" style={
                {
                    padding : "170px 0px"
                }
            }>
                <Navbar/>
                <div className="sub_banner_section">
                    <div className="text-center">
                        <h1 className="mb-3 text-white">{page}</h1>
                        <div className="text-white d-flex justify-content-center align-items-center gap-3">
                            <Link to="/" className="nav-link"> Home </Link> 
                            <FontAwesomeIcon icon={faArrowRight} />
                            <Link to={`/${route}`} className="nav-link">{page}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}