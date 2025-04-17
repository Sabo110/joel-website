import React from 'react'
import Image from 'next/image'
import img from '@/public/about-f.png';

export default function AboutSectionLeft() {
    return (
        <div className="lg:w-1/2 flex sm:justify-center lg:justify-end">
            <Image
                src={img}
                placeholder="blur"
                alt="Image de la section à propos de Charming Makeup"
                className=""
            />
        </div>
    )
}
