import { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
    const [typedText, setTypedText] = useState('');
    const fullText = 'AI-Powered Blockchain Intelligence';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 80);

        return () => clearInterval(timer);
    }, []);

    // Generate random particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: 3 + Math.random() * 4
    }));

    const asciiArt = `███╗   ██╗██╗   ██╗███████╗███╗   ███╗
████╗  ██║██║   ██║██╔════╝████╗ ████║
██╔██╗ ██║██║   ██║█████╗  ██╔████╔██║
██║╚██╗██║╚██╗ ██╔╝██╔══╝  ██║╚██╔╝██║
██║ ╚████║ ╚████╔╝ ███████╗██║ ╚═╝ ██║
╚═╝  ╚═══╝  ╚═══╝  ╚══════╝╚═╝     ╚═╝`;

    return (
        <section id="home" className="hero">
            {/* Animated Background Particles */}
            <div className="particles-container">
                {particles.map(particle => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            left: `${particle.left}%`,
                            animationDelay: `${particle.animationDelay}s`,
                            animationDuration: `${particle.animationDuration}s`
                        }}
                    />
                ))}
            </div>

            {/* Gradient Orbs */}
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>

            <div className="hero-content">
                {/* Main ASCII Logo */}
                <div className="logo-container">
                    <pre className="ascii-art">{asciiArt}</pre>
                    <div className="logo-glow"></div>
                </div>

                {/* Typing Animation Tagline */}
                <div className="hero-tagline">
                    <span className="typed-text">{typedText}</span>
                    <span className="cursor">|</span>
                </div>

                {/* Stats Cards */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-value">99.9%</div>
                        <div className="stat-label">Uptime</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">&lt;50ms</div>
                        <div className="stat-label">Response Time</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-value">24/7</div>
                        <div className="stat-label">Support</div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="hero-actions">
                    <button
                        className="hero-button primary"
                        onClick={() => document.getElementById('docs')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="button-text">Start Exploring</span>
                        <span className="button-icon">→</span>
                    </button>
                    <button
                        className="hero-button secondary"
                        onClick={() => document.getElementById('api')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="button-text">View API Docs</span>
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <div className="scroll-mouse">
                        <div className="scroll-wheel"></div>
                    </div>
                    <span className="scroll-text">Scroll to explore</span>
                </div>
            </div>
        </section>
    );
}
