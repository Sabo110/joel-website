'use client'

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from '@/lib/utils';



type SlideProps = {
    children: React.ReactNode
    size?: string
    placeholder?: string
}
export default function Slide({ children, size, placeholder = 'slide' }: SlideProps) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    return (
        <div className=' relative'>
            <Carousel className="w-full " setApi={setApi}>
                <CarouselContent>
                    {
                        React.Children.map(children, (child, index) => (
                            <CarouselItem key={index} className={cn(size)}>
                                {child}
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <div className="mt-4 text-center text-sm text-muted-foreground">
                    {placeholder} {current} sur {count}
                </div>
                <div className=' relative mt-10'>
                    <CarouselPrevious className='left-1/4' />
                    <CarouselNext className='right-1/4' />
                </div>
            </Carousel>

        </div>

    )
}
