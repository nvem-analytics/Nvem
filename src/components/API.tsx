import './API.css';

export default function API() {
    return (
        <section id="api" className="api">
            <div className="section-header">
                <span className="prompt">nvem@system:~$</span>
                <span className="command">curl -X GET https://api.nvem.io/v1/status</span>
            </div>

            <div className="api-content terminal-window">
                <div className="api-intro">
                    <h2 className="api-title">RESTful API Access</h2>
                    <p className="api-description">
                        Access our powerful blockchain intelligence and trading platform through our comprehensive API.
                        Built for developers, designed for scale.
                    </p>
                </div>

                <div className="api-grid">
                    <div className="api-card">
                        <div className="card-header">
                            <span className="method get">GET</span>
                            <span className="endpoint">/v1/chains</span>
                        </div>
                        <p className="card-desc">List all supported blockchain networks</p>
                        <div className="response-preview">
                            <div className="response-header">Response 200</div>
                            <pre className="response-body">
                                {`{
  "chains": [
    "ethereum",
    "polygon",
    "bsc",
    "avalanche"
  ],
  "count": 50
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="api-card">
                        <div className="card-header">
                            <span className="method post">POST</span>
                            <span className="endpoint">/v1/analyze</span>
                        </div>
                        <p className="card-desc">Analyze wallet or contract address</p>
                        <div className="response-preview">
                            <div className="response-header">Request Body</div>
                            <pre className="response-body">
                                {`{
  "address": "0x...",
  "chain": "ethereum",
  "metrics": ["balance"]
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="api-card">
                        <div className="card-header">
                            <span className="method get">GET</span>
                            <span className="endpoint">/v1/trading/signals</span>
                        </div>
                        <p className="card-desc">Get AI-generated trading signals</p>
                        <div className="response-preview">
                            <div className="response-header">Response 200</div>
                            <pre className="response-body">
                                {`{
  "signals": [{
    "pair": "BTC/USDT",
    "action": "buy",
    "confidence": 0.87
  }]
}`}
                            </pre>
                        </div>
                    </div>

                    <div className="api-card">
                        <div className="card-header">
                            <span className="method post">POST</span>
                            <span className="endpoint">/v1/trading/execute</span>
                        </div>
                        <p className="card-desc">Execute automated trading strategy</p>
                        <div className="response-preview">
                            <div className="response-header">Request Body</div>
                            <pre className="response-body">
                                {`{
  "strategy": "momentum",
  "pair": "ETH/USDT",
  "amount": 1000
}`}
                            </pre>
                        </div>
                    </div>
                </div>

                <div className="api-features">
                    <div className="feature-item">
                        <div className="feature-icon">[SPEED]</div>
                        <div className="feature-content">
                            <h3 className="feature-title">Low Latency</h3>
                            <p className="feature-desc">Sub-10ms response times for critical operations</p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <div className="feature-icon">[SECURE]</div>
                        <div className="feature-content">
                            <h3 className="feature-title">Secure</h3>
                            <p className="feature-desc">API keys, OAuth2, and rate limiting built-in</p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <div className="feature-icon">[LIVE]</div>
                        <div className="feature-content">
                            <h3 className="feature-title">Real-time Data</h3>
                            <p className="feature-desc">WebSocket support for live blockchain events</p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <div className="feature-icon">[MULTI]</div>
                        <div className="feature-content">
                            <h3 className="feature-title">Multi-Chain</h3>
                            <p className="feature-desc">50+ blockchain networks in one API</p>
                        </div>
                    </div>
                </div>

                <div className="api-cta">
                    <h3 className="cta-title">Ready to get started?</h3>
                    <p className="cta-desc">Get your API key and start building in minutes</p>
                    <button className="terminal-button" onClick={() => document.getElementById('login')?.scrollIntoView({ behavior: 'smooth' })}>
                        Get API Key →
                    </button>
                </div>
            </div>
        </section>
    );
}
