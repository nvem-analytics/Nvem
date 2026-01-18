import './Hero.css';

export default function Hero() {
    const asciiArt = ` ___       __   _______   ___       ________  ________  _____ ______   _______   ___       
|\\  \\     |\\  \\|\\  ___ \\ |\\  \\     |\\   ____\\|\\   __  \\|\\   _ \\  _   \\|\\  ___ \\ |\\  \\      
\\ \\  \\    \\ \\  \\ \\   __/|\\ \\  \\    \\ \\  \\___|\\ \\  \\|\\  \\ \\  \\\\\\__\\ \\  \\ \\   __/|\\ \\  \\     
 \\ \\  \\  __\\ \\  \\ \\  \\_|/_\\ \\  \\    \\ \\  \\    \\ \\  \\\\\\  \\ \\  \\\\|__| \\  \\ \\  \\_|/_\\ \\  \\    
  \\ \\  \\|\\__\\_\\  \\ \\  \\_|\\ \\ \\  \\____\\ \\  \\____\\ \\  \\\\\\  \\ \\  \\    \\ \\  \\ \\  \\_|\\ \\ \\__\\   
   \\ \\____________\\ \\_______\\ \\_______\\ \\_______\\ \\_______\\ \\__\\    \\ \\__\\ \\_______\\|__|   
    \\|____________|\\|_______|\\|_______|\\|_______|\\|_______|\\|__|     \\|__|\\|_______|   ___ 
                                                                                      |\\__|
                  ████████╗ ██████╗     ███╗   ██╗██╗   ██╗███████╗███╗   ███╗             \\|__|
╚══██╔══╝██╔═══██╗    ████╗  ██║██║   ██║██╔════╝████╗ ████║
   ██║   ██║   ██║    ██╔██╗ ██║██║   ██║█████╗  ██╔████╔██║
   ██║   ██║   ██║    ██║╚██╗██║╚██╗ ██╔╝██╔══╝  ██║╚██╔╝██║
   ██║   ╚██████╔╝    ██║ ╚████║ ╚████╔╝ ███████╗██║ ╚═╝ ██║
   ╚═╝    ╚═════╝     ╚═╝  ╚═══╝  ╚═══╝  ╚══════╝╚═╝     ╚═╝`;

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <pre className="ascii-art">{asciiArt}</pre>

                <div className="hero-tagline">
                    AI-Powered Blockchain Intelligence
                </div>

                <div className="hero-description">
                    <p className="feature-line">Advanced Data Analysis</p>
                    <p className="feature-line">Multi-Chain Intelligence</p>
                    <p className="feature-line">Automated Trading Systems</p>
                </div>

                <div className="hero-actions">
                    <button className="hero-button primary" onClick={() => document.getElementById('docs')?.scrollIntoView({ behavior: 'smooth' })}>
                        Explore Platform
                    </button>
                    <button className="terminal-button secondary" onClick={() => document.getElementById('api')?.scrollIntoView({ behavior: 'smooth' })}>
                        API Access
                    </button>
                </div>

                <div className="scroll-indicator">
                    <span className="scroll-text">Scroll</span>
                    <div className="scroll-arrow">↓</div>
                </div>
            </div>
        </section>
    );
}
