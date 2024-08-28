import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {testmonialdatas} from "./datalist/testmonial";

export default function Testimonials (){
    return (
        <>
            <div className="py-5 container">
                <div className=" py-5 textmonial_container">
                    {/* Start global Title */}
                    <div className="mb-5 pb-3 global_title">
                        <h2 className="text-center">Testimonials from our guardians</h2>
                        <p className="fw-light text-center text-muted">Who are in extremely love with eco friendly system</p>
                    </div>
                    {/* End global title */}

                    {/* testmonial carousel */}
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={50}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            "0": {
                                slidesPerView: 1,
                            },
                            "768": {
                                slidesPerView: 2,
                            },
                            "800": {
                                slidesPerView: 3
                            },
                            "1200" : {
                                slidesPerView: 3
                            }
                        }}
                        // navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            testmonialdatas.map(function(testmonialdata){
                                return (
                                    <SwiperSlide key={testmonialdata.id}>
                                        <div className='border rounded-2 p-5 testmonial_items_container'>
                                            <Link to="/" className="nav-link">
                                                <div className=''>
                                                    <div className="d-flex justify-content-center testmonial_avator">
                                                        <div className='rounded-circle overflow-hidden' style={
                                                            {
                                                                width : "70px",
                                                                height: "70px",
                                                            }
                                                        }>
                                                            <img src={testmonialdata.img} style={
                                                                {
                                                                    width : "100%",
                                                                    height : "100%"
                                                                }
                                                            } alt={testmonialdata.img} />
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="pt-3 text-start text-dark global_caption ">
                                                        <p className="fw-light text-center text-muted">
                                                            {testmonialdata.caption}
                                                        </p>
                                                    </div>
                                                    {/* start global caption */}
                                                    <div className="pt-3 text-center text-dark global_caption ">
                                                        <h4 className="py-1 fw-semibold" style={{
                                                            fontSize: "17px"
                                                        }}>{testmonialdata.name}</h4>
                                                        <p className="fw-light text-center text-muted">
                                                            {testmonialdata.position}
                                                        </p>
                                                    </div>
                                                    {/* end global caption */}
                                                </div>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    {/* end textmonial carousel */}

                </div>
            </div>
        </>
    )
}