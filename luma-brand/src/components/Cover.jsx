const LogoMark = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#162236"/>
    <rect x="16" y="12" width="10" height="36" rx="2" fill="white"/>
    <rect x="16" y="38" width="32" height="10" rx="2" fill="white"/>
    <rect x="30" y="12" width="3" height="16" rx="1.5" fill="#3B82F6" opacity="0.9"/>
    <circle cx="48" cy="16" r="4" fill="#2563EB"/>
  </svg>
)

const meta = [
  { label: 'Versión',     value: '1.0.0' },
  { label: 'Actualizado', value: 'Enero 2025' },
  { label: 'Autor',       value: 'LUMA Studio' },
  { label: 'Secciones',   value: '10' },
]

export default function Cover() {
  return (
    <section
      id="cover"
      style={{
        minHeight: '100vh',
        background: 'var(--navy)',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 75% 30%, rgba(37,99,235,0.18) 0%, transparent 60%)',
      }} />

      {/* Background letter */}
      <div style={{
        position: 'absolute', right: '-60px', top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(200px, 28vw, 420px)',
        fontWeight: 700, fontStyle: 'italic',
        color: 'rgba(255,255,255,0.025)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>L</div>

      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">

            {/* Tag */}
            <div className="d-flex align-items-center gap-2 mb-4">
              <div style={{ width: 32, height: 1, background: 'var(--blue-lt)' }} />
              <span style={{
                fontFamily: 'DM Mono, monospace', fontSize: '0.68rem',
                letterSpacing: '0.2em', color: 'var(--blue-lt)',
              }}>
                Manual de Identidad de Marca — 2025
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              fontWeight: 700, color: '#fff',
              lineHeight: 0.9, letterSpacing: '-0.01em',
              marginBottom: '8px',
            }}>LUMA</h1>

            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: 300, fontStyle: 'italic',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.04em', marginBottom: '56px',
            }}>Digital Studio</p>

            {/* Meta */}
            <div
              className="d-flex flex-wrap gap-4 pt-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              {meta.map(m => (
                <div key={m.label}>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '0.6rem',
                    letterSpacing: '0.15em', color: 'rgba(255,255,255,0.25)',
                    textTransform: 'uppercase', marginBottom: 4,
                  }}>{m.label}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Logo float */}
          <div className="col-12 col-lg-4 d-none d-lg-flex justify-content-center">
            <div style={{ opacity: 0.12 }}>
              <LogoMark size={280} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}