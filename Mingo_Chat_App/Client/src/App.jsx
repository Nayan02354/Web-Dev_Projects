import { useState } from "react";
import {
  FaArrowRight,
  FaBell,
  FaBolt,
  FaCheckDouble,
  FaCog,
  FaCommentDots,
  FaEllipsisV,
  FaPaperclip,
  FaPhoneAlt,
  FaPlus,
  FaSearch,
  FaShieldAlt,
  FaSmile,
  FaVideo,
} from "react-icons/fa";
import "./App.css";

const features = [
  {
    icon: FaBolt,
    title: "Instant replies",
    text: "Keep conversations moving with fast, real-time updates and clear delivery states.",
  },
  {
    icon: FaShieldAlt,
    title: "Private by design",
    text: "Secure conversations and thoughtful privacy defaults help every chat feel protected.",
  },
  {
    icon: FaCommentDots,
    title: "Built for teams",
    text: "From quick check-ins to shared updates, Mingo keeps every discussion focused and elegant.",
  },
];

const conversations = [
  {
    id: 1,
    name: "Ava Wright",
    status: "Product design",
    preview: "Can we review the onboarding flow before launch?",
    time: "2m ago",
    unread: 3,
    online: true,
    accent: "#4dbf8a",
    avatar: "AW",
    active: true,
  },
  {
    id: 2,
    name: "Noah Patel",
    status: "Marketing lead",
    preview: "The campaigns are performing better than expected.",
    time: "19m",
    unread: 0,
    online: true,
    accent: "#f59e0b",
    avatar: "NP",
    active: false,
  },
  {
    id: 3,
    name: "Sophia Kim",
    status: "Client success",
    preview: "I shared the onboarding checklist with the team.",
    time: "1h",
    unread: 1,
    online: false,
    accent: "#8b5cf6",
    avatar: "SK",
    active: false,
  },
  {
    id: 4,
    name: "Liam Chen",
    status: "Engineering",
    preview: "The release candidate is ready for review.",
    time: "4h",
    unread: 0,
    online: true,
    accent: "#60a5fa",
    avatar: "LC",
    active: false,
  },
];

const chatMessages = [
  {
    id: 1,
    type: "incoming",
    text: "Morning! The launch checklist is in great shape. Want to review the final copy together?",
    time: "09:42 AM",
  },
  {
    id: 2,
    type: "outgoing",
    text: "Absolutely. I can share the latest notes right after this sync.",
    time: "09:43 AM",
    read: true,
  },
  {
    id: 3,
    type: "incoming",
    text: "Perfect. I also added the FAQ updates from the customer feedback calls.",
    time: "09:45 AM",
  },
  {
    id: 4,
    type: "outgoing",
    text: "Love it. I’ll make sure the support flow feels smoother for our early users.",
    time: "09:47 AM",
    read: true,
  },
];

const stats = [
  { label: "Active chats", value: "12.4k" },
  { label: "Response time", value: "<2 min" },
  { label: "Customer love", value: "98%" },
];

function App() {
  const [activeChat, setActiveChat] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeConversation =
    conversations.find((conversation) => conversation.id === activeChat) ??
    conversations[0];

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="nav-inner">
          <div className="brand-wrap" aria-label="Mingo home">
            <div className="brand-mark">M</div>
            <div className="brand-copy">
              <span className="brand-name">Mingo</span>
              <span className="brand-tag">Connect smarter</span>
            </div>
          </div>

          <nav
            className={`nav-links ${mobileMenuOpen ? "menu-open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#features">Features</a>
            <a href="#privacy">Privacy</a>
            <a href="#about">About</a>
            <a href="#support">Help</a>
          </nav>

          <div className="nav-actions">
            <button type="button" className="nav-login">
              Login
            </button>
            <button type="button" className="nav-cta">
              Get Started
            </button>
            <button
              type="button"
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              Private conversations, beautifully simple
            </span>
            <h1>Chat freely. Connect instantly.</h1>
            <p>
              Mingo brings private messaging, real-time collaboration, and fast
              communication together in one premium experience built for modern
              teams and everyday connections.
            </p>

            <div className="hero-actions">
              <button type="button" className="primary-btn">
                Get Started
                <FaArrowRight />
              </button>
              <button type="button" className="secondary-btn">
                Explore Mingo
              </button>
            </div>

            <div className="hero-stats" aria-label="Key metrics">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Mingo messaging mockup">
            <div className="mockup-window">
              <div className="mockup-header">
                <div className="window-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="window-badge">Mingo • Live</div>
              </div>

              <div className="mockup-panel">
                <aside className="mini-sidebar">
                  <div className="mini-profile">
                    <div className="profile-avatar large">AM</div>
                    <span className="online-indicator" />
                  </div>
                  <div className="mini-actions">
                    <button type="button" aria-label="Inbox">
                      <FaBell />
                    </button>
                    <button type="button" aria-label="Settings">
                      <FaCog />
                    </button>
                  </div>
                </aside>

                <div className="mini-chat">
                  <div className="mini-chat-header">
                    <div className="mini-user">
                      <div
                        className="profile-avatar small"
                        style={{ background: "#2dd4bf" }}
                      >
                        AW
                      </div>
                      <div>
                        <strong>Ava Wright</strong>
                        <small>online</small>
                      </div>
                    </div>
                    <div className="mini-icons">
                      <button type="button" aria-label="Call">
                        <FaPhoneAlt />
                      </button>
                      <button type="button" aria-label="Video call">
                        <FaVideo />
                      </button>
                    </div>
                  </div>

                  <div className="mini-conversation">
                    <div className="bubble-badge incoming">
                      Hey! The launch flow is ready.
                    </div>
                    <div className="bubble-badge outgoing">
                      Amazing. I’ll review it now.
                    </div>
                    <div className="bubble-badge incoming typing">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="mini-compose">
                    <button type="button" aria-label="Add emoji">
                      <FaSmile />
                    </button>
                    <button type="button" aria-label="Attach file">
                      <FaPaperclip />
                    </button>
                    <div className="compose-field">Type a message...</div>
                    <button
                      type="button"
                      className="send-pill"
                      aria-label="Send message"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-strip" id="features">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="feature-card">
              <div className="feature-icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="chat-showcase" id="about">
          <div className="chat-window">
            <aside className="sidebar">
              <div className="sidebar-top">
                <div className="brand-wrap">
                  <div className="brand-mark small">M</div>
                  <span className="brand-name">Mingo</span>
                </div>

                <button type="button" className="new-chat-btn">
                  <FaPlus />
                  New chat
                </button>
              </div>

              <div className="profile-box">
                <div className="profile-avatar large">AN</div>
                <div>
                  <strong>Amelia Nolan</strong>
                  <small>Product director</small>
                </div>
              </div>

              <label className="search-box" aria-label="Search conversations">
                <FaSearch />
                <input type="text" placeholder="Search conversations" />
              </label>

              <div className="conversation-list">
                {conversations.map((conversation) => (
                  <button
                    type="button"
                    key={conversation.id}
                    className={`conversation-item ${conversation.id === activeChat ? "selected" : ""}`}
                    onClick={() => setActiveChat(conversation.id)}
                  >
                    <div className="avatar-wrap">
                      <div
                        className="profile-avatar"
                        style={{ background: conversation.accent }}
                      >
                        {conversation.avatar}
                      </div>
                      {conversation.online && (
                        <span className="online-indicator" />
                      )}
                    </div>

                    <div className="conversation-copy">
                      <div className="conversation-meta">
                        <strong>{conversation.name}</strong>
                        <span>{conversation.time}</span>
                      </div>
                      <div className="conversation-row">
                        <small>{conversation.status}</small>
                        {conversation.unread > 0 && (
                          <span className="unread-pill">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                      <p>{conversation.preview}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="sidebar-footer">
                <button type="button">
                  <FaCog />
                  Settings
                </button>
                <button type="button" className="logout-btn">
                  Logout
                </button>
              </div>
            </aside>

            <div className="chat-panel">
              <header className="chat-header">
                <div className="chat-user">
                  <div
                    className="profile-avatar mid"
                    style={{ background: activeConversation.accent }}
                  >
                    {activeConversation.avatar}
                  </div>
                  <div>
                    <strong>{activeConversation.name}</strong>
                    <span>
                      {activeConversation.online ? "online now" : "away"}
                    </span>
                  </div>
                </div>

                <div className="chat-actions">
                  <button type="button" aria-label="Call user">
                    <FaPhoneAlt />
                  </button>
                  <button type="button" aria-label="Video call user">
                    <FaVideo />
                  </button>
                  <button type="button" aria-label="More options">
                    <FaEllipsisV />
                  </button>
                </div>
              </header>

              <div className="message-list">
                <div className="date-separator">Today</div>

                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`message-row ${message.type}`}
                  >
                    <div className="message-bubble">
                      <p>{message.text}</p>
                      <div className="message-meta">
                        <span>{message.time}</span>
                        {message.type === "outgoing" && message.read && (
                          <FaCheckDouble />
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="typing-row">
                  <div className="typing-bubble">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>

              <div className="composer">
                <button
                  type="button"
                  aria-label="Add emoji"
                  className="toolbar-btn"
                >
                  <FaSmile />
                </button>
                <button
                  type="button"
                  aria-label="Attach files"
                  className="toolbar-btn"
                >
                  <FaPaperclip />
                </button>
                <input
                  type="text"
                  placeholder="Write a message..."
                  aria-label="Write a message"
                />
                <button type="button" className="send-btn">
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bottom-cta" id="support">
          <div>
            <span className="eyebrow dark">Built for better conversations</span>
            <h2>Bring your community closer with a cleaner way to connect.</h2>
          </div>
          <button type="button" className="primary-btn">
            Start chatting
            <FaArrowRight />
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
