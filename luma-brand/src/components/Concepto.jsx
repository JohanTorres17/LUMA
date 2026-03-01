const LogoMark = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#162236"/>
    <rect x="16" y="12" width="10" height="36" rx="2" fill="white"/>
    <rect x="16" y="38" width="32" height="10" rx="2" fill="white"/>
    <rect x="30" y="12" width="3" height="16" rx="1.5" fill="#3B82F6" opacity="0.9"/>
    <circle cx="48" cy="16" r="4" fill="#2563EB"/>
  </svg>
)

const items = [
  {
    letter: 'L',
    color: 'var(--blue)',
    title: 'La letra L — estructura',
    desc: 'La L geométrica construida a 90° es la columna vertebral del símbolo. Representa fundamento sólido, arquitectura técnica y la base sobre la que se construyen los proyectos de los clientes.',
  },
  {
    letter: '↑',
    color: 'var(--blue-lt)',
    title: 'El rayo de luz — luminosidad',
    desc: 'La línea vertical azul es el elemento de identidad más importante. Es literalmente "luma" — luminosidad en tecnología de imagen. Representa la claridad que LUMA aporta a sus clientes.',
  },
  {
    letter: '●',
    color: 'var(--blue)',
    title: 'El punto focal — origen',
    desc: 'El círculo azul guía la mirada hacia arriba. Evoca un píxel, un nodo de red o el cursor de inicio de un nuevo proyecto. Es el origen de todo.',
  },
  {
    letter: 'T',
    color: 'var(--muted)',
    title: 'Cormorant Garamond — autoridad',
    desc: 'Una serif de alto contraste que rompe con la estética genérica del mundo tech. Transmite que LUMA no es un dev más — es un estudio con criterio estético.',
  },
]

export default function Concepto() {
  return (
    <section id="s02" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">02 — Concepto y Simbología</span>
            <h2 className="sec-title">Por qué este <em>logotipo</em></h2>
            <p className="sec-desc">Cada elemento del símbolo fue diseñado con intención. Nada es decorativo — todo comunica.</p>
          </div>
        </div>

        <div className="row g-5 align-items-center">

          {/* Logo grande */}
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: 'var(--navy)', borderRadius: 20,
                padding: '64px', width: '100%',
                background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.15) 0%, transparent 70%), var(--navy)',
              }}
            >
              <LogoMark size={160} />
            </div>
          </div>

          {/* Items */}
          <div className="col-12 col-md-7">
            {items.map((item, i) => (
              <div
                key={i}
                className="d-grid py-4"
                style={{
                  gridTemplateColumns: '48px 1fr',
                  gap: 16,
                  borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none',
                  display: 'grid',
                }}
              >
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2rem', fontWeight: 700,
                  color: item.color, lineHeight: 1,
                }}>{item.letter}</div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}