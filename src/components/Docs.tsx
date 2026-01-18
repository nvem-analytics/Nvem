import { useState } from 'react';
import './Docs.css';

export default function Docs() {
    const [activeTab, setActiveTab] = useState('quickstart');

    return (
        <section id="docs" className="docs">
            <div className="section-header">
                <span className="prompt">nvem@system:~$</span>
                <span className="command">ls -la ./documentation/</span>
            </div>

            <div className="docs-content terminal-window">
                <div className="docs-tabs">
                    <button
                        className={`tab ${activeTab === 'quickstart' ? 'active' : ''}`}
                        onClick={() => setActiveTab('quickstart')}
                    >
                        <span className="tab-icon">&gt;</span> Quick Start
                    </button>
                    <button
                        className={`tab ${activeTab === 'guides' ? 'active' : ''}`}
                        onClick={() => setActiveTab('guides')}
                    >
                        <span className="tab-icon">&gt;</span> Guides
                    </button>
                    <button
                        className={`tab ${activeTab === 'examples' ? 'active' : ''}`}
                        onClick={() => setActiveTab('examples')}
                    >
                        <span className="tab-icon">&gt;</span> Examples
                    </button>
                </div>

                <div className="docs-body">
                    {activeTab === 'quickstart' && (
                        <div className="doc-section">
                            <h2 className="doc-title">Getting Started with Nvem</h2>

                            <div className="doc-step">
                                <h3 className="step-title">
                                    <span className="step-number">1.</span> Installation
                                </h3>
                                <div className="code-block">
                                    <div className="code-header">
                                        <span className="code-lang">bash</span>
                                        <button className="copy-btn">Copy</button>
                                    </div>
                                    <pre className="code-content">
                                        {`npm install @nvem/sdk
# or
pip install nvem-python`}
                                    </pre>
                                </div>
                            </div>

                            <div className="doc-step">
                                <h3 className="step-title">
                                    <span className="step-number">2.</span> Authentication
                                </h3>
                                <div className="code-block">
                                    <div className="code-header">
                                        <span className="code-lang">javascript</span>
                                        <button className="copy-btn">Copy</button>
                                    </div>
                                    <pre className="code-content">
                                        {`import { NvemClient } from '@nvem/sdk';

const client = new NvemClient({
  apiKey: 'your_api_key_here',
  environment: 'production'
});`}
                                    </pre>
                                </div>
                            </div>

                            <div className="doc-step">
                                <h3 className="step-title">
                                    <span className="step-number">3.</span> Make Your First Request
                                </h3>
                                <div className="code-block">
                                    <div className="code-header">
                                        <span className="code-lang">javascript</span>
                                        <button className="copy-btn">Copy</button>
                                    </div>
                                    <pre className="code-content">
                                        {`const analysis = await client.analyze({
  chain: 'ethereum',
  address: '0x...',
  metrics: ['balance', 'transactions', 'tokens']
});

console.log(analysis);`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'guides' && (
                        <div className="doc-section">
                            <h2 className="doc-title">Comprehensive Guides</h2>

                            <div className="guide-list">
                                <div className="guide-item">
                                    <h3 className="guide-title">[Data Analysis]</h3>
                                    <p className="guide-desc">Learn how to analyze blockchain data and extract meaningful insights.</p>
                                    <a href="#" className="guide-link">Read Guide →</a>
                                </div>

                                <div className="guide-item">
                                    <h3 className="guide-title">[Trading Bots]</h3>
                                    <p className="guide-desc">Set up and configure automated trading strategies.</p>
                                    <a href="#" className="guide-link">Read Guide →</a>
                                </div>

                                <div className="guide-item">
                                    <h3 className="guide-title">[Security Best Practices]</h3>
                                    <p className="guide-desc">Implement security measures to protect your assets.</p>
                                    <a href="#" className="guide-link">Read Guide →</a>
                                </div>

                                <div className="guide-item">
                                    <h3 className="guide-title">[Performance Optimization]</h3>
                                    <p className="guide-desc">Optimize your queries and reduce latency.</p>
                                    <a href="#" className="guide-link">Read Guide →</a>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'examples' && (
                        <div className="doc-section">
                            <h2 className="doc-title">Code Examples</h2>

                            <div className="example-item">
                                <h3 className="example-title">Monitor Wallet Activity</h3>
                                <div className="code-block">
                                    <div className="code-header">
                                        <span className="code-lang">typescript</span>
                                        <button className="copy-btn">Copy</button>
                                    </div>
                                    <pre className="code-content">
                                        {`const monitor = client.createMonitor({
  address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
  chains: ['ethereum', 'polygon'],
  events: ['transfer', 'swap']
});

monitor.on('transaction', (tx) => {
  console.log('New transaction:', tx);
});`}
                                    </pre>
                                </div>
                            </div>

                            <div className="example-item">
                                <h3 className="example-title">Execute Trading Strategy</h3>
                                <div className="code-block">
                                    <div className="code-header">
                                        <span className="code-lang">python</span>
                                        <button className="copy-btn">Copy</button>
                                    </div>
                                    <pre className="code-content">
                                        {`from nvem import TradingBot

bot = TradingBot(
    strategy='momentum',
    risk_level='medium',
    max_position_size=1000
)

bot.start()
bot.monitor()`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
