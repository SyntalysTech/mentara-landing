'use client'

import { useLanguage } from '../i18n/LanguageContext'

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div style={styles.container}>
      <button
        style={{
          ...styles.button,
          ...(language === 'en' ? styles.buttonActive : {}),
        }}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <span style={styles.divider}>|</span>
      <button
        style={{
          ...styles.button,
          ...(language === 'es' ? styles.buttonActive : {}),
        }}
        onClick={() => setLanguage('es')}
      >
        ES
      </button>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: 500,
    color: '#999999',
    padding: '4px 6px',
    borderRadius: '4px',
    transition: 'all 0.2s',
  },
  buttonActive: {
    color: '#FF8A00',
    fontWeight: 600,
  },
  divider: {
    color: '#E5E5E5',
    fontSize: '12px',
  },
}
