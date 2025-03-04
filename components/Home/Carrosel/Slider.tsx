'use client'

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Pagination, Navigation } from 'swiper/modules';

// 🔹 Definição do tipo para as imagens
type ImageType = {
    src: string;
    alt?: string;
};

// 🔹 Tipagem das `props` do componente
interface SwiperProps {
    images: ImageType[];
    slidesPerView?: number;
    spaceBetween?: number;
}

const SwiperComponent: React.FC<SwiperProps> = ({ images}) => {
    return (
        <Swiper
            autoplay={{
                delay:2500,
                disableOnInteraction: false
                
            }}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="w-full"
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3, spaceBetween: 50 },
            }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={image.src}
                        alt={image.alt || 'Imagem'}
                        width={700}
                        height={700}
                        className="w-full h-auto"
                        
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperComponent;
