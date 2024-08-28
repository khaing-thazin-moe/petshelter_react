

export default function VolunteerForm(){


    return (
        <>
            <div className="py-5 container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        {/* Start global Title */}
                        <div className="mb-5 pb-3 global_title">
                            <h2 className="text-center">Want to help? Become a Volunteer</h2>
                            <p className="fw-light text-center text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                        {/* End global title */}

                        {/* vlolunteer form */}
                        <form action="" className="volunteer_form">
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="firstname" className="mb-2 text-dark fw-semibold">First Name</label>
                                        <input type="text" name="firstname" id="firstname" className="form-control rounded-1 outline-none shadow-none firstname" placeholder="First Name"/>
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="lastname" className="mb-2 text-dark fw-semibold">Last Name</label>
                                        <input type="text" name="lastname" id="lastname" className="form-control rounded-1 outline-none shadow-none lastname" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="address" className="mb-2 text-dark fw-semibold">Address</label>
                                        <input type="text" name="address" id="address" className="mb-2 form-control rounded-1 outline-none shadow-none address" placeholder="Your Address"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="address" id="address" className="form-control rounded-1 outline-none shadow-none address" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                    <label htmlFor="city" className="mb-2 text-dark fw-semibold">City</label>
                                        <select name="city" id="city" className="form-control rounded-1 outline-none shadow-none city">
                                            <option value="" disabled selected>Select City</option>
                                            <option value="bgo">Bago</option>
                                            <option value="ygn">Yangon</option>
                                            <option value="mdy">Mandalay</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                    <label htmlFor="state" className="mb-2 text-dark fw-semibold">State</label>
                                        <select name="state" defaultValue="null" id="state" className="form-control rounded-1 outline-none shadow-none state">
                                            <option value="null" disabled >State</option>
                                            <option value="bgo">Bago</option>
                                            <option value="ygn">Yangon</option>
                                            <option value="mdy">Mandalay</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                    <label htmlFor="country" className="mb-2 text-dark fw-semibold">Country</label>
                                        <select name="country" defaultValue="null" id="country" className="form-control rounded-1 outline-none shadow-none country">
                                            <option value="null" disabled >Country</option>
                                            <option value="bgo">Country</option>
                                            <option value="ygn">Yangon</option>
                                            <option value="mdy">Mandalay</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="postcode" className="mb-2 text-dark fw-semibold">Postal Code</label>
                                        <input type="text" name="postcode" id="postcode" className="mb-2 form-control rounded-1 outline-none shadow-none postcode" placeholder="Postal Code"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="email" className="mb-2 text-dark fw-semibold">Email Address</label>
                                        <input type="text" name="email" id="email" className="mb-2 form-control rounded-1 outline-none shadow-none email" placeholder="Email Address"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="email" className="mb-2 text-dark fw-semibold">Phone Number</label>
                                        <input type="text" name="phone" id="phone" className="mb-2 form-control rounded-1 outline-none shadow-none phone" placeholder="Phone number"/>
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-3">
                                    <div className="form-group">
                                    <label htmlFor="country" className="mb-2 text-dark fw-semibold">Which days you can be volunteer</label>
                                        <div className="">

                                            <input type="checkbox" name="days[]" id="mon" value="mon" className="me-2 form-check-input shadow-none outline-none"/>
                                            <label htmlFor="mon" className="me-2">Monday</label>

                                            <input type="checkbox" name="days[]" id="tue" value="mon" className="me-2 form-check-input shadow-none outline-none"/>
                                            <label htmlFor="tue" className="me-2">Tuesday</label>

                                            <input type="checkbox" name="days[]" id="wed" value="mon" className="me-2 form-check-input shadow-none outline-none"/>
                                            <label htmlFor="wed" className="me-2">Wednesday</label>

                                            <input type="checkbox" name="days[]" id="tur" value="mon" className="me-2 form-check-input shadow-none outline-none"/>
                                            <label htmlFor="tur" className="me-2">Thursday</label>
                                            
                                            <input type="checkbox" name="days[]" id="fri" value="mon" className="me-2 form-check-input shadow-none outline-none"/>
                                            <label htmlFor="fri" className="me-2">Friday</label>

                                            <input type="checkbox" name="days[]" id="sat" value="mon" className="me-2 form-check-input shadow-none outline-none"/>
                                            <label htmlFor="sat" className="me-2">Saturday</label>

                                            <input type="checkbox" name="days[]" id="sun" value="mon" className="me-2 form-check-input shadow-none outline-none"/>
                                            <label htmlFor="sun" className="me-2">Sunday</label>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-sm-12 mb-3">
                                    <div className="form-group">
                                        <label htmlFor="message" className="mb-2 text-dark fw-semibold">Volunteer Note</label>
                                        <textarea name="message" id="message" rows="6" className="mb-2 form-control rounded-1 outline-none shadow-none resize-none message" placeholder="Write Message"></textarea>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <a to="#" className="p-3 px-4 btn btn-md rounded-0 text-uppercase global_secondary_btn">Send Request</a>
                                </div>
                            </div>
                            
                        </form>
                        {/* end volunteer form */}
                    </div>  
                </div>
                

            </div>
        </>
    )
}

