import { Card } from './Card'
import type { TextCard as TextCardType } from '../../types'

interface TextCardProps {
    card: TextCardType
}

export function TextCard({ card }: TextCardProps) {
    const alignClass = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    }[card.align || 'left']

    return (
        <Card size={card.size}>
            <div className={`h-full p-8 flex flex-col items-center justify-center ${alignClass}`}>
                <span className="text-4xl text-[var(--accent-color)] opacity-20 font-serif mb-2 transition-transform group-hover:scale-125 duration-500">
                    &ldquo;
                </span>
                <p className="text-xl text-[var(--text-primary)] font-semibold leading-relaxed tracking-tight italic">
                    {card.content}
                </p>
                <span className="text-4xl text-[var(--accent-color)] opacity-20 font-serif mt-2 transition-transform group-hover:scale-125 duration-500">
                    &rdquo;
                </span>
            </div>
        </Card>
    )
}
