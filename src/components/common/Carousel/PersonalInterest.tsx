import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { PersonalInterestProps } from '@/types';

const PersonalInterest: React.FC<PersonalInterestProps> = ({
    personalInterests,
}) => {
    return (
        <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 2,
                },
            }}
        >
            {personalInterests.map((interest, index) => (
                <SwiperSlide
                    key={index}
                    className="rounded overflow-hidden shadow-lg"
                >
                    <div className="mb-4">
                        <div className="relative h-48 w-full">
                            <Image
                                src={interest.imageSrc}
                                className="rounded-t"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="bottom" // You can adjust this to 'top', 'bottom', 'center', etc., as needed
                                alt={interest.title}
                            />
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4">
                            <h5 className="font-semibold text-gray-600 dark:text-gray-300">
                                {interest.title}
                            </h5>
                            <p className="text-gray-600 dark:text-gray-300 font-serif">
                                {interest.description}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PersonalInterest;
