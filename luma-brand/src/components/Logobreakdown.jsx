const LogoMark = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#162236"/>
    <rect x="16" y="12" width="10" height="36" rx="2" fill="white"/>
    <rect x="16" y="38" width="32" height="10" rx="2" fill="white"/>
    <rect x="30" y="12" width="3" height="16" rx="1.5" fill="#3B82F6" opacity="0.9"/>
    <circle cx="48" cy="16" r="4" fill="#2563EB"/>
  </svg>
)

const parts = [
  {
    num: '01',
    title: 'Contenedor cuadrado',
    desc: 'Fondo cuadrado de 64×64px con esquinas redondeadas (r:14). Actúa como espacio seguro del símbolo y garantiza consistencia en cualquier contexto digital.',
    color: '#162236', label: 'Navy Deep',
  },
  {
    num: '02',
    title: 'Barra vertical de la L',
    desc: 'Rectángulo de 10×36px desde y:12. Proporciones 5.6:1. La altura cubre el 69% del espacio disponible, comunicando solidez y verticalidad.',
    color: '#FFFFFF', label: 'Blanco puro', border: true,
  },
  {
    num: '03',
    title: 'Base horizontal de la L',
    desc: 'Rectángulo de 32×10px desde x:16 y:38. Ocupa el 68.75% del ancho del ícono. Proporciona estabilidad visual y equilibra el peso de la composición.',
    color: '#FFFFFF', label: 'Blanco puro', border: true,
  },
  {
    num: '04',
    title: 'Rayo de luz (acento azul)',
    desc: 'Línea de 3×16px con r:1.5 en x:30. El elemento de identidad más característico. Une la vertical con el punto focal y representa la "luma" del nombre.',
    color: '#3B82F6', label: 'Blue Light',
  },
  {
    num: '05',
    title: 'Punto focal',
    desc: 'Círculo de r:4 en la posición (48,16). Primer punto donde la vista aterriza. Evoca un píxel, nodo o el cursor de un nuevo inicio.',
    color: '#2563EB', label: 'Electric Blue',
  },
]

const Annotation = ({ style, children }) => (
  <div style={{
    position: 'absolute', fontFamily: 'DM Mono, monospace',
    fontSize: '0.58rem', color: '#3B82F6',
    display: 'flex', alignItems: 'center', gap: 6,
    whiteSpace: 'nowrap', ...style,
  }}>
    {children}
  </div>
)

const Line = () => <div style={{ width: 32, height: 1, background: '#3B82F6', opacity: 0.5, flexShrink: 0 }} />

export default function LogoBreakdown() {
  return (
    <section id="s09" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">09 — Logo Breakdown</span>
            <h2 className="sec-title">Anatomía <em>detallada</em></h2>
            <p className="sec-desc">Disección completa de cada componente del logo, sus proporciones y valores exactos para su reproducción.</p>
          </div>
        </div>

        <div className="row g-5 align-items-start">

          {/* Logo canvas */}
          <div className="col-12 col-md-5">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.15) 0%, transparent 70%), #0D1B2A',
                borderRadius: 16, padding: '64px', position: 'relative', minHeight: 300,
              }}
            >
              <Annotation style={{ top: 24, left: 28 }}><Line />Barra vertical</Annotation>
              <Annotation style={{ top: 24, right: 28, flexDirection: 'row-reverse' }}>Punto focal<Line /></Annotation>
              <Annotation style={{ bottom: 24, left: 28 }}><Line />Base horizontal</Annotation>
              <Annotation style={{ bottom: 24, right: 28, flexDirection: 'row-reverse' }}>Rayo de luz<Line /></Annotation>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <LogoMark size={120} />
              </div>
            </div>
          </div>

          {/* Parts list */}
          <div className="col-12 col-md-7">
            {parts.map((p, i) => (
              <div
                key={i}
                className="d-grid py-4"
                style={{
                  display: 'grid', gridTemplateColumns: '44px 1fr', gap: 16,
                  borderBottom: i < parts.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'var(--blue)', fontWeight: 500, paddingTop: 2 }}>{p.num}</div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: 5 }}>{p.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: 8 }}>{p.desc}</div>
                  <div className="d-flex align-items-center gap-2">
                    <div style={{
                      width: 10, height: 10, borderRadius: '50%',
                      background: p.color, flexShrink: 0,
                      border: p.border ? '1px solid #ddd' : 'none',
                    }} />
                    <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'var(--muted)' }}>
                      {p.color} — {p.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}