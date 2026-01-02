'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguageSelector } from '../components/LanguageSelector'

export default function PrivacyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <main style={styles.main}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <Link href="/" style={styles.logo}>
            <Image src="/icon.png" alt="Mentara" width={40} height={40} />
            <span style={styles.logoText}>MENT<span style={styles.logoAccent}>ARA</span></span>
          </Link>
          <div style={styles.navRight}>
            <div className="nav-links" style={styles.navLinks}>
              <Link href="/" style={styles.navLink}>{t.nav.home}</Link>
              <Link href="/privacy" style={styles.navLinkActive}>{t.nav.privacy}</Link>
              <Link href="/support" style={styles.navLink}>{t.nav.support}</Link>
            </div>
            <LanguageSelector />
            <button
              className="mobile-menu-btn"
              style={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                {mobileMenuOpen ? (
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                ) : (
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-menu" style={styles.mobileMenu}>
            <Link href="/" style={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</Link>
            <Link href="/privacy" style={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>{t.nav.privacy}</Link>
            <Link href="/support" style={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>{t.nav.support}</Link>
          </div>
        )}
      </nav>

      {/* Content */}
      <article style={styles.article}>
        <header style={styles.header}>
          <h1 style={styles.title}>{t.privacy.title}</h1>
          <p style={styles.lastUpdated}>{t.privacy.lastUpdated}</p>
        </header>

        <div style={styles.content}>
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.privacy.commitment.title}</h2>
            <p style={styles.paragraph} dangerouslySetInnerHTML={{ __html: t.privacy.commitment.text }} />
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.privacy.dataCollect.title}</h2>
            <div style={styles.highlight}>
              <span style={styles.highlightIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </span>
              <p style={styles.highlightText} dangerouslySetInnerHTML={{ __html: t.privacy.dataCollect.text }} />
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.privacy.howItWorks.title}</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <span style={styles.listIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line x1="12" y1="18" x2="12.01" y2="18"/>
                  </svg>
                </span>
                <span><strong>{t.privacy.howItWorks.local.title}</strong> {t.privacy.howItWorks.local.text}</span>
              </li>
              <li style={styles.listItem}>
                <span style={styles.listIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                  </svg>
                </span>
                <span><strong>{t.privacy.howItWorks.noCloud.title}</strong> {t.privacy.howItWorks.noCloud.text}</span>
              </li>
              <li style={styles.listItem}>
                <span style={styles.listIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <span><strong>{t.privacy.howItWorks.noAccounts.title}</strong> {t.privacy.howItWorks.noAccounts.text}</span>
              </li>
              <li style={styles.listItem}>
                <span style={styles.listIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                </span>
                <span><strong>{t.privacy.howItWorks.noAnalytics.title}</strong> {t.privacy.howItWorks.noAnalytics.text}</span>
              </li>
              <li style={styles.listItem}>
                <span style={styles.listIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </span>
                <span><strong>{t.privacy.howItWorks.noAds.title}</strong> {t.privacy.howItWorks.noAds.text}</span>
              </li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.privacy.permissions.title}</h2>
            <p style={styles.paragraph}>{t.privacy.permissions.text}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.privacy.export.title}</h2>
            <p style={styles.paragraph}>{t.privacy.export.text}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.privacy.pinProtection.title}</h2>
            <p style={styles.paragraph}>{t.privacy.pinProtection.text}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.privacy.thirdParty.title}</h2>
            <p style={styles.paragraph}>{t.privacy.thirdParty.text}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.privacy.deletion.title}</h2>
            <p style={styles.paragraph}>{t.privacy.deletion.text}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.privacy.children.title}</h2>
            <p style={styles.paragraph}>{t.privacy.children.text}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.privacy.changes.title}</h2>
            <p style={styles.paragraph}>{t.privacy.changes.text}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>{t.privacy.contact.title}</h2>
            <p style={styles.paragraph}>
              {t.privacy.contact.text}{' '}
              <Link href="/support" style={styles.link}>{t.privacy.contact.link}</Link>.
            </p>
          </section>

          <div style={styles.summary}>
            <h3 style={styles.summaryTitle}>{t.privacy.tldr.title}</h3>
            <p style={styles.summaryText}>{t.privacy.tldr.text}</p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer style={styles.footer}>
        <div className="footer-content-simple" style={styles.footerContent}>
          <p>{t.home.footerCopyright}</p>
          <div style={styles.footerLinks}>
            <Link href="/" style={styles.footerLink}>{t.nav.home}</Link>
            <Link href="/support" style={styles.footerLink}>{t.nav.support}</Link>
          </div>
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
    textDecoration: 'none',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: '-0.5px',
    color: '#1a1a1a',
  },
  logoAccent: {
    color: '#FF8A00',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
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
  navLinkActive: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#FF8A00',
  },
  article: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '120px 24px 80px',
  },
  header: {
    marginBottom: '48px',
    textAlign: 'center',
  },
  title: {
    fontSize: '42px',
    fontWeight: 700,
    letterSpacing: '-1px',
    marginBottom: '12px',
  },
  lastUpdated: {
    fontSize: '14px',
    color: '#666666',
  },
  content: {},
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 600,
    marginBottom: '16px',
    color: '#1a1a1a',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: 1.8,
    color: '#444444',
  },
  highlight: {
    display: 'flex',
    gap: '16px',
    padding: '24px',
    background: 'rgba(255, 138, 0, 0.08)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 138, 0, 0.2)',
  },
  highlightIcon: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlightText: {
    fontSize: '16px',
    lineHeight: 1.7,
    color: '#1a1a1a',
    margin: 0,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    fontSize: '16px',
    lineHeight: 1.7,
    color: '#444444',
  },
  listIcon: {
    flexShrink: 0,
    marginTop: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: '#FF8A00',
    fontWeight: 600,
    textDecoration: 'underline',
  },
  summary: {
    padding: '32px',
    background: '#F5F5F5',
    borderRadius: '16px',
    marginTop: '48px',
  },
  summaryTitle: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '12px',
    color: '#FF8A00',
  },
  summaryText: {
    fontSize: '16px',
    lineHeight: 1.7,
    color: '#1a1a1a',
    margin: 0,
  },
  footer: {
    background: '#1a1a1a',
    color: '#FFFFFF',
    padding: '24px',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
    fontSize: '14px',
    color: '#a0a0a0',
  },
  footerLinks: {
    display: 'flex',
    gap: '24px',
  },
  footerLink: {
    color: '#FFFFFF',
    opacity: 0.8,
  },
  mobileMenuBtn: {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    color: '#1a1a1a',
  },
  mobileMenu: {
    display: 'none',
    flexDirection: 'column',
    padding: '16px 24px',
    background: '#FFFFFF',
    borderTop: '1px solid #E5E5E5',
  },
  mobileMenuLink: {
    padding: '12px 0',
    fontSize: '16px',
    fontWeight: 500,
    color: '#1a1a1a',
    borderBottom: '1px solid #E5E5E5',
  },
}
