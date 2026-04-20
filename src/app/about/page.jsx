import React from 'react';

import img1 from '../../assets/images/481103343_1150483499816817_2367426850314952881_n.jpg'
import img2 from '../../assets/images/481257694_1150483123150188_7332268907990699582_n.jpg'
import Image from 'next/image';


export const metadata = {
    title: 'About',
    description: '...',
}

const AboutSection = () => {
    return (
        <div>
            <h1>This is about section</h1>
            <div>
                <Image width="400" height="300" src={img1} alt='vai'></Image> <br />
                <Image width="400" height="300" src={img2} alt='vai'></Image> <br />
                <Image width="400" height="300" src="https://i.ibb.co.com/tM9q4PCL/sakkkkkib.jpg" alt='bikolpo'></Image>
                <Image width="400" height="300" src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww" alt='quran'></Image>
            </div>
        </div>
    );
};

export default AboutSection;