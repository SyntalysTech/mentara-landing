'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const features = [
  {
    icon: '🔒',
    title: 'Truly Private',
    description: 'Your notes never leave your device. No accounts, no cloud sync, no tracking.',
  },
  {
    icon: '🔗',
    title: 'Link Your Ideas',
    description: 'Connect notes with [[wiki-style links]] to build your personal knowledge graph.',
  },
  {
    icon: '🏷️',
    title: 'Organize with Tags',
    description: 'Tag your notes and filter by topic to find exactly what you need.',
  },
  {
    icon: '📱',
    title: 'Works Offline',
    description: 'Access and edit your notes anywhere, anytime. No internet required.',
  },
  {
    icon: '🔐',
    title: 'PIN Protection',
    description: 'Optional PIN lock keeps your thoughts secure from prying eyes.',
  },
  {
    icon: '📤',
    title: 'Export Anytime',
    description: 'Export your notes to PDF or CSV. Your data belongs to you.',
  },
]

const floatingNotes = [
  { text: 'Meeting notes 📝', x: 10, y: 20, delay: 0 },
  { text: '[[Project Ideas]]', x: 80, y: 15, delay: 0.5 },
  { text: '#productivity', x: 15, y: 70, delay: 1 },
  { text: 'Remember to...', x: 75, y: 65, delay: 1.5 },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main style={styles.main}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <Image src="/icon.png" alt="Mentara" width={40} height={40} />
            <span style={styles.logoText}>MENT<span style={styles.logoAccent}>ARA</span></span>
          </div>
          <div style={styles.navLinks}>
            <Link href="/privacy" style={styles.navLink}>Privacy</Link>
            <Link href="/support" style={styles.navLink}>Support</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroBackground}>
          {mounted && floatingNotes.map((note, i) => (
            <div
              key={i}
              className="animate-float"
              style={{
                ...styles.floatingNote,
                left: `${note.x}%`,
                top: `${note.y}%`,
                animationDelay: `${note.delay}s`,
              }}
            >
              {note.text}
            </div>
          ))}
        </div>

        <div style={styles.heroContent} className={mounted ? 'animate-slideUp' : ''}>
          <div style={styles.badge}>
            <span style={styles.badgeIcon}>✨</span>
            <span>Privacy-First Note Taking</span>
          </div>

          <h1 style={styles.heroTitle}>
            Your Offline<br />
            <span style={styles.heroTitleAccent}>Second Brain</span>
          </h1>

          <p style={styles.heroSubtitle}>
            Capture ideas, link thoughts, and build your personal knowledge base —
            all while keeping your data completely private on your device.
          </p>

          <div style={styles.heroButtons}>
            <a href="#" style={styles.primaryButton}>
              <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor">
                <path d="M15.769 0H4.23C1.895 0 0 1.895 0 4.23v15.54C0 22.105 1.895 24 4.23 24h11.54c2.334 0 4.23-1.895 4.23-4.23V4.23C20 1.895 18.105 0 15.769 0zm-5.77 21.23a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77zm5.385-4.615H4.615V4.23h10.77v12.385z"/>
              </svg>
              <span>Coming to App Store</span>
            </a>
            <a href="#" style={styles.secondaryButton}>
              <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor">
                <path d="M17.523 7.326a4.635 4.635 0 00-2.183-3.89A4.794 4.794 0 0010.05 0a4.794 4.794 0 00-5.291 3.436 4.635 4.635 0 00-2.183 3.89A4.635 4.635 0 000 11.216v.013a4.62 4.62 0 002.576 4.156 4.794 4.794 0 005.291 3.436 4.635 4.635 0 003.466 1.547h.013a4.794 4.794 0 005.291-3.436 4.635 4.635 0 002.183-3.89v-.013a4.635 4.635 0 00-1.297-3.703z"/>
              </svg>
              <span>Coming to Play Store</span>
            </a>
          </div>
        </div>

        {/* Phone Mockup */}
        <div style={styles.phoneMockup} className={mounted ? 'animate-scaleIn delay-300' : ''}>
          <div style={styles.phoneFrame}>
            <div style={styles.phoneNotch}></div>
            <div style={styles.phoneScreen}>
              <div style={styles.mockupHeader}>
                <Image src="/icon.png" alt="Mentara" width={24} height={24} />
                <span style={styles.mockupLogoText}>MENT<span style={styles.logoAccent}>ARA</span></span>
              </div>
              <div style={styles.mockupNote}>
                <div style={styles.mockupNoteTitle}>My Ideas 💡</div>
                <div style={styles.mockupNoteContent}>
                  Working on something exciting...<br /><br />
                  Check out <span style={styles.mockupLink}>[[Project Notes]]</span> for details.
                </div>
                <div style={styles.mockupTags}>
                  <span style={styles.mockupTag}>#ideas</span>
                  <span style={styles.mockupTag}>#work</span>
                </div>
              </div>
              <div style={styles.mockupNote}>
                <div style={styles.mockupNoteTitle}>Meeting Notes</div>
                <div style={styles.mockupNoteContent}>
                  Key takeaways from today...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.featuresHeader}>
          <h2 style={styles.sectionTitle}>
            Everything you need.<br />
            <span style={styles.heroTitleAccent}>Nothing you don't.</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Mentara is designed to be simple, fast, and private.
            No bloat, no subscriptions, no data mining.
          </p>
        </div>

        <div style={styles.featuresGrid}>
          {features.map((feature, i) => (
            <div
              key={i}
              style={styles.featureCard}
              className={mounted ? `animate-fadeIn delay-${(i + 1) * 100}` : ''}
            >
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={styles.howItWorks}>
        <h2 style={styles.sectionTitle}>
          How <span style={styles.heroTitleAccent}>Mentara</span> Works
        </h2>

        <div style={styles.stepsContainer}>
          <div style={styles.step}>
            <div style={styles.stepNumber}>1</div>
            <div style={styles.stepContent}>
              <h3 style={styles.stepTitle}>Capture</h3>
              <p style={styles.stepDescription}>
                Jot down ideas instantly. Notes auto-save as you type.
              </p>
            </div>
          </div>

          <div style={styles.stepLine}></div>

          <div style={styles.step}>
            <div style={styles.stepNumber}>2</div>
            <div style={styles.stepContent}>
              <h3 style={styles.stepTitle}>Connect</h3>
              <p style={styles.stepDescription}>
                Link related notes with [[wiki links]] to build your knowledge web.
              </p>
            </div>
          </div>

          <div style={styles.stepLine}></div>

          <div style={styles.step}>
            <div style={styles.stepNumber}>3</div>
            <div style={styles.stepContent}>
              <h3 style={styles.stepTitle}>Discover</h3>
              <p style={styles.stepDescription}>
                Find connections and insights as your second brain grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to think better?</h2>
          <p style={styles.ctaSubtitle}>
            Join thousands who trust Mentara with their ideas.
          </p>
          <div style={styles.ctaButtons}>
            <a href="#" style={styles.primaryButton}>
              Get Mentara Free
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerBrand}>
            <div style={styles.logo}>
              <Image src="/icon.png" alt="Mentara" width={32} height={32} />
              <span style={styles.logoText}>MENT<span style={styles.logoAccent}>ARA</span></span>
            </div>
            <p style={styles.footerTagline}>Your Offline Second Brain</p>
          </div>

          <div style={styles.footerLinks}>
            <div style={styles.footerColumn}>
              <h4 style={styles.footerColumnTitle}>Legal</h4>
              <Link href="/privacy" style={styles.footerLink}>Privacy Policy</Link>
            </div>
            <div style={styles.footerColumn}>
              <h4 style={styles.footerColumnTitle}>Help</h4>
              <Link href="/support" style={styles.footerLink}>Support</Link>
            </div>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <p>© 2024 SYNTALYS TECH. All rights reserved.</p>
          <p style={styles.footerMadeWith}>Made with ❤️ for thinkers everywhere</p>
        </div>
      </footer>
    </main>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    minHeight: '100vh',
    background: '#FFFFFF',
  },
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #E5E5E5',
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: '-0.5px',
  },
  logoAccent: {
    color: '#FF8A00',
  },
  navLinks: {
    display: 'flex',
    gap: '32px',
  },
  navLink: {
    fontSize: '15px',
    fontWeight: 500,
    color: '#666666',
    transition: 'color 0.2s',
  },
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 24px 80px',
    overflow: 'hidden',
  },
  heroBackground: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, #FFF8F0 0%, #FFFFFF 100%)',
    zIndex: 0,
  },
  floatingNote: {
    position: 'absolute',
    padding: '12px 20px',
    background: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    fontSize: '14px',
    fontWeight: 500,
    color: '#1a1a1a',
    zIndex: 1,
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '800px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    background: 'rgba(255, 138, 0, 0.1)',
    borderRadius: '100px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#FF8A00',
    marginBottom: '24px',
  },
  badgeIcon: {
    fontSize: '16px',
  },
  heroTitle: {
    fontSize: 'clamp(40px, 8vw, 72px)',
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: '-2px',
    marginBottom: '24px',
  },
  heroTitleAccent: {
    color: '#FF8A00',
  },
  heroSubtitle: {
    fontSize: '18px',
    lineHeight: 1.7,
    color: '#666666',
    maxWidth: '600px',
    margin: '0 auto 40px',
  },
  heroButtons: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '16px 32px',
    background: '#FF8A00',
    color: '#FFFFFF',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 600,
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 14px rgba(255, 138, 0, 0.4)',
  },
  secondaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '16px 32px',
    background: '#FFFFFF',
    color: '#1a1a1a',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 600,
    border: '2px solid #E5E5E5',
    transition: 'transform 0.2s, border-color 0.2s',
  },
  phoneMockup: {
    position: 'relative',
    zIndex: 2,
    marginTop: '60px',
  },
  phoneFrame: {
    width: '280px',
    height: '580px',
    background: '#1a1a1a',
    borderRadius: '40px',
    padding: '12px',
    boxShadow: '0 50px 100px rgba(0, 0, 0, 0.15)',
  },
  phoneNotch: {
    width: '120px',
    height: '28px',
    background: '#1a1a1a',
    borderRadius: '20px',
    margin: '0 auto 12px',
  },
  phoneScreen: {
    width: '100%',
    height: 'calc(100% - 40px)',
    background: '#FFFFFF',
    borderRadius: '28px',
    padding: '16px',
    overflow: 'hidden',
  },
  mockupHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
  },
  mockupLogoText: {
    fontSize: '16px',
    fontWeight: 700,
  },
  mockupNote: {
    background: '#F5F5F5',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '12px',
  },
  mockupNoteTitle: {
    fontSize: '16px',
    fontWeight: 600,
    marginBottom: '8px',
  },
  mockupNoteContent: {
    fontSize: '13px',
    color: '#666666',
    lineHeight: 1.5,
  },
  mockupLink: {
    color: '#FF8A00',
    fontWeight: 600,
    background: 'rgba(255, 138, 0, 0.1)',
    padding: '2px 6px',
    borderRadius: '4px',
  },
  mockupTags: {
    display: 'flex',
    gap: '6px',
    marginTop: '12px',
  },
  mockupTag: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#FFFFFF',
    background: '#FF8A00',
    padding: '4px 10px',
    borderRadius: '20px',
  },
  features: {
    padding: '100px 24px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  featuresHeader: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-1px',
    marginBottom: '16px',
  },
  sectionSubtitle: {
    fontSize: '18px',
    color: '#666666',
    maxWidth: '500px',
    margin: '0 auto',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
  },
  featureCard: {
    padding: '32px',
    background: '#FFFFFF',
    borderRadius: '20px',
    border: '1px solid #E5E5E5',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  featureIcon: {
    fontSize: '40px',
    marginBottom: '16px',
  },
  featureTitle: {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '8px',
  },
  featureDescription: {
    fontSize: '15px',
    color: '#666666',
    lineHeight: 1.6,
  },
  howItWorks: {
    padding: '100px 24px',
    background: '#FFF8F0',
    textAlign: 'center',
  },
  stepsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '60px',
    maxWidth: '1000px',
    margin: '60px auto 0',
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    flex: '1',
    minWidth: '200px',
  },
  stepNumber: {
    width: '60px',
    height: '60px',
    background: '#FF8A00',
    color: '#FFFFFF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 700,
  },
  stepContent: {
    textAlign: 'center',
  },
  stepTitle: {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '8px',
  },
  stepDescription: {
    fontSize: '15px',
    color: '#666666',
    lineHeight: 1.5,
  },
  stepLine: {
    width: '60px',
    height: '2px',
    background: '#FF8A00',
    opacity: 0.3,
  },
  cta: {
    padding: '100px 24px',
    textAlign: 'center',
    background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF8F0 100%)',
  },
  ctaContent: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontSize: 'clamp(32px, 5vw, 48px)',
    fontWeight: 700,
    marginBottom: '16px',
  },
  ctaSubtitle: {
    fontSize: '18px',
    color: '#666666',
    marginBottom: '32px',
  },
  ctaButtons: {
    display: 'flex',
    justifyContent: 'center',
  },
  footer: {
    background: '#1a1a1a',
    color: '#FFFFFF',
    padding: '60px 24px 24px',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '40px',
    paddingBottom: '40px',
    borderBottom: '1px solid #2a2a2a',
  },
  footerBrand: {
    maxWidth: '300px',
  },
  footerTagline: {
    marginTop: '12px',
    color: '#a0a0a0',
    fontSize: '14px',
  },
  footerLinks: {
    display: 'flex',
    gap: '60px',
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  footerColumnTitle: {
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    color: '#a0a0a0',
    marginBottom: '4px',
  },
  footerLink: {
    fontSize: '15px',
    color: '#FFFFFF',
    opacity: 0.8,
    transition: 'opacity 0.2s',
  },
  footerBottom: {
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '16px',
    fontSize: '14px',
    color: '#a0a0a0',
  },
  footerMadeWith: {
    color: '#666666',
  },
}
