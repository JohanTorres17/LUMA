import { useState } from 'react'

const mainColors = [
  { hex: '#0D1B2A', name: 'Midnight Navy', role: 'Principal', flex: 2, light: false },
  { hex: '#2563EB', name: 'Electric Blue', role: 'Acento',    flex: 1, light: false },
  { hex: '#F5F7FA', name: 'Off White',     role: 'Base',      flex: 1, light: true  },
]

const swatches = [
  { hex: '#162236', name: 'Navy Deep',  usage: 'Superficies oscuras' },
  { hex: '#1E3050', name: 'Navy Mid',   usage: 'Bordes oscuros' },
  { hex: '#3B82F6', name: 'Blue Light', usage: 'Hover / Activo' },
  { hex: '#DBEAFE', name: 'Blue Pale',  usage: 'Fondos azules' },
  { hex: '#6B7A8D', name: 'Steel',      usage: 'Texto secundario' },
]

export default function GamaCromatica() {
  const [toast, setToast] = useState('')

  const copy = (hex) => {
    navigator.clipboard.writeText(hex)
    setToast(`Copiado: ${hex}`)
    setTimeout(() => setToast(''), 2000)
  }

  return (
    <section id="s04" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">04 — Gama Cromática</span>
            <h2 className="sec-title">Sistema de <em>color</em></h2>
            <p className="sec-desc">Una paleta anclada en la profundidad del azul marino, con el azul eléctrico como vector de energía.</p>
          </div>
        </div>

        {/* Main 3 colors */}
        <div className="row g-0 mb-3" style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 20px rgba(13,27,42,0.08)' }}>
          {mainColors.map(c => (
            <div
              key={c.hex}
              className={`col-12 col-md-${c.flex === 2 ? '6' : '3'}`}
              style={{ background: c.hex, minHeight: 280, position: 'relative', cursor: 'pointer' }}
              onClick={() => copy(c.hex)}
            >
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '20px 24px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)',
              }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: c.light ? 'var(--navy)' : '#fff', marginBottom: 2 }}>{c.name}</div>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: c.light ? 'var(--muted)' : 'rgba(255,255,255,0.7)' }}>
                  {c.hex} · {c.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Swatches — 5 columnas */}
        <div className="row g-3">
          {swatches.map(s => (
            <div key={s.hex} className="col-6 col-sm-4 col-md-2half col-lg">
              <div
                className="brand-card h-100"
                style={{ cursor: 'pointer' }}
                onClick={() => copy(s.hex)}
              >
                <div style={{ height: 80, background: s.hex }} />
                <div style={{ padding: '10px 12px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, marginBottom: 2 }}>{s.name}</div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'var(--muted)' }}>{s.hex}</div>
                  <div style={{ fontSize: '0.62rem', color: 'var(--muted)', marginTop: 2 }}>{s.usage}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Toast */}
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