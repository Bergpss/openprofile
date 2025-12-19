import { Card } from './Card'
import type { SocialCard as SocialCardType } from '../../types'
import {
    Github,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Mail,
    Globe,
    type LucideIcon
} from 'lucide-react'

interface SocialCardProps {
    card: SocialCardType
}

// Platform configurations
const platformConfig: Record<SocialCardType['platform'], {
    icon: LucideIcon
    color: string
    label: string
}> = {
    github: { icon: Github, color: '#333', label: 'GitHub' },
    twitter: { icon: Twitter, color: '#1DA1F2', label: 'Twitter' },
    linkedin: { icon: Linkedin, color: '#0A66C2', label: 'LinkedIn' },
    instagram: { icon: Instagram, color: '#E4405F', label: 'Instagram' },
    youtube: { icon: Youtube, color: '#FF0000', label: 'YouTube' },
    bilibili: { icon: Youtube, color: '#00A1D6', label: 'Bilibili' }, // Using Youtube icon as fallback
    weixin: { icon: Mail, color: '#07C160', label: '微信' }, // Using Mail icon as fallback
    email: { icon: Mail, color: '#EA4335', label: 'Email' },
    website: { icon: Globe, color: '#6366f1', label: 'Website' },
}

export function SocialCard({ card }: SocialCardProps) {
    const config = platformConfig[card.platform]
    const Icon = config.icon

    return (
        <Card
            size={card.size}
            onClick={() => window.open(card.url, '_blank')}
        >
            <div
                className="h-full p-4 flex flex-col items-center justify-center gap-2 transition-colors"
                style={{
                    backgroundColor: `${config.color}15`,
                }}
            >
                <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: config.color }}
                >
                    <Icon className="w-6 h-6 text-white" />
                </div>
                {card.username && (
                    <span className="text-sm text-[var(--text-secondary)] truncate max-w-full px-2">
                        {card.username}
                    </span>
                )}
            </div>
        </Card>
    )
}
