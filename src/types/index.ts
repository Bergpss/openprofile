// Profile configuration types

export type CardSize = '1x1' | '2x1' | '1x2' | '2x2' | '3x1' | '3x2'

export type CardType = 'intro' | 'link' | 'image' | 'social' | 'text'

export interface BaseCard {
    id: string
    type: CardType
    size: CardSize
}

export interface IntroCard extends BaseCard {
    type: 'intro'
    title?: string
    content: string
}

export interface LinkCard extends BaseCard {
    type: 'link'
    icon?: string
    label: string
    url: string
    color?: string
}

export interface ImageCard extends BaseCard {
    type: 'image'
    src: string
    alt?: string
    objectFit?: 'cover' | 'contain'
}

export interface SocialCard extends BaseCard {
    type: 'social'
    platform: 'github' | 'twitter' | 'linkedin' | 'instagram' | 'youtube' | 'bilibili' | 'weixin' | 'email' | 'website'
    url: string
    username?: string
}

export interface TextCard extends BaseCard {
    type: 'text'
    content: string
    align?: 'left' | 'center' | 'right'
}

export type CardConfig = IntroCard | LinkCard | ImageCard | SocialCard | TextCard

export interface ProfileConfig {
    name: string
    title?: string
    avatar?: string
    bio?: string
    theme: 'dark' | 'light'
    accentColor?: string
    cards: CardConfig[]
    layout?: {
        columns?: number
        gap?: number
    }
}
