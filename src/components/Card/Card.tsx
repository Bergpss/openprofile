import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import type { CardSize } from '../../types'

interface CardProps {
    children: ReactNode
    size: CardSize
    className?: string
    onClick?: () => void
}

// Map card sizes to grid spans
const sizeClasses: Record<CardSize, string> = {
    '1x1': 'col-span-1 row-span-1',
    '2x1': 'col-span-2 row-span-1',
    '1x2': 'col-span-1 row-span-2',
    '2x2': 'col-span-2 row-span-2',
    '3x1': 'col-span-3 row-span-1',
    '3x2': 'col-span-3 row-span-2',
}

// Aspect ratios for different sizes
const aspectClasses: Record<CardSize, string> = {
    '1x1': 'aspect-square',
    '2x1': 'aspect-[2/1]',
    '1x2': 'aspect-[1/2]',
    '2x2': 'aspect-square',
    '3x1': 'aspect-[3/1]',
    '3x2': 'aspect-[3/2]',
}

export function Card({ children, size, className = '', onClick }: CardProps) {
    return (
        <motion.div
            className={`
        ${sizeClasses[size]}
        ${aspectClasses[size]}
        bg-[var(--bg-card)]
        border border-[var(--border-color)]
        rounded-[var(--card-radius)]
        overflow-hidden
        cursor-pointer
        ${className}
      `}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            onClick={onClick}
        >
            {children}
        </motion.div>
    )
}
