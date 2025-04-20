import React from 'react'
import ContainerForAll from './ContainerForAll'

export default function SeparatorDemo() {
    return (
        <ContainerForAll className='px-4 border border-black'>
            <div className='py-4 space-y-2'>
                <div className='bg-primary h-[2px]'></div>
                <div className='bg-primary w-1/2 h-[2px] mx-auto'></div>
            </div>
        </ContainerForAll>
    )
}

