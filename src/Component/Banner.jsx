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
            <img className='w-full h-120 object-cover overflow-hidden' src="https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full h-120  object-cover overflow-hidden' src="https://plus.unsplash.com/premium_photo-1736949344059-3c0c3a2d0edc?q=80&w=1114&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='w-full h-120  object-cover overflow-hidden' src="https://images.unsplash.com/photo-1612322079729-4d8e331c2189?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
            </Swiper> 
        </div>
    );
};

export default Banner;