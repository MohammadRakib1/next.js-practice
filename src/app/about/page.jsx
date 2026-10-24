import Image from 'next/image';
import React from 'react';
export const metadata = {
    title: 'about',
    description: 'About',
}

const Aboutpage = () => {
    return (
        <div>
            <h2>This about page</h2>
            <Image width='400' height='300' src='https://images.unsplash.com/photo-1792340177561-84a7e1711f00' alt='rakib'></Image>
            <Image width='400' height='300' src='/rakib.png' alt='rakib'></Image>
        </div>
    );
};

export default Aboutpage;