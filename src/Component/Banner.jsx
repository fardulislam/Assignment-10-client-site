import React from 'react';
import { SwiperSlide , Swiper } from 'swiper/react';
import { Navigation, Pagination ,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Banner = () => {
    return (
        <div>
           <Swiper  autoplay={true} pagination={true} modules={[Pagination,Autoplay]}>
            <SwiperSlide className='w-full object-cover '>
            <img className='w-full h-120 object-cover overflow-hidden' src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full h-120  object-cover overflow-hidden' src="https://images.unsplash.com/photo-1625231334168-35067f8853ed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full h-120  object-cover overflow-hidden' src="https://images.unsplash.com/photo-1612322079729-4d8e331c2189?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full h-120  object-cover overflow-hidden' src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full h-120  object-cover overflow-hidden' src="https://images.unsplash.com/photo-1522266925358-423ceac13bc9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
            </Swiper> 
        </div>
    );
};

export default Banner;