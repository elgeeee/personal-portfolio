import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="geometric-bg" />
  {/* Header */}
  <header>
    <nav>
      <a href="#hero" className="logo">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#667eea", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#764ba2", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <circle
            cx={20}
            cy={20}
            r={18}
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth={2}
          />
          <circle
            cx={20}
            cy={20}
            r={14}
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
            opacity="0.7"
          />
          <circle
            cx={20}
            cy={20}
            r={10}
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth={1}
            opacity="0.5"
          />
          <circle
            cx={20}
            cy={20}
            r={6}
            fill="none"
            stroke="url(#logoGradient)"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <circle cx={20} cy={20} r={3} fill="url(#logoGradient)" />
        </svg>
        <span className="logo-text">Personal Portfolio</span>
      </a>
      <div className="menu-toggle" onclick="toggleMenu()">
        <span />
        <span />
        <span />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#hero" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            Biography
          </a>
        </li>
        <li>
          <a href="#practices" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#resources" className="nav-link">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
  {/* Hero Section with Enhanced Background */}
  <section id="hero">
    {/* Network Background */}
    <div className="network-bg">
      <div className="network-line" />
      <div className="network-line" />
      <div className="network-line" />
      <div className="network-line" />
      <div className="network-line" />
      <div className="network-line" />
      <div className="network-line" />
      <div className="network-line" />
      <div className="network-dot" />
      <div className="network-dot" />
      <div className="network-dot" />
      <div className="network-dot" />
      <div className="network-dot" />
      <div className="network-dot" />
      <div className="network-dot" />
      <div className="network-dot" />
      <div className="network-dot" />
      <div className="network-dot" />
      <div className="network-dot" />
      <div className="network-dot" />
    </div>
    <div className="peace-bg">
      <div className="breathing-circle" />
      <div className="breathing-circle" />
      <div className="breathing-circle" />
      <div className="breathing-circle" />
    </div>
    <div className="floating-elements">
      <div className="zen-stone" />
      <div className="zen-stone" />
      <div className="zen-stone" />
    </div>
    <div className="mandala-bg">
      <div className="mandala-circle" />
      <div className="mandala-circle" />
      <div className="mandala-circle" />
    </div>
    <div className="hero-content">
      <h1>Lorlyn Grace Boiser</h1>
      <p>
        "The drive to be the best starts with believing you can be."
      </p>
      <a href="#about" className="cta-button">
        Get To Know Me
      </a>
    </div>
  </section>
  {/* About Section - Complete Redesign */}
  <section id="about">
    <h2 className="section-title">Biography</h2>
    <p className="section-subtitle">Learn about my background, education, and passions</p>
    {/* Floating Cards Design */}
    <div className="about-floating-cards">
      <div className="floating-card">
        <div className="card-icon">
          <div className="icon-wrapper">🧍‍♀️</div>
        </div>
        <h3>About Me</h3>
        <p>
          I am an individual with experience in healthcare, management, and web development. 
          Passionate about problem-solving, continuous learning, and creating meaningful digital solutions.
        </p>
      </div>
      <div className="floating-card">
        <div className="card-icon">
          <div className="icon-wrapper">🧠</div>
        </div>
        <h3>Education</h3>
        <p>
          I am a STEM Graduate. A consistent Honor Student and Lister.
        </p>
      </div>
      <div className="floating-card">
        <div className="card-icon">
          <div className="icon-wrapper">🎯</div>
        </div>
        <h3>Hobbies & Interests</h3>
        <p>
          I enjoy observing and analyzing people's actions and behaviors. I love reading, watching movies/series, and exploring problem-solving techniques.
        </p>
      </div>
    </div>
  </section>
  {/* Practices Section - Enhanced Timeline Design */}
  <section id="practices">
    <div className="practices-container">
      <h2 className="section-title">Project and Resume</h2>
      <p className="section-subtitle">
        A selection of my work with key takeaways
      </p>
      <div className="practice-layout">
        {/* Futuristic Left Timeline */}
        <div className="timeline-track">
          <div className="timeline-progress" />
          <div className="timeline-points">
            <div className="timeline-point active">
              <div className="futuristic-label">
                <span className="label-text">Collaboration Project with Eunice</span>
              </div>
              <div className="timeline-indicator" />
            </div>
            <div className="timeline-point active">
              <div className="futuristic-label">
                <span className="label-text"><a href="Resume.pdf" download="Resume.pdf">
                Download Resume (PDF)
              </a></span>
              </div>
              <div className="timeline-indicator" />
            </div>
          </div>
        </div>
        {/* Right Content Area */}
        <div className="practice-content-area">
          <div className="practice-card-new">
            <div className="practice-header">
              <div className="practice-icon-new">🗒</div>
              <div className="practice-info">
                <h3>Note App</h3>
                <span className="practice-duration">HTML, CSS, JS, Laravel</span>
              </div>
            </div>
            <p className="practice-description">
              A collaborative note-taking application that allows users to create, edit, and organize notes efficiently.
            </p>
            <div className="practice-benefits">
              <a href="https://github.com/eunicelugtu/note-app" className="benefit-tag">
                View Repository
              </a>
            </div>
          </div>
          <div className="practice-card-new">
            <div className="practice-header">
              <div className="practice-icon-new">🪪</div>
              <div className="practice-info">
                <h3>Profile Summary</h3>
                <span className="practice-duration">Experience and key accomplishments</span>
              </div>
            </div>
            <p className="practice-description">
              Aspiring data analyst with experience in healthcare settings, with basic knowledge in front-end design and problem-solving.
            </p>
            <div className="practice-benefits">
              <a href="#" className="benefit-tag">
                Healthcare
              </a>
              <a href="#" className="benefit-tag">
                Analysis
              </a>
              <a href="#" className="benefit-tag">
                Critical Thinking
              </a>
              <a href="#" className="benefit-tag">
                Collaboration
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div>
    <br />
  {/* Stats Banner */}
    <div className="stats-banner">
      <div className="stat-block">
        <div className="stat-value">70%</div>
        <div className="stat-desc">Documentation</div>
      </div>
      <div className="stat-block">
        <div className="stat-value">15%</div>
        <div className="stat-desc">Design</div>
      </div>
      <div className="stat-block">
        <div className="stat-value">30%</div>
        <div className="stat-desc">Back-End Development</div>
      </div>
      <div className="stat-block">
        <div className="stat-value">60%</div>
        <div className="stat-desc">Front-End Development</div>
      </div>
    </div>
    {/* Feature Showcase */}
    <div className="feature-showcase">
      <div className="showcase-content">
        <h3>Languages and Tools I use/d</h3>
        <ul className="feature-list">
          <li>
            <span className="feature-check">✓</span>
            <span>PHP</span>
          </li>
          <li>
            <span className="feature-check">✓</span>
            <span>HTML & CSS</span>
          </li>
          <li>
            <span className="feature-check">✓</span>
            <span>JavaScript & React</span>
          </li>
          <li>
            <span className="feature-check">✓</span>
            <span>C#</span>
          </li>
          <li>
            <span className="feature-check">✓</span>
            <span>Python</span>
          </li>
          <li>
            <span className="feature-check">✓</span>
            <span>MySQL</span>
          </li>
          <li>
            <span className="feature-check">✓</span>
            <span>VS Code</span>
          </li>
          <li>
            <span className="feature-check">✓</span>
            <span>Figma</span>
          </li>
          <li>
            <span className="feature-check">✓</span>
            <span>Canva</span>
          </li>
        </ul>
      </div>
    </div>  
  </div>  

  </section>
  {/* Skills Section - Tab Structure */}
  <section id="resources">
    <h2 className="section-title">Skills</h2>
    <p className="section-subtitle">
      Motivated individual with a positive attitude and a passion for learning.
    </p>
    <div id="meditations" className="tab-content active">
      <div className="resource-list">
        <div className="resource-card">
          <div className="resource-image">
            <div className="resource-thumbnail morning-meditation" />
          </div>
          <div className="resource-body">
            <h3>Data Analysis & Problem-Solving</h3>
            <p>
              Can interpret data to identify issues and create practical solutions.
            </p>
          </div>
        </div>
        <div className="resource-card">
          <div className="resource-image">
            <div className="resource-thumbnail stress-relief" />
          </div>
          <div className="resource-body">
            <h3>Healthcare Knowledge</h3>
            <p>
              Understand basic healthcare processes and patient care.
            </p>
          </div>
        </div>
        <div className="resource-card">
          <div className="resource-image">
            <div className="resource-thumbnail sleep-meditation" />
          </div>
          <div className="resource-body">
            <h3>Front-End Design</h3>
            <p>
              Able to create user-friendly and visually appealing interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Section - Two Columns */}
  <section id="contact">
    <div className="contact-container">
      <h2 className="section-title">Connect With Me</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <div className="info-item">
            <div className="info-icon">𖤣</div>
            <div className="info-text">
              <h4>Visit Me</h4>
              <p>
                684 Holy Spirit, Quezon City
                <br />
              </p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">✉︎</div>
            <div className="info-text">
              <h4>Email</h4>
              <p>
                lowlayngrace@gmail.com
                <br />
              </p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">✆</div>
            <div className="info-text">
              <h4>Phone</h4>
              <p>
                +63 9706504550
                <br />
                Mon-Fri, 9am-6pm PHT
              </p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">🗨</div>
            <div className="info-text">
              <h4>Live Chat</h4>
              <p>Available 24/7 for urgent support</p>
            </div>
          </div>
          <div className="social-links">
            <a href="https://facebook.com/lowlayngrace" className="social-link">
              ⓕ
            </a>
            <a href="https://x.com/lrlyngeeb" className="social-link">
              𝕏
            </a>
            <a href="https://instagram.com/lorlyngraceb" className="social-link">
              📷
            </a>
            <a href="https://github.com/elgeeee" className="social-link">
              𝐆
            </a>
          </div>
        </div>
        <div className="contact-form">
          <h3
            style={{
              color: "var(--primary)",
              fontSize: "1.8rem",
              marginBottom: "2rem"
            }}
          >
            Send a Message
          </h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required=""
                defaultValue={""}
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer>
    <div className="footer-content">
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#support">Support</a>
      </div>
      <div className="copyright">
        <p>
          © 2025 Inner Peace. All rights reserved. Nurturing minds, one breath
          at a time. Designed by{" "}
          <a
            rel="nofollow noopener"
            href="https://www.tooplate.com"
            target="_blank"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              transition: "color 0.3s ease"
            }}
          >
            Tooplate
          </a>
        </p>
      </div>
    </div>
  </footer>
</>






  )
}

export default App
