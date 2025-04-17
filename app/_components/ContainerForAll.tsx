import { cn } from '@/lib/utils'
import React from 'react'

type ContainerForAllProps = {
    children: React.ReactNode,
    className: string
}
export default function ContainerForAll({ children, className }: ContainerForAllProps) {
    return (
        <div className={cn('container mx-auto', className)}>
            {children}
        </div>
    )
}
