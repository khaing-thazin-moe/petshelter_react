
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/imgs/logos/logo.png.webp';
import { useState } from 'react';


export default function Navbar(){

    let [scrollActive, setScrollActive] = useState(false);

    window.addEventListener("scroll",function(){
        let getScrollAmount = this.window.scrollY;
        // console.log(getScrollAmount);
        if(getScrollAmount > 100) {
            setScrollActive(true);
        }else{
            setScrollActive(false);
        }
        // console.log(scrollActive);
    })

    return(
        <>
            <header className={scrollActive ? "active" : ""}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link to="/">
                            <img src={logo} alt="hello" />
                        </Link>
                        <button className='navbar-toggler border-0 outline-none shadow-none' data-bs-target="#mynav" data-bs-toggle="collapse">
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                        <div id="mynav" className='collapse navbar-collapse justify-content-end'>
                            <ul className="navbar-nav text-uppercase">
                                <li className="nav-item">
                                    <NavLink to="/" className={`nav-link ${function(isActive){
                                        return isActive ? "active" : "" ;
                                    }}`}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className={`nav-link ${function(isActive){
                                        return isActive ? "active" : "" ;
                                    }}`}>About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/cats" className={`nav-link ${function(isActive){
                                        return isActive ? "active" : "" ;
                                    }}`}>Cats</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/dogs" className={`nav-link ${function(isActive){
                                        return isActive ? "active" : "" ;
                                    }}`}>Dogs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/volunteer" className={`nav-link ${function(isActive){
                                        return isActive ? "active" : "" ;
                                    }}`}>Volunteer</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className={`nav-link ${function(isActive){
                                        return isActive ? "active" : "" ;
                                    }}`}>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </header>
            
        </>
    )
}