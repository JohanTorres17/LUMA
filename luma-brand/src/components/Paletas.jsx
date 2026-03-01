import { useState } from 'react'

const paletas = [
  {
    name: 'Paleta Principal — Digital',
    desc: 'Sitios web, apps, presentaciones',
    colors: [
      { hex: '#0D1B2A', light: false },
      { hex: '#162236', light: false },
      { hex: '#2563EB', light: false },
      { hex: '#3B82F6', light: false },
      { hex: '#F5F7FA', light: true  },
      { hex: '#FFFFFF', light: true  },
    ],
  },
  {
    name: 'Paleta Oscura — Dark Mode',
    desc: 'Interfaces dark, banners, emails de impacto',
    colors: [
      { hex: '#060D14', light: false },
      { hex: '#0D1B2A', light: false },
      { hex: '#1E3050', light: false },
      { hex: '#2563EB', light: false },
      { hex: '#6B7A8D', light: false },
      { hex: '#DDE3EC', light: true  },
    ],
  },
  {
    name: 'Paleta Clara — Light Mode',
    desc: 'Documentos, propuestas, materiales impresos',
    colors: [
      { hex: '#FFFFFF', light: true  },
      { hex: '#F5F7FA', light: true  },
      { hex: '#EEF2F7', light: true  },
      { hex: '#DBEAFE', light: true  },
      { hex: '#2563EB', light: false },
      { hex: '#0D1B2A', light: false },
    ],
  },
]

export default function Paletas() {
  const [toast, setToast] = useState('')

  const copy = (hex) => {
    navigator.clipboard.writeText(hex)
    setToast(`Copiado: ${hex}`)
    setTimeout(() => setToast(''), 2000)
  }

  return (
    <section id="s08" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">08 — Paletas de Color</span>
            <h2 className="sec-title">Combinaciones <em>aprobadas</em></h2>
            <p className="sec-desc">Tres paletas oficiales para distintos contextos: digital, impresión y comunicación ligera.</p>
          </div>
        </div>

        <div className="row g-4">
          {paletas.map((p, i) => (
            <div key={i} className="col-12">
              <div style={{ border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' }}>
                {/* Header */}
                <div className="d-flex align-items-center justify-content-between px-4 py-3" style={{ background: 'var(--white)', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{p.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{p.desc}</div>
                </div>
                {/* Colors — equal flex columns */}
                <div className="d-flex" style={{ height: 100 }}>
                  {p.colors.map((c, j) => (
                    <div
                      key={j}
                      style={{ flex: 1, background: c.hex, cursor: 'pointer', position: 'relative', transition: 'flex 0.3s', border: c.light ? '1px solid var(--border)' : 'none' }}
                      onClick={() => copy(c.hex)}
                      onMouseEnter={e => e.currentTarget.style.flex = '2'}
                      onMouseLeave={e => e.currentTarget.style.flex = '1'}
                      title={c.hex}
                    >
                      <div style={{
                        position: 'absolute', bottom: 6, left: 6,
                        fontFamily: 'DM Mono, monospace', fontSize: '0.55rem',
                        padding: '1px 5px', borderRadius: 3, opacity: 0,
                        background: c.light ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)',
                        color: c.light ? 'var(--navy)' : '#fff',
                        transition: 'opacity 0.2s',
                        pointerEvents: 'none',
                      }}
                      className="color-label"
                      >{c.hex}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {toast && (
        <div style={{
          position: 'fixed', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--navy)', color: '#fff', padding: '10px 22px',
          borderRadius: 100, fontSize: '0.78rem', zIndex: 9999,
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        }}>{toast}</div>
      )}
    </section>
  )
}