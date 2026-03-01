const LogoMark = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#162236"/>
    <rect x="16" y="12" width="10" height="36" rx="2" fill="white"/>
    <rect x="16" y="38" width="32" height="10" rx="2" fill="white"/>
    <rect x="30" y="12" width="3" height="16" rx="1.5" fill="#3B82F6" opacity="0.9"/>
    <circle cx="48" cy="16" r="4" fill="#2563EB"/>
  </svg>
)

const XLabel = ({ style }) => (
  <span style={{
    position: 'absolute', fontFamily: 'DM Mono, monospace',
    fontSize: '0.6rem', color: 'var(--blue)', fontWeight: 600,
    background: 'var(--off2)', padding: '0 4px', borderRadius: 3,
    ...style,
  }}>X</span>
)

const sizes = [
  { uso: 'Web / Pantalla', full: '180px', icon: '32px' },
  { uso: 'Email / App',    full: '120px', icon: '24px' },
  { uso: 'Impresión',      full: '30mm',  icon: '8mm' },
  { uso: 'Favicon',        full: '—',     icon: '16px' },
]

export default function TamanioReserva() {
  return (
    <section id="s06" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">06 — Tamaño y Área de Reserva</span>
            <h2 className="sec-title">Espacio y <em>escala</em></h2>
            <p className="sec-desc">El logo necesita espacio para respirar. El área de reserva garantiza que nunca pierda su integridad visual.</p>
          </div>
        </div>

        <div className="row g-4">

          {/* Área de reserva */}
          <div className="col-12 col-md-6">
            <div className="brand-card h-100 p-4">
              <h5 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 4 }}>Área de Reserva</h5>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: 24 }}>
                El espacio libre alrededor del logo debe ser igual a la altura del símbolo (X).
              </p>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ background: 'var(--off2)', borderRadius: 10, padding: '40px', minHeight: 180 }}
              >
                <div style={{ position: 'relative', display: 'inline-block', padding: 28, border: '1.5px dashed var(--blue)' }}>
                  <XLabel style={{ top: -8, left: '50%', transform: 'translateX(-50%)' }} />
                  <XLabel style={{ bottom: -8, left: '50%', transform: 'translateX(-50%)' }} />
                  <XLabel style={{ left: -8, top: '50%', transform: 'translateY(-50%) rotate(-90deg)' }} />
                  <XLabel style={{ right: -8, top: '50%', transform: 'translateY(-50%) rotate(90deg)' }} />
                  <div className="d-flex align-items-center gap-2">
                    <LogoMark size={36} />
                    <div>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.18em', color: 'var(--navy)' }}>LUMA</div>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.42rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)' }}>Digital Studio</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tamaños mínimos */}
          <div className="col-12 col-md-6">
            <div className="brand-card h-100 p-4">
              <h5 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 4 }}>Tamaños Mínimos</h5>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: 24 }}>
                No reducir el logo por debajo de estos valores para garantizar legibilidad.
              </p>
              <table className="w-100" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <th style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--muted)', padding: '8px 12px', textAlign: 'left', fontWeight: 500 }}>Uso</th>
                    <th style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--muted)', padding: '8px 12px', textAlign: 'right', fontWeight: 500 }}>Logo completo</th>
                    <th style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.1em', color: 'var(--muted)', padding: '8px 12px', textAlign: 'right', fontWeight: 500 }}>Solo ícono</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((s, i) => (
                    <tr key={i} style={{ borderBottom: i < sizes.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <td style={{ padding: '12px', fontSize: '0.82rem' }}>{s.uso}</td>
                      <td style={{ padding: '12px', fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'right' }}>{s.full}</td>
                      <td style={{ padding: '12px', fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'right' }}>{s.icon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}