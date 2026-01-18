import { useState } from 'react';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        setTimeout(() => {
            setIsLoading(false);
            alert('Login functionality would be implemented here!');
        }, 1500);
    };

    return (
        <section id="login" className="login">
            <div className="section-header">
                <span className="prompt">nvem@system:~$</span>
                <span className="command">./login.sh --interactive</span>
            </div>

            <div className="login-content">
                <div className="login-box terminal-window">
                    <div className="login-header">
                        <h2 className="login-title">System Authentication</h2>
                        <p className="login-subtitle">
                            <span className="prompt-symbol">$</span> Enter credentials to access Nvem platform
                        </p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">
                                <span className="label-prompt">user@nvem:~$</span> email
                            </label>
                            <div className="input-wrapper">
                                <span className="input-prefix">&gt;</span>
                                <input
                                    type="email"
                                    className="terminal-input"
                                    placeholder="your.email@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                <span className="label-prompt">user@nvem:~$</span> password
                            </label>
                            <div className="input-wrapper">
                                <span className="input-prefix">&gt;</span>
                                <input
                                    type="password"
                                    className="terminal-input"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-options">
                            <label className="checkbox-label">
                                <input type="checkbox" className="terminal-checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="forgot-link">Forgot password?</a>
                        </div>

                       <button
                            type="submit"
                            className="login-button"
                            disabled={isLoading}
                        >
                            <span className="button-content">
                                {isLoading ? (
                                    <>
                                        <span className="loading-spinner"></span>
                                        Authenticating...
                                    </>
                                ) : (
                                    <>[LOGIN]</>
                                )}
                            </span>
                        </button>

                    </form>

                    <div className="login-footer">
                        <p className="footer-text">
                            Don't have an account? <a href="#" className="signup-link">Create one →</a>
                        </p>
                    </div>

                    <div className="terminal-output">
                        <div className="output-line">
                            <span className="output-prompt">system:</span>
                            <span className="output-text">Waiting for authentication...</span>
                        </div>
                        <div className="output-line">
                            <span className="output-prompt">security:</span>
                            <span className="output-text">SSL/TLS encryption enabled ✓</span>
                        </div>
                        <div className="output-line">
                            <span className="output-prompt">status:</span>
                            <span className="output-text">Ready for login_</span>
                        </div>
                    </div>
                </div>

                <div className="login-info">
                    <div className="info-card">
                        <h3 className="info-title">[Quick Access]</h3>
                        <p className="info-text">
                            Get instant access to our AI-powered analytics, blockchain intelligence,
                            and automated trading systems.
                        </p>
                    </div>

                    <div className="info-card">
                        <h3 className="info-title">[Secure Platform]</h3>
                        <p className="info-text">
                            Bank-grade encryption, 2FA authentication, and continuous security
                            monitoring protect your account.
                        </p>
                    </div>

                    <div className="info-card">
                        <h3 className="info-title">[Real-time Data]</h3>
                        <p className="info-text">
                            Access live blockchain data, market signals, and trading opportunities
                            across 50+ networks.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
