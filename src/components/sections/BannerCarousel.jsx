import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import picture1 from "./../../assets/imgs/gallery/c1.jpg.webp";
import picture2 from "./../../assets/imgs/gallery/c2.jpg.webp";
import picture3 from "./../../assets/imgs/gallery/c3.jpg.webp";
import picture4 from "./../../assets/imgs/gallery/c4.jpg.webp";

export default function BannerCarousel(){
    return (
        <>
            <div className=''>
                <div className='container'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
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
                                slidesPerView: 4
                            }
                        }}
                        // navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <div className='slider_img '>
                                    <img src={picture1}
                                    style={{
                                        objectFit:"cover",
                                        width:"100%",
                                        height:"100%"
                                    }}
                                    alt="dog1" />
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div>
                                <div className='slider_img '>
                                    <img src={picture2}
                                        style={{
                                            objectFit:"cover",
                                            width:"100%",
                                            height:"100%"
                                        }}
                                        alt="dog1" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='slider_img '>
                                    <img src={picture1}
                                    style={{
                                        objectFit:"cover",
                                        width:"100%",
                                        height:"100%"
                                    }}
                                    alt="dog1" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='slider_img '>
                                    <img src={picture3}
                                        style={{
                                            objectFit:"cover",
                                            width:"100%",
                                            height:"100%"
                                        }}
                                        alt="dog1" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className='slider_img '>
                                    <img src={picture4}
                                        style={{
                                            objectFit:"cover",
                                            width:"100%",
                                            height:"100%"
                                        }}
                                        alt="dog1" />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}