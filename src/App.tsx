import './App.css';
import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Docs from './components/Docs';
import API from './components/API';
import Login from './components/Login';

function App() {
  return (
    <div className="app">
      <Starfield />
      <div className="content">
        <Navbar />
        <Hero />
        <About />
        <Docs />
        <API />
        <Login />

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">Nvem</h3>
              <p className="footer-desc">
                AI-powered blockchain intelligence and automated trading systems
              </p>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Platform</h4>
              <ul className="footer-links">
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#api">API Reference</a></li>
                <li><a href="#login">Login</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              <span className="prompt">nvem@system:~$</span> © 2026 Nvem. All rights reserved.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Discord</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
