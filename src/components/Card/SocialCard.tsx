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
                className="h-full p-6 flex flex-col items-center justify-center gap-4 transition-all"
                style={{
                    backgroundColor: `${config.color}08`,
                }}
            >
                <div
                    className="w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:rounded-2xl group-hover:rotate-6 shadow-xl"
                    style={{
                        backgroundColor: config.color,
                        boxShadow: `0 10px 20px -5px ${config.color}60`
                    }}
                >
                    <Icon className="w-8 h-8 text-white" />
                </div>
                {card.username && (
                    <div className="flex flex-col items-center gap-0.5 max-w-full">
                        <span className="text-sm font-bold text-[var(--text-primary)] truncate max-w-full px-2">
                            {config.label}
                        </span>
                        <span className="text-xs text-[var(--text-secondary)] truncate max-w-full px-2 opacity-70">
                            {card.username}
                        </span>
                    </div>
                )}
            </div>
        </Card>
    )
}
