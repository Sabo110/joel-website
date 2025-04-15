import React from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

type RealizationCardProps = {
    img: StaticImport
    alt: string
}
export default function RealizationCard({ img, alt }: RealizationCardProps) {
    return (
        <div className="cursor-pointer">
            <Image
                src={img}
                alt={alt}
                placeholder='blur'
            />
        </div>
    )
}
