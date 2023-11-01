import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Project {
    name: string;
    description: string;
    imageSrc: StaticImageData;
    technologies: string[];
    liveDemoLink: string;
    githubRepoLink: string;
}

interface ProjectCarouselProps {
    projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
    return (
        <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper mx-2 border-2 border-pink-500 dark:border-pink-400 shadow-lg"
        >
            {projects.map((project, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <div className="md:w-1/2">
                            <Image
                                src={project.imageSrc}
                                layout="responsive"
                                objectFit="contain"
                                width={1000} // Adjust width as needed
                                height={700} // Adjust height as needed
                                alt={project.name}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h5 className="font-semibold text-gray-600 dark:text-gray-300">
                                {project.name}
                            </h5>
                            <p className="text-gray-600 dark:text-gray-300 font-serif">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap space-x-2 mt-2">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex space-x-2 mt-2">
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
