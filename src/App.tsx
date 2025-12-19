import { useEffect, useState } from 'react'
import yaml from 'js-yaml'
import type { ProfileConfig, CardConfig } from './types'
import { BentoGrid } from './components/Grid'
import { ProfileHeader } from './components/Profile'
import {
    IntroCard,
    LinkCard,
    ImageCard,
    SocialCard,
    TextCard
} from './components/Card'

// Import the YAML file as raw text
import profileYaml from './data/profile.yaml?raw'

// Render a card based on its type
function renderCard(card: CardConfig) {
    switch (card.type) {
        case 'intro':
            return <IntroCard key={card.id} card={card} />
        case 'link':
            return <LinkCard key={card.id} card={card} />
        case 'image':
            return <ImageCard key={card.id} card={card} />
        case 'social':
            return <SocialCard key={card.id} card={card} />
        case 'text':
            return <TextCard key={card.id} card={card} />
        default:
            return null
    }
}

function App() {
    const [profile, setProfile] = useState<ProfileConfig | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        try {
            // Parse YAML configuration
            const config = yaml.load(profileYaml) as ProfileConfig
            setProfile(config)

            // Apply theme
            document.documentElement.setAttribute('data-theme', config.theme)

            // Apply accent color
            if (config.accentColor) {
                document.documentElement.style.setProperty('--accent-color', config.accentColor)
            }
        } catch (err) {
            setError(`配置文件解析错误: ${err}`)
        }
    }, [])

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8">
                <div className="text-red-500 text-center">
                    <h2 className="text-2xl font-bold mb-4">加载错误</h2>
                    <p>{error}</p>
                </div>
            </div>
        )
    }

    if (!profile) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-[var(--accent-color)] border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center py-16 overflow-x-hidden">
            {/* Main Wrapper with responsive padding and max-width */}
            <div className="w-full max-w-6xl px-6 sm:px-12 lg:px-16 flex flex-col items-center">
                <div className="w-full flex flex-col items-center">
                    <ProfileHeader profile={profile} />
                </div>

                <div className="w-full">
                    <BentoGrid
                        columns={profile.layout?.columns || 4}
                        gap={profile.layout?.gap || 24}
                    >
                        {profile.cards.map(renderCard)}
                    </BentoGrid>
                </div>

                {/* Footer */}
                <footer className="mt-24 pb-12 text-center text-sm">
                    <p className="text-[var(--text-secondary)] font-medium">
                        &copy; {new Date().getFullYear()} {profile.name}.
                        <span className="mx-2 opacity-30">|</span>
                        Powered by{' '}
                        <a
                            href="https://github.com/username/openprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--accent-color)] hover:underline decoration-2 underline-offset-4"
                        >
                            OpenProfile
                        </a>
                    </p>
                </footer>
            </div>
        </div>
    )
}

export default App
