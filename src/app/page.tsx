'use client';

import devan from '../../public/profile.jpeg';
import '../styles/customStyles.css';
import Profile from '@/components/profile/Profile';
import SocialLinks from '@/components/footer/Footer';

export default function Home() {
    return (
        <>
            <section className="py-1">
                <Profile
                    imageSrc={devan}
                    name="Anne Martinez"
                    jobTitle="Software Developer"
                    description="With seven years of working experience, I've built a diverse range of projects with code, teaming up with some truly outstanding groups along the way. My expertise spans across both front-end and back-end domains, especially with C# and React. Yet, despite my experience, my eagerness to learn never wanes—I am always ready to dive into new areas and expand my skill set. Whether it's a stimulating conversation or a fresh challenge, I'm always up for it."
                />
            </section>
        </>
    );
}
