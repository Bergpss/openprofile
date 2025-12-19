import { ReactNode } from 'react'

interface BentoGridProps {
    children: ReactNode
    columns?: number
    gap?: number
}

export function BentoGrid({ children, columns = 4, gap = 16 }: BentoGridProps) {
    return (
        <div
            className="bento-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(120px,1fr)] w-full"
            style={{
                columnGap: `${gap}px`,
                rowGap: `${gap}px`,
                // Safely cast to CSSProperties if needed, but modern React handles it
                ...(columns > 1 ? { '--grid-columns': columns } : {})
            } as any}
        >
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 1024px) {
                  .bento-grid { 
                    grid-template-columns: repeat(${columns}, minmax(0, 1fr)) !important; 
                  }
                }
            `}} />
            {children}
        </div>
    )
}
