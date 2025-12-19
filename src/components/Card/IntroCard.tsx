import { Card } from './Card'
import type { IntroCard as IntroCardType } from '../../types'

interface IntroCardProps {
    card: IntroCardType
}

export function IntroCard({ card }: IntroCardProps) {
    return (
        <Card size={card.size}>
            <div className="h-full p-6 flex flex-col justify-center">
                {card.title && (
                    <h2 className="text-2xl font-bold mb-3 text-[var(--text-primary)]">
                        {card.title}
                    </h2>
                )}
                <p className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                    {card.content}
                </p>
            </div>
        </Card>
    )
}
