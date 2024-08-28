



import ContactForm from "./sections/ContactForm"
import Footer from "./sections/Footer"
import SubBanner from "./sections/SubBanner"

export default function Contact(){

    return (
        <>
            <SubBanner  page="Contact" route="contact"/>
            <ContactForm/>
            <Footer/>
        </>
    )
}