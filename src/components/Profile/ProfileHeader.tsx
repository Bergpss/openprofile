import { motion } from 'framer-motion'
import type { ProfileConfig } from '../../types'

interface ProfileHeaderProps {
    profile: ProfileConfig
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
    return (
        <motion.header
            className="flex flex-col items-center text-center mb-16 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {profile.avatar && (
                <motion.div
                    className="relative mb-8 p-1 rounded-full bg-gradient-to-br from-[var(--accent-color)] to-purple-500 shadow-2xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                    <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="w-32 h-32 rounded-full border-4 border-[var(--bg-primary)] object-cover bg-[var(--bg-card)]"
                    />
                </motion.div>
            )}

            <motion.h1
                className="text-5xl font-black mb-4 tracking-tight text-[var(--text-primary)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                {profile.name}
            </motion.h1>

            {profile.title && (
                <motion.p
                    className="text-lg font-medium tracking-wide uppercase text-[var(--accent-color)] mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    {profile.title}
                </motion.p>
            )}

            {profile.bio && (
                <motion.p
                    className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    {profile.bio}
                </motion.p>
            )}
        </motion.header>
    )
}
