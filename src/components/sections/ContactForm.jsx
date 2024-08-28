// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse , faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';

// library.add(faHouse,faPhone,faEnvelope);

export default function ContactForm(){
    return (
        <>
            <div className="py-5 container">
                <div className="map_container">
                    <div style={
                        {
                            width: "100%",
                            height: "auto"
                        }
                    }>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14432.335473657356!2d55.3468524!3d25.267764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cf2e91122af%3A0xe7c03619a9faae85!2sCanadian%20Specialist%20Hospital!5e0!3m2!1sen!2sae!4v1716065997421!5m2!1sen!2sae" width="100%" height="450" style={
                            {
                                border: "0"
                            }
                        } allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
                <div className="pt-5 contact_form">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-3">
                            <div className="d-flex gap-2 align-items-center">
                                <FontAwesomeIcon icon={faHouse} style={
                                    {
                                        color : "#fab700"
                                    }
                                } />
                                <div className='ms-2'>
                                    <h5 style={
                                        {
                                            fontSize :"16px",
                                            lineHeight : "1",
                                            color : "#777777"
                                        }
                                    }>
                                        Binghamton, New York
                                    </h5>
                                    <span className="text-muted" style={
                                        {
                                            fontSize: "14px"
                                        }
                                    }>
                                        4343 Hinkle Deegan Lake Road
                                    </span>
                                </div>
                            </div>
                            <div className="my-3 gap-2 d-flex align-items-center">
                                <FontAwesomeIcon icon={faPhone} style={
                                    {
                                        color : "#fab700"
                                    }
                                }/>
                                <div className='ms-2'>
                                    <h5 style={
                                        {
                                            fontSize :"16px",
                                            lineHeight : "1",
                                            color : "#777777"
                                        }
                                    }>
                                        
                                        00 (953) 9865 562
                                    </h5>
                                    <span className="text-muted" style={
                                        {
                                            fontSize: "14px"
                                        }
                                    }>
                                        Mon to Fri 9am to 6 pm
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                                <FontAwesomeIcon icon={faEnvelope} style={
                                    {
                                        color : "#fab700"
                                    }
                                }/>
                                <div className='ms-2'>
                                    <h5 style={
                                        {
                                            fontSize :"16px",
                                            lineHeight : "1",
                                            color : "#777777"
                                        }
                                    }>
                                        support@colorlib.com
                                    </h5>
                                    <span className="text-muted" style={
                                        {
                                            fontSize: "14px"
                                        }
                                    }>
                                        Send us your query anytime!
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 mb-3">
                            <form action="" className='contact_form'>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className=" form-group">
                                            <input type="text" name='name' className="form-control form-control-lg rounded-0 border outline-none shadow-none" placeholder='Enter your name' />
                                        </div>
                                        <div className="my-3 form-group">
                                            <input type="email" name='email' className="form-control form-control-lg rounded-0 border outline-none shadow-none" placeholder='Enter email address' />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name='subject' className="form-control form-control-lg rounded-0 border outline-none shadow-none" placeholder='Enter your subject' />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="h-100 form-group">
                                            <textarea name="message" id="message" className="h-100 form-control rounded-0 outline-none shadow-none" placeholder='Message'></textarea>
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-end">
                                        <a to="#" className="p-2 px-4  btn btn-md rounded-3 text-uppercase global_secondary_btn">Send Message</a>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}