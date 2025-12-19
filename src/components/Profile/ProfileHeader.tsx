import { motion } from 'framer-motion'
import type { ProfileConfig } from '../../types'

interface ProfileHeaderProps {
    profile: ProfileConfig
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
    return (
        <motion.header
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {profile.avatar && (
                <motion.div
                    className="mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                >
                    <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="w-28 h-28 rounded-full mx-auto border-4 border-[var(--border-color)] shadow-xl object-cover"
                    />
                </motion.div>
            )}

            <motion.h1
                className="text-4xl font-bold mb-2 text-[var(--text-primary)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {profile.name}
            </motion.h1>

            {profile.title && (
                <motion.p
                    className="text-xl text-[var(--text-secondary)] mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {profile.title}
                </motion.p>
            )}

            {profile.bio && (
                <motion.p
                    className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed whitespace-pre-line"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    {profile.bio}
                </motion.p>
            )}
        </motion.header>
    )
}
