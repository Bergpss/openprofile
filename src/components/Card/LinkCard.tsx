import { Card } from './Card'
import type { LinkCard as LinkCardType } from '../../types'
import * as Icons from 'lucide-react'
import { ExternalLink } from 'lucide-react'

interface LinkCardProps {
    card: LinkCardType
}

export function LinkCard({ card }: LinkCardProps) {
    // Dynamically get icon from lucide-react
    const iconName = card.icon
        ? card.icon.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
        : 'ExternalLink'

    const IconComponent = (Icons as any)[iconName] || Icons.ExternalLink

    return (
        <Card
            size={card.size}
            onClick={() => window.open(card.url, '_blank')}
        >
            <div
                className="h-full p-6 flex items-center gap-5 transition-colors"
                style={{ backgroundColor: card.color ? `${card.color}10` : undefined }}
            >
                <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                    style={{
                        backgroundColor: card.color || 'var(--accent-color)',
                        boxShadow: card.color ? `0 8px 16px -4px ${card.color}40` : undefined
                    }}
                >
                    <IconComponent className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col flex-1 overflow-hidden">
                    <span className="text-xl font-bold text-[var(--text-primary)] truncate">
                        {card.label}
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] truncate opacity-60">
                        {card.url.replace(/^https?:\/\//, '')}
                    </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-[var(--text-secondary)]" />
                </div>
            </div>
        </Card>
    )
}
