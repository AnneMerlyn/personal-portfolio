import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ProjectCarouselProps } from '@/types';

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
    return (
        <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="mx-2 shadow-lg"
        >
            {projects.map((project, index) => (
                <SwiperSlide key={index} className="p-4">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 mx-auto mb-6">
                        <div className="flex-shrink-0 w-full md:w-1/2">
                            <Image
                                src={project.imageSrc}
                                className="rounded"
                                layout="responsive"
                                objectFit="contain"
                                width={1200}
                                height={800}
                                alt={project.name}
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <h5 className="font-semibold text-gray-600 dark:text-gray-300">
                                {project.name}
                            </h5>
                            <p className="text-gray-600 dark:text-gray-300 font-serif">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-2 mt-2">
                                <a
                                    href={project.liveDemoLink}
                                    className="text-pink-500 dark:text-pink-400 hover:underline"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.githubRepoLink}
                                    className="text-pink-500 dark:text-pink-400 hover:underline"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProjectCarousel;
