import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - Mentara',
  description: 'Mentara Privacy Policy. Your data stays on your device.',
}

export default function PrivacyPage() {
  return (
    <main style={styles.main}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <Link href="/" style={styles.logo}>
            <Image src="/icon.png" alt="Mentara" width={40} height={40} />
            <span style={styles.logoText}>MENT<span style={styles.logoAccent}>ARA</span></span>
          </Link>
          <div style={styles.navLinks}>
            <Link href="/privacy" style={styles.navLinkActive}>Privacy</Link>
            <Link href="/support" style={styles.navLink}>Support</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <article style={styles.article}>
        <header style={styles.header}>
          <h1 style={styles.title}>Privacy Policy</h1>
          <p style={styles.lastUpdated}>Last updated: December 30, 2024</p>
        </header>

        <div style={styles.content}>
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Our Commitment to Your Privacy</h2>
            <p style={styles.paragraph}>
              At SYNTALYS TECH, we built Mentara with one core principle: <strong>your thoughts belong to you</strong>.
              Mentara is designed to be completely offline and private. We don't collect, store, or have access to any of your data.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>What Data We Collect</h2>
            <div style={styles.highlight}>
              <span style={styles.highlightIcon}>🔒</span>
              <p style={styles.highlightText}>
                <strong>None.</strong> Mentara does not collect any personal data. All your notes, tags, and settings
                are stored locally on your device and never leave it.
              </p>
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>How Mentara Works</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <span style={styles.listIcon}>📱</span>
                <span><strong>Local Storage Only:</strong> All your notes are stored in a SQLite database on your device.</span>
              </li>
              <li style={styles.listItem}>
                <span style={styles.listIcon}>🚫</span>
                <span><strong>No Cloud Sync:</strong> We don't offer cloud sync, which means your data never touches our servers.</span>
              </li>
              <li style={styles.listItem}>
                <span style={styles.listIcon}>👤</span>
                <span><strong>No Accounts:</strong> You don't need to create an account or provide any personal information.</span>
              </li>
              <li style={styles.listItem}>
                <span style={styles.listIcon}>📊</span>
                <span><strong>No Analytics:</strong> We don't use any analytics or tracking SDKs.</span>
              </li>
              <li style={styles.listItem}>
                <span style={styles.listIcon}>📢</span>
                <span><strong>No Ads:</strong> Mentara is ad-free and will always remain so.</span>
              </li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Device Permissions</h2>
            <p style={styles.paragraph}>
              Mentara does not request access to your camera, microphone, location, contacts, photos, or any other
              sensitive device features. The only data Mentara accesses is what you explicitly create within the app.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Data Export</h2>
            <p style={styles.paragraph}>
              You can export your notes at any time to PDF or CSV format. This export happens entirely on your device,
              and the exported files remain under your control.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>PIN Protection</h2>
            <p style={styles.paragraph}>
              If you enable PIN protection, your PIN is stored securely on your device using secure storage mechanisms.
              We never have access to your PIN or any means to recover it.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Third-Party Services</h2>
            <p style={styles.paragraph}>
              Mentara does not integrate with any third-party services that collect data. The app functions entirely
              offline without requiring an internet connection.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Data Deletion</h2>
            <p style={styles.paragraph}>
              Since all data is stored locally on your device, you have complete control over it. You can delete
              individual notes within the app or uninstall the app to remove all data. We have no copies of your data
              and cannot recover it for you.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Children's Privacy</h2>
            <p style={styles.paragraph}>
              Mentara does not collect any personal information from anyone, including children under 13. Since we
              don't collect data, there are no special provisions needed for children's privacy.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Changes to This Policy</h2>
            <p style={styles.paragraph}>
              We may update this Privacy Policy from time to time. Since we don't collect your email or contact
              information, we encourage you to review this page periodically. The "Last updated" date at the top
              indicates when the policy was last modified.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Contact Us</h2>
            <p style={styles.paragraph}>
              If you have any questions about this Privacy Policy, please contact us through our{' '}
              <Link href="/support" style={styles.link}>Support page</Link>.
            </p>
          </section>

          <div style={styles.summary}>
            <h3 style={styles.summaryTitle}>TL;DR</h3>
            <p style={styles.summaryText}>
              Your notes stay on your device. We don't see them, store them, or have any access to them.
              Mentara is built for privacy-conscious people who want to keep their thoughts truly private.
            </p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>© 2024 SYNTALYS TECH. All rights reserved.</p>
          <div style={styles.footerLinks}>
            <Link href="/" style={styles.footerLink}>Home</Link>
            <Link href="/support" style={styles.footerLink}>Support</Link>
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
    fontSize: '32px',
    flexShrink: 0,
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
    fontSize: '20px',
    flexShrink: 0,
    marginTop: '2px',
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
}
