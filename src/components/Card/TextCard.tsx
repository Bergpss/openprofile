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
            <div className={`h-full p-6 flex items-center justify-center ${alignClass}`}>
                <p className="text-lg text-[var(--text-secondary)] italic leading-relaxed">
                    "{card.content}"
                </p>
            </div>
        </Card>
    )
}
