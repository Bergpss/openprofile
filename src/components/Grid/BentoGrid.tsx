import { ReactNode } from 'react'

interface BentoGridProps {
    children: ReactNode
    columns?: number
    gap?: number
}

export function BentoGrid({ children, columns = 4, gap = 16 }: BentoGridProps) {
    return (
        <div
            className="grid auto-rows-[minmax(120px,1fr)]"
            style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                gap: `${gap}px`,
            }}
        >
            {children}
        </div>
    )
}
