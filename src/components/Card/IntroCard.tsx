import { Card } from './Card'
import type { IntroCard as IntroCardType } from '../../types'

interface IntroCardProps {
    card: IntroCardType
}

export function IntroCard({ card }: IntroCardProps) {
    return (
        <Card size={card.size} className="overflow-visible">
            <div className="h-full p-10 flex flex-col justify-center relative">
                {/* Decorative Accent */}
                <div className="absolute top-0 left-10 w-12 h-1.5 bg-gradient-to-r from-[var(--accent-color)] to-purple-500 rounded-b-xl shadow-[0_0_20px_rgba(99,102,241,0.3)]" />

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

                {/* Subtle bottom-right detail */}
                <div className="absolute bottom-6 right-8 opacity-10 select-none pointer-events-none">
                    <span className="text-6xl font-black italic">OP</span>
                </div>
            </div>
        </Card>
    )
}
