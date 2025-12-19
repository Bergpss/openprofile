import { Card } from './Card'
import type { LinkCard as LinkCardType } from '../../types'
import * as Icons from 'lucide-react'
import { ExternalLink } from 'lucide-react'

interface LinkCardProps {
    card: LinkCardType
}

export function LinkCard({ card }: LinkCardProps) {
    // Dynamically get icon from lucide-react
    const IconComponent = card.icon
        ? (Icons as Record<string, React.ComponentType<{ className?: string }>>)[
        card.icon.split('-').map((s, i) =>
            i === 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s.charAt(0).toUpperCase() + s.slice(1)
        ).join('')
        ] || ExternalLink
        : ExternalLink

    return (
        <Card
            size={card.size}
            onClick={() => window.open(card.url, '_blank')}
        >
            <div
                className="h-full p-5 flex items-center gap-4"
                style={{ backgroundColor: card.color ? `${card.color}15` : undefined }}
            >
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: card.color || 'var(--accent-color)' }}
                >
                    <IconComponent className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg font-medium text-[var(--text-primary)] flex-1">
                    {card.label}
                </span>
                <ExternalLink className="w-5 h-5 text-[var(--text-secondary)]" />
            </div>
        </Card>
    )
}
