import { Card } from './Card'
import type { ImageCard as ImageCardType } from '../../types'

interface ImageCardProps {
    card: ImageCardType
}

export function ImageCard({ card }: ImageCardProps) {
    return (
        <Card size={card.size} className="bg-transparent border-none glass-none shadow-none">
            <img
                src={card.src}
                alt={card.alt || ''}
                className={`w-full h-full object-${card.objectFit || 'cover'} transition-transform duration-700 group-hover:scale-110`}
            />
        </Card>
    )
}
