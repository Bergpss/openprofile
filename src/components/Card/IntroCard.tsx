import { Card } from './Card'
import type { IntroCard as IntroCardType } from '../../types'

interface IntroCardProps {
    card: IntroCardType
}

export function IntroCard({ card }: IntroCardProps) {
    return (
        <Card size={card.size}>
            <div className="h-full p-10 flex flex-col justify-center">
                {card.title && (
                    <h2 className="text-4xl font-black mb-6 tracking-tight text-[var(--text-primary)] leading-tight">
                        {card.title}
                    </h2>
                )}

                <div className="space-y-4">
                    <p className="text-[var(--text-secondary)] text-xl leading-relaxed whitespace-pre-line font-medium opacity-90">
                        {card.content}
                    </p>
                </div>
            </div>
        </Card>
    )
}
