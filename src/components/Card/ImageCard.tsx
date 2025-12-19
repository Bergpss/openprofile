import { Card } from './Card'
import type { ImageCard as ImageCardType } from '../../types'

interface ImageCardProps {
    card: ImageCardType
}

export function ImageCard({ card }: ImageCardProps) {
    return (
        <Card size={card.size}>
            <img
                src={card.src}
                alt={card.alt || ''}
                className={`w-full h-full object-${card.objectFit || 'cover'}`}
            />
        </Card>
    )
}
