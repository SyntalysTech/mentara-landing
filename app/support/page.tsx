'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const faqs = [
  {
    question: 'Is Mentara really free?',
    answer: 'Yes! Mentara is completely free to use. No subscriptions, no in-app purchases, no hidden costs.',
  },
  {
    question: 'Where is my data stored?',
    answer: 'All your data is stored locally on your device using SQLite. Your notes never leave your phone.',
  },
  {
    question: 'Can I sync my notes between devices?',
    answer: 'Currently, Mentara is designed to work offline on a single device to maximize privacy. We\'re exploring privacy-respecting sync options for the future.',
  },
  {
    question: 'What are [[note links]]?',
    answer: 'Note links let you connect related notes together. Just type [[Note Title]] in any note to create a link. If the note doesn\'t exist, Mentara will offer to create it.',
  },
  {
    question: 'I forgot my PIN. How do I recover it?',
    answer: 'For security reasons, we don\'t store your PIN anywhere we can access. If you forget your PIN, you\'ll need to reinstall the app, which will delete all data.',
  },
  {
    question: 'How do I export my notes?',
    answer: 'Go to Settings > Export and choose PDF or CSV format. Your export is generated locally on your device.',
  },
]

export default function SupportPage() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('sending')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xpqzbnjj', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setFormState('success')
        form.reset()
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

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
            <Link href="/privacy" style={styles.navLink}>Privacy</Link>
            <Link href="/support" style={styles.navLinkActive}>Support</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.title}>How can we help?</h1>
        <p style={styles.subtitle}>
          Get answers to common questions or reach out to our team
        </p>
      </section>

      {/* FAQ Section */}
      <section style={styles.faqSection}>
        <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div style={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                ...styles.faqItem,
                ...(expandedFaq === index ? styles.faqItemExpanded : {}),
              }}
            >
              <button
                style={styles.faqQuestion}
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span style={{
                  ...styles.faqIcon,
                  transform: expandedFaq === index ? 'rotate(45deg)' : 'rotate(0deg)',
                }}>
                  +
                </span>
              </button>
              {expandedFaq === index && (
                <div style={styles.faqAnswer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section style={styles.contactSection}>
        <div style={styles.contactContent}>
          <div style={styles.contactInfo}>
            <h2 style={styles.sectionTitle}>Still need help?</h2>
            <p style={styles.contactDescription}>
              Can't find what you're looking for? Send us a message and we'll get back to you as soon as possible.
            </p>
            <div style={styles.contactDetails}>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📧</span>
                <span>We typically respond within 24-48 hours</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>🔒</span>
                <span>Your message is sent securely</span>
              </div>
            </div>
          </div>

          <form style={styles.form} onSubmit={handleSubmit}>
            {formState === 'success' ? (
              <div style={styles.successMessage}>
                <span style={styles.successIcon}>✓</span>
                <h3 style={styles.successTitle}>Message sent!</h3>
                <p style={styles.successText}>
                  Thanks for reaching out. We'll get back to you soon.
                </p>
                <button
                  type="button"
                  style={styles.resetButton}
                  onClick={() => setFormState('idle')}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="name">Name</label>
                  <input
                    style={styles.input}
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="email">Email</label>
                  <input
                    style={styles.input}
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="subject">Subject</label>
                  <select style={styles.select} id="subject" name="subject" required>
                    <option value="">Select a topic</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="question">General Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="message">Message</label>
                  <textarea
                    style={styles.textarea}
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your issue or question in detail..."
                  />
                </div>

                {formState === 'error' && (
                  <div style={styles.errorMessage}>
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  style={styles.submitButton}
                  disabled={formState === 'sending'}
                >
                  {formState === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>© 2024 SYNTALYS TECH. All rights reserved.</p>
          <div style={styles.footerLinks}>
            <Link href="/" style={styles.footerLink}>Home</Link>
            <Link href="/privacy" style={styles.footerLink}>Privacy</Link>
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
  hero: {
    padding: '140px 24px 60px',
    textAlign: 'center',
    background: 'linear-gradient(180deg, #FFF8F0 0%, #FFFFFF 100%)',
  },
  title: {
    fontSize: '42px',
    fontWeight: 700,
    letterSpacing: '-1px',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#666666',
  },
  faqSection: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '60px 24px',
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: 600,
    marginBottom: '32px',
    color: '#1a1a1a',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  faqItem: {
    background: '#F5F5F5',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.2s',
  },
  faqItemExpanded: {
    background: '#FFFFFF',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },
  faqQuestion: {
    width: '100%',
    padding: '20px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 600,
    color: '#1a1a1a',
    textAlign: 'left',
  },
  faqIcon: {
    fontSize: '24px',
    fontWeight: 300,
    color: '#FF8A00',
    transition: 'transform 0.2s',
  },
  faqAnswer: {
    padding: '0 24px 20px',
    fontSize: '15px',
    lineHeight: 1.7,
    color: '#666666',
  },
  contactSection: {
    background: '#FFF8F0',
    padding: '80px 24px',
  },
  contactContent: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '60px',
    alignItems: 'start',
  },
  contactInfo: {},
  contactDescription: {
    fontSize: '16px',
    lineHeight: 1.7,
    color: '#666666',
    marginBottom: '32px',
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '15px',
    color: '#444444',
  },
  contactIcon: {
    fontSize: '20px',
  },
  form: {
    background: '#FFFFFF',
    padding: '32px',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 600,
    marginBottom: '8px',
    color: '#1a1a1a',
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '15px',
    border: '2px solid #E5E5E5',
    borderRadius: '10px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  select: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '15px',
    border: '2px solid #E5E5E5',
    borderRadius: '10px',
    outline: 'none',
    background: '#FFFFFF',
    cursor: 'pointer',
  },
  textarea: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '15px',
    border: '2px solid #E5E5E5',
    borderRadius: '10px',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  submitButton: {
    width: '100%',
    padding: '16px',
    fontSize: '16px',
    fontWeight: 600,
    color: '#FFFFFF',
    background: '#FF8A00',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 14px rgba(255, 138, 0, 0.4)',
  },
  errorMessage: {
    padding: '12px 16px',
    marginBottom: '20px',
    background: '#FFF0F0',
    color: '#CC0000',
    borderRadius: '8px',
    fontSize: '14px',
  },
  successMessage: {
    textAlign: 'center',
    padding: '20px',
  },
  successIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    background: '#E8F5E9',
    color: '#4CAF50',
    borderRadius: '50%',
    fontSize: '28px',
    marginBottom: '16px',
  },
  successTitle: {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '8px',
  },
  successText: {
    fontSize: '15px',
    color: '#666666',
    marginBottom: '24px',
  },
  resetButton: {
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#FF8A00',
    background: 'transparent',
    border: '2px solid #FF8A00',
    borderRadius: '8px',
    cursor: 'pointer',
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
