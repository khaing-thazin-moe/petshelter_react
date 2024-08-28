
import {BrowserRouter, Routes , Route} from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import Cats from "./components/Cats";
import Dog from "./components/Dogs";
import Volunteer from "./components/Volunteer";
import Contact from "./components/Contact";

export default function App(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>}  />
                    <Route path="/cats" element={<Cats/>}  />
                    <Route path="/dogs" element={<Dog/>}  />
                    <Route path="/volunteer" element={<Volunteer/>}  />
                    <Route path="/contact" element={<Contact/>}  />
                </Routes>
            </BrowserRouter>
            
        </>
    )
}