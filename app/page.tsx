'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const features = [
  {
    icon: 'shield',
    title: 'Truly Private',
    description: 'Your notes never leave your device. No accounts, no cloud sync, no tracking.',
  },
  {
    icon: 'link',
    title: 'Link Your Ideas',
    description: 'Connect notes with [[wiki-style links]] to build your personal knowledge graph.',
  },
  {
    icon: 'tag',
    title: 'Organize with Tags',
    description: 'Tag your notes and filter by topic to find exactly what you need.',
  },
  {
    icon: 'offline',
    title: 'Works Offline',
    description: 'Access and edit your notes anywhere, anytime. No internet required.',
  },
  {
    icon: 'lock',
    title: 'PIN Protection',
    description: 'Optional PIN lock keeps your thoughts secure from prying eyes.',
  },
  {
    icon: 'export',
    title: 'Export Anytime',
    description: 'Export your notes to PDF or CSV. Your data belongs to you.',
  },
]

const floatingNotes = [
  { text: 'Meeting notes', x: 10, y: 20, delay: 0 },
  { text: '[[Project Ideas]]', x: 80, y: 15, delay: 0.5 },
  { text: '#productivity', x: 15, y: 70, delay: 1 },
  { text: 'Remember to...', x: 75, y: 65, delay: 1.5 },
]

const FeatureIcon = ({ type }: { type: string }) => {
  const iconStyle: React.CSSProperties = {
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 138, 0, 0.1)',
    borderRadius: 10,
    marginBottom: 16,
  }

  const svgProps = { width: 24, height: 24, fill: '#FF8A00' }

  const icons: { [key: string]: JSX.Element } = {
    shield: (
      <svg {...svgProps} viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
      </svg>
    ),
    link: (
      <svg {...svgProps} viewBox="0 0 24 24">
        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
      </svg>
    ),
    tag: (
      <svg {...svgProps} viewBox="0 0 24 24">
        <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
      </svg>
    ),
    offline: (
      <svg {...svgProps} viewBox="0 0 24 24">
        <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/>
      </svg>
    ),
    lock: (
      <svg {...svgProps} viewBox="0 0 24 24">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
      </svg>
    ),
    export: (
      <svg {...svgProps} viewBox="0 0 24 24">
        <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"/>
      </svg>
    ),
  }

  return <div style={iconStyle}>{icons[type]}</div>
}

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

        {/* Phone Mockup - Realistic App UI */}
        <div style={styles.phoneMockup} className={mounted ? 'animate-scaleIn delay-300' : ''}>
          <div style={styles.phoneFrame}>
            <div style={styles.phoneNotch}></div>
            <div style={styles.phoneScreen}>
              {/* App Header */}
              <div style={styles.mockupHeader}>
                <Image src="/icon.png" alt="Mentara" width={24} height={24} />
                <span style={styles.mockupLogoText}>MENT<span style={styles.logoAccent}>ARA</span></span>
              </div>

              {/* Notes List */}
              <div style={styles.mockupNotesList}>
                {/* Pinned Note */}
                <div style={styles.mockupNoteCard}>
                  <div style={styles.mockupNoteCardHeader}>
                    <span style={styles.mockupNoteCardTitle}>Project Brainstorm</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF8A00">
                      <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </div>
                  <div style={styles.mockupNoteCardContent}>
                    Ideas for the new feature. Check <span style={styles.mockupLink}>[[Design Notes]]</span> for mockups...
                  </div>
                  <div style={styles.mockupTags}>
                    <span style={styles.mockupTag}>work</span>
                    <span style={styles.mockupTag}>ideas</span>
                  </div>
                </div>

                {/* Regular Note */}
                <div style={styles.mockupNoteCard}>
                  <div style={styles.mockupNoteCardHeader}>
                    <span style={styles.mockupNoteCardTitle}>Meeting Notes</span>
                  </div>
                  <div style={styles.mockupNoteCardContent}>
                    Key points from today's standup. Action items for next week...
                  </div>
                </div>

                {/* Another Note */}
                <div style={styles.mockupNoteCard}>
                  <div style={styles.mockupNoteCardHeader}>
                    <span style={styles.mockupNoteCardTitle}>Reading List</span>
                  </div>
                  <div style={styles.mockupNoteCardContent}>
                    Books to check out this month...
                  </div>
                  <div style={styles.mockupTags}>
                    <span style={styles.mockupTag}>personal</span>
                  </div>
                </div>
              </div>

              {/* FAB Button */}
              <div style={styles.mockupFab}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
              </div>

              {/* Tab Bar */}
              <div style={styles.mockupTabBar}>
                <div style={styles.mockupTabActive}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF8A00">
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                  <span style={styles.mockupTabTextActive}>Notes</span>
                </div>
                <div style={styles.mockupTab}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#999">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                  <span style={styles.mockupTabText}>Search</span>
                </div>
                <div style={styles.mockupTab}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#999">
                    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
                  </svg>
                  <span style={styles.mockupTabText}>Tags</span>
                </div>
                <div style={styles.mockupTab}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#999">
                    <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                  </svg>
                  <span style={styles.mockupTabText}>Settings</span>
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
              <FeatureIcon type={feature.icon} />
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
    margin: '0 auto 8px',
  },
  phoneScreen: {
    width: '100%',
    height: 'calc(100% - 36px)',
    background: '#FFFFFF',
    borderRadius: '28px',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  mockupHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 16px',
    borderBottom: '1px solid #E5E5E5',
  },
  mockupLogoText: {
    fontSize: '14px',
    fontWeight: 700,
  },
  mockupNotesList: {
    flex: 1,
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    overflow: 'hidden',
  },
  mockupNoteCard: {
    background: '#F5F5F5',
    borderRadius: '12px',
    padding: '12px',
  },
  mockupNoteCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '6px',
  },
  mockupNoteCardTitle: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#1a1a1a',
  },
  mockupNoteCardContent: {
    fontSize: '11px',
    color: '#666666',
    lineHeight: 1.4,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  mockupLink: {
    color: '#FF8A00',
    fontWeight: 600,
  },
  mockupTags: {
    display: 'flex',
    gap: '4px',
    marginTop: '8px',
  },
  mockupTag: {
    fontSize: '9px',
    fontWeight: 600,
    color: '#FFFFFF',
    background: '#FF8A00',
    padding: '3px 8px',
    borderRadius: '20px',
  },
  mockupFab: {
    position: 'absolute',
    right: 16,
    bottom: 70,
    width: 48,
    height: 48,
    background: '#FF8A00',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(255, 138, 0, 0.4)',
  },
  mockupTabBar: {
    display: 'flex',
    borderTop: '1px solid #E5E5E5',
    padding: '8px 0',
    background: '#FFFFFF',
  },
  mockupTab: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2px',
  },
  mockupTabActive: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2px',
  },
  mockupTabText: {
    fontSize: '9px',
    color: '#999',
  },
  mockupTabTextActive: {
    fontSize: '9px',
    color: '#FF8A00',
    fontWeight: 600,
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
    fontSize: '14px',
    color: '#a0a0a0',
  },
}
