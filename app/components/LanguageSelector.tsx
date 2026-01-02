'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Language } from '../i18n/translations'

const FlagIcon = ({ country }: { country: 'gb' | 'es' | 'fr' }) => {
  const flags = {
    gb: (
      <svg width="20" height="15" viewBox="0 0 60 30">
        <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </svg>
    ),
    es: (
      <svg width="20" height="15" viewBox="0 0 750 500">
        <rect width="750" height="500" fill="#c60b1e"/>
        <rect width="750" height="250" y="125" fill="#ffc400"/>
      </svg>
    ),
    fr: (
      <svg width="20" height="15" viewBox="0 0 900 600">
        <rect width="900" height="600" fill="#ED2939"/>
        <rect width="600" height="600" fill="#fff"/>
        <rect width="300" height="600" fill="#002395"/>
      </svg>
    ),
  }
  return <span style={{ display: 'flex', alignItems: 'center' }}>{flags[country]}</span>
}

const languageLabels: Record<Language, { short: string; full: string; flag: 'gb' | 'es' | 'fr' }> = {
  en: { short: 'EN', full: 'English', flag: 'gb' },
  es: { short: 'ES', full: 'Español', flag: 'es' },
  fr: { short: 'FR', full: 'Français', flag: 'fr' },
}

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} style={styles.container}>
      <button
        style={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <FlagIcon country={languageLabels[language].flag} />
        <span>{languageLabels[language].short}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s'
          }}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {isOpen && (
        <div style={styles.dropdown}>
          {(Object.keys(languageLabels) as Language[]).map((lang) => (
            <button
              key={lang}
              style={{
                ...styles.option,
                ...(language === lang ? styles.optionActive : {}),
              }}
              onClick={() => handleSelect(lang)}
            >
              <FlagIcon country={languageLabels[lang].flag} />
              <span style={styles.optionFull}>{languageLabels[lang].full}</span>
              {language === lang && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF8A00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'relative',
  },
  trigger: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'none',
    border: '1px solid #E5E5E5',
    borderRadius: '8px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: 500,
    color: '#1a1a1a',
    transition: 'all 0.2s',
  },
  dropdown: {
    position: 'absolute',
    top: 'calc(100% + 8px)',
    right: 0,
    background: '#FFFFFF',
    border: '1px solid #E5E5E5',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
    minWidth: '160px',
    overflow: 'hidden',
    zIndex: 1000,
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    padding: '12px 16px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#1a1a1a',
    textAlign: 'left',
    transition: 'background 0.2s',
  },
  optionActive: {
    background: 'rgba(255, 138, 0, 0.08)',
  },
  optionFlag: {
    fontSize: '18px',
  },
  optionFull: {
    flex: 1,
    color: '#666666',
  },
  flag: {
    fontSize: '18px',
    lineHeight: 1,
  },
}
