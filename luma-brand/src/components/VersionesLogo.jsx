const LogoMark = ({ size = 44, bgOverride }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill={bgOverride || '#162236'}/>
    <rect x="16" y="12" width="10" height="36" rx="2" fill="white"/>
    <rect x="16" y="38" width="32" height="10" rx="2" fill="white"/>
    <rect x="30" y="12" width="3" height="16" rx="1.5" fill="#3B82F6" opacity="0.9"/>
    <circle cx="48" cy="16" r="4" fill="#2563EB"/>
  </svg>
)

const versions = [
  {
    name: 'Principal — Oscuro',
    use: 'Uso por defecto',
    bg: '#0D1B2A',
    preview: ({ size }) => (
      <div className="d-flex align-items-center gap-2">
        <LogoMark size={size} />
        <div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.6rem', letterSpacing: '0.18em', color: '#fff' }}>LUMA</div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.5rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#3B82F6', marginTop: 4 }}>Digital Studio</div>
        </div>
      </div>
    ),
  },
  {
    name: 'Principal — Claro',
    use: 'Fondos blancos',
    bg: '#FFFFFF',
    preview: ({ size }) => (
      <div className="d-flex align-items-center gap-2">
        <LogoMark size={size} bgOverride="#0D1B2A" />
        <div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.6rem', letterSpacing: '0.18em', color: '#0D1B2A' }}>LUMA</div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.5rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>Digital Studio</div>
        </div>
      </div>
    ),
  },
  {
    name: 'Variante Azul',
    use: 'Solo fondo azul de marca',
    bg: '#2563EB',
    preview: ({ size }) => (
      <div className="d-flex align-items-center gap-2">
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="14" fill="rgba(255,255,255,0.15)"/>
          <rect x="16" y="12" width="10" height="36" rx="2" fill="white"/>
          <rect x="16" y="38" width="32" height="10" rx="2" fill="white"/>
          <circle cx="48" cy="16" r="4" fill="rgba(255,255,255,0.9)"/>
        </svg>
        <div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.6rem', letterSpacing: '0.18em', color: '#fff' }}>LUMA</div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.5rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>Digital Studio</div>
        </div>
      </div>
    ),
  },
  {
    name: 'Wordmark',
    use: 'Headers y firmas',
    bg: '#162236',
    preview: () => (
      <div className="text-center">
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 600, color: '#fff', letterSpacing: '0.28em' }}>LUMA</div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.48rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#3B82F6', marginTop: 4 }}>Digital Studio</div>
      </div>
    ),
  },
  {
    name: 'Ícono — Escalas',
    use: 'Avatar, favicon, app',
    bg: '#0D1B2A',
    preview: () => (
      <div className="d-flex align-items-flex-end gap-3" style={{ alignItems: 'flex-end' }}>
        <LogoMark size={56} />
        <LogoMark size={40} />
        <LogoMark size={28} />
      </div>
    ),
  },
  {
    name: 'Monocromático',
    use: 'Impresión en grises',
    bg: '#E5E7EB',
    preview: ({ size }) => (
      <div className="d-flex align-items-center gap-2">
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="14" fill="#374151"/>
          <rect x="16" y="12" width="10" height="36" rx="2" fill="white"/>
          <rect x="16" y="38" width="32" height="10" rx="2" fill="white"/>
          <circle cx="48" cy="16" r="4" fill="white" opacity="0.5"/>
        </svg>
        <div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.6rem', letterSpacing: '0.18em', color: '#374151' }}>LUMA</div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.5rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>Digital Studio</div>
        </div>
      </div>
    ),
  },
]

export default function VersionesLogo() {
  return (
    <section id="s07" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">07 — Versiones de Logo</span>
            <h2 className="sec-title">Variantes <em>aprobadas</em></h2>
            <p className="sec-desc">Estas son las únicas versiones autorizadas. Úsalas según el contexto de aplicación.</p>
          </div>
        </div>

        {/* 3 columnas Bootstrap */}
        <div className="row g-3">
          {versions.map((v, i) => {
            const Preview = v.preview
            return (
              <div key={i} className="col-12 col-sm-6 col-lg-4">
                <div className="brand-card h-100">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: 160, background: v.bg, padding: 28 }}
                  >
                    <Preview size={44} />
                  </div>
                  <div className="d-flex align-items-center justify-content-between p-3" style={{ borderTop: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, marginBottom: 2 }}>{v.name}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{v.use}</div>
                    </div>
                    <a className="btn-brand" href="#" onClick={e => e.preventDefault()}>SVG</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}