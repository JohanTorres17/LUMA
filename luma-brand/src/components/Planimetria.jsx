const LogoMark = ({ size = 72 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#162236"/>
    <rect x="16" y="12" width="10" height="36" rx="2" fill="white"/>
    <rect x="16" y="38" width="32" height="10" rx="2" fill="white"/>
    <rect x="30" y="12" width="3" height="16" rx="1.5" fill="#3B82F6" opacity="0.9"/>
    <circle cx="48" cy="16" r="4" fill="#2563EB"/>
  </svg>
)

const specs = [
  { val: '64 × 64', label: 'Grid base (px)' },
  { val: '14px',    label: 'Border radius' },
  { val: '0.18em',  label: 'Letter spacing' },
  { val: '14px',    label: 'Gap marca' },
]

const MonoLabel = ({ children }) => (
  <span style={{
    fontFamily: 'DM Mono, monospace', fontSize: '0.6rem',
    color: 'var(--blue)', background: 'var(--off2)',
    padding: '1px 6px', borderRadius: 3,
  }}>{children}</span>
)

export default function Planimetria() {
  return (
    <section id="s03" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">03 — Planimetría</span>
            <h2 className="sec-title">Construcción <em>geométrica</em></h2>
            <p className="sec-desc">El símbolo se construye sobre una cuadrícula de 64×64 unidades con proporciones exactas y consistentes.</p>
          </div>
        </div>

        <div
          className="d-flex flex-column align-items-center gap-5 p-5"
          style={{ background: 'var(--off2)', border: '1px solid var(--border)', borderRadius: 16 }}
        >
          {/* Canvas */}
          <div style={{ position: 'relative', width: 440, height: 220, maxWidth: '100%' }}>
            {/* Grid background */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
              backgroundSize: '28px 28px', opacity: 0.6,
            }} />

            {/* Top measure */}
            <div style={{ position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', borderTop: '1px dashed var(--blue)', width: 200 }} />
            <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)' }}>
              <MonoLabel>240px</MonoLabel>
            </div>

            {/* Left measure */}
            <div style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', borderLeft: '1px dashed var(--blue)', height: 100 }} />
            <div style={{ position: 'absolute', left: 2, top: '50%', transform: 'translateY(-50%) rotate(-90deg)' }}>
              <MonoLabel>64px</MonoLabel>
            </div>

            {/* Logo centered */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex', alignItems: 'center', gap: 14, zIndex: 1,
            }}>
              <LogoMark size={72} />
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 600, letterSpacing: '0.18em', color: 'var(--navy)' }}>LUMA</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.52rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 3 }}>Digital Studio</div>
              </div>
            </div>

            {/* Right measure */}
            <div style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', borderLeft: '1px dashed var(--blue)', height: 72 }} />
            <div style={{ position: 'absolute', right: 2, top: '50%', transform: 'translateY(-50%) rotate(90deg)' }}>
              <MonoLabel>72px</MonoLabel>
            </div>
          </div>

          {/* Specs — 4 columnas Bootstrap */}
          <div className="row g-0 w-100" style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)' }}>
            {specs.map((s, i) => (
              <div key={i} className="col-6 col-md-3" style={{ background: 'var(--white)', padding: '20px', textAlign: 'center', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '1.05rem', fontWeight: 500, color: 'var(--navy)', marginBottom: 4 }}>{s.val}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}