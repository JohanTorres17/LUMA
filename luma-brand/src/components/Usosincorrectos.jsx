const LogoMark = ({ size = 32, fill = '#162236' }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill={fill}/>
    <rect x="16" y="12" width="10" height="36" rx="2" fill="white"/>
    <rect x="16" y="38" width="32" height="10" rx="2" fill="white"/>
    <rect x="30" y="12" width="3" height="16" rx="1.5" fill="#3B82F6" opacity="0.9"/>
    <circle cx="48" cy="16" r="4" fill="#2563EB"/>
  </svg>
)

const LogoText = ({ color = '#fff', size = '1.3rem' }) => (
  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: size, fontWeight: 600, color, letterSpacing: '0.18em' }}>LUMA</span>
)

const wrongs = [
  {
    title: 'No distorsionar',
    desc: 'Nunca estires ni comprimas el logo.',
    bg: '#0D1B2A',
    render: () => (
      <div style={{ transform: 'scaleX(1.6)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <LogoMark size={32} /> <LogoText />
      </div>
    ),
  },
  {
    title: 'No rotar',
    desc: 'El logo siempre en posición horizontal.',
    bg: '#0D1B2A',
    render: () => (
      <div style={{ transform: 'rotate(20deg)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <LogoMark size={32} /> <LogoText />
      </div>
    ),
  },
  {
    title: 'No cambiar colores',
    desc: 'Solo usar la paleta oficial aprobada.',
    bg: '#0D1B2A',
    render: () => (
      <div className="d-flex align-items-center gap-2">
        <LogoMark size={32} fill="#DC2626" />
        <LogoText color="#DC2626" />
      </div>
    ),
  },
  {
    title: 'No aplicar efectos',
    desc: 'Sin sombras, brillos ni filtros.',
    bg: '#0D1B2A',
    render: () => (
      <div className="d-flex align-items-center gap-2" style={{ filter: 'drop-shadow(0 0 8px #3B82F6)' }}>
        <LogoMark size={32} />
        <LogoText />
      </div>
    ),
  },
  {
    title: 'No usar fondos no aprobados',
    desc: 'Solo fondos definidos en la paleta oficial.',
    bg: 'linear-gradient(135deg, #7C3AED, #EC4899)',
    render: () => (
      <div className="d-flex align-items-center gap-2">
        <LogoMark size={32} /> <LogoText />
      </div>
    ),
  },
  {
    title: 'No reducir opacidad',
    desc: 'El logo siempre al 100% de opacidad.',
    bg: '#0D1B2A',
    render: () => (
      <div className="d-flex align-items-center gap-2" style={{ opacity: 0.25 }}>
        <LogoMark size={32} /> <LogoText />
      </div>
    ),
  },
]

export default function UsosIncorrectos() {
  return (
    <section id="s10" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">10 — Usos Incorrectos</span>
            <h2 className="sec-title">Lo que <em>no</em> se debe hacer</h2>
            <p className="sec-desc">Estas aplicaciones dañan la coherencia visual de LUMA. Nunca apliques estos cambios al logo.</p>
          </div>
        </div>

        {/* 3 columnas Bootstrap */}
        <div className="row g-3 mb-4">
          {wrongs.map((w, i) => {
            const Render = w.render
            return (
              <div key={i} className="col-12 col-sm-6 col-lg-4">
                <div className="brand-card h-100">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: 130, background: w.bg, padding: 24, position: 'relative' }}
                  >
                    {/* Badge NO */}
                    <div style={{
                      position: 'absolute', top: 10, right: 10,
                      width: 24, height: 24, borderRadius: '50%',
                      background: '#FEE2E2', color: '#DC2626',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700,
                    }}>✕</div>
                    <Render />
                  </div>
                  <div style={{ padding: '14px 16px', borderTop: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, marginBottom: 3 }}>{w.title}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{w.desc}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div
          className="d-flex align-items-center justify-content-between flex-wrap gap-3 mt-5 pt-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="d-flex align-items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
              <rect width="64" height="64" rx="14" fill="#162236"/>
              <rect x="16" y="12" width="10" height="36" rx="2" fill="white"/>
              <rect x="16" y="38" width="32" height="10" rx="2" fill="white"/>
              <rect x="30" y="12" width="3" height="16" rx="1.5" fill="#3B82F6" opacity="0.9"/>
              <circle cx="48" cy="16" r="4" fill="#2563EB"/>
            </svg>
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--navy)' }}>LUMA</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
            Manual de Marca v1.0.0 — © 2025 LUMA Digital Studio
          </div>
        </div>

      </div>
    </section>
  )
}