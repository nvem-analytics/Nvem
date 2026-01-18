import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'docs', 'api', 'login'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-brand">
                    <span className="brand-prompt">guest@nvem:~$</span>
                    <span className="brand-cursor">_</span>
                </div>

                <div className="navbar-links">
                    <button
                        className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                        onClick={() => scrollToSection('home')}
                    >
                        <span className="link-prompt">~/</span>home
                    </button>
                    <button
                        className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                        onClick={() => scrollToSection('about')}
                    >
                        <span className="link-prompt">~/</span>about
                    </button>
                    <button
                        className={`nav-link ${activeSection === 'docs' ? 'active' : ''}`}
                        onClick={() => scrollToSection('docs')}
                    >
                        <span className="link-prompt">~/</span>docs
                    </button>
                    <button
                        className={`nav-link ${activeSection === 'api' ? 'active' : ''}`}
                        onClick={() => scrollToSection('api')}
                    >
                        <span className="link-prompt">~/</span>api
                    </button>
                    <button
                        className={`nav-link ${activeSection === 'login' ? 'active' : ''}`}
                        onClick={() => scrollToSection('login')}
                    >
                        <span className="link-prompt">~/</span>login.sh
                    </button>
                </div>
            </div>
        </nav>
    );
}
