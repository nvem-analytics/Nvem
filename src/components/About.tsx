import './About.css';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="section-header">
                <span className="prompt">nvem@system:~$</span>
                <span className="command">cat about.txt</span>
            </div>

            <div className="about-content terminal-window">
                <div className="about-grid">
                    <div className="about-block">
                        <h3 className="block-title">
                            <span className="title-bracket">[</span>AI-Powered Analysis<span className="title-bracket">]</span>
                        </h3>
                        <p className="block-text">
                            Leverage cutting-edge artificial intelligence to analyze complex data patterns,
                            predict market trends, and make informed decisions in real-time. Our advanced
                            machine learning models process millions of data points per second.
                        </p>
                        <div className="tech-tags">
                            <span className="tag">Neural Networks</span>
                            <span className="tag">Deep Learning</span>
                            <span className="tag">Predictive Analytics</span>
                        </div>
                    </div>

                    <div className="about-block">
                        <h3 className="block-title">
                            <span className="title-bracket">[</span>Blockchain Intelligence<span className="title-bracket">]</span>
                        </h3>
                        <p className="block-text">
                            Monitor and analyze blockchain transactions across multiple networks. Track
                            wallet activities, identify patterns, and gain insights into cryptocurrency
                            movements with our comprehensive blockchain intelligence platform.
                        </p>
                        <div className="tech-tags">
                            <span className="tag">Multi-Chain Support</span>
                            <span className="tag">Real-Time Tracking</span>
                            <span className="tag">Smart Contracts</span>
                        </div>
                    </div>

                    <div className="about-block">
                        <h3 className="block-title">
                            <span className="title-bracket">[</span>Automated Trading<span className="title-bracket">]</span>
                        </h3>
                        <p className="block-text">
                            Execute trades automatically based on predefined strategies and AI-driven
                            signals. Our trading bots operate 24/7, ensuring you never miss an opportunity
                            while managing risk with sophisticated algorithms.
                        </p>
                        <div className="tech-tags">
                            <span className="tag">Strategy Builder</span>
                            <span className="tag">Risk Management</span>
                            <span className="tag">Backtesting</span>
                        </div>
                    </div>

                </div>

                <div className="stats-section">
                    <div className="stat-item">
                        <div className="stat-value">99.9%</div>
                        <div className="stat-label">Uptime</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">1M+</div>
                        <div className="stat-label">Transactions/Day</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">&lt;10ms</div>
                        <div className="stat-label">Latency</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">50+</div>
                        <div className="stat-label">Blockchains</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
