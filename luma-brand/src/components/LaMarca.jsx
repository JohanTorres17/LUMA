const pillars = [
  { icon: '🌐', title: 'Sitios Web', desc: 'Diseño y desarrollo de sitios completos para negocios, marcas personales y portafolios profesionales.' },
  { icon: '⚡', title: 'Landing Pages', desc: 'Páginas de aterrizaje optimizadas para convertir visitantes en clientes desde el primer segundo.' },
  { icon: '📱', title: 'Aplicaciones Web', desc: 'Desarrollo de apps web funcionales, responsivas y escalables adaptadas a cada necesidad.' },
]

const valores = [
  { word: 'Claridad',  desc: 'Código limpio y resultados concretos' },
  { word: 'Precisión', desc: 'Cada píxel y línea tiene propósito' },
  { word: 'Estilo',    desc: 'Funcional no significa aburrido' },
]

export default function LaMarca() {
  return (
    <section id="s01" className="brand-section">
      <div className="container">

        {/* Header */}
        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">01 — La Marca</span>
            <h2 className="sec-title">¿Qué es <em>LUMA</em>?</h2>
            <p className="sec-desc">
              LUMA es un estudio de desarrollo web y digital freelance que diseña y construye
              sitios web, landing pages y aplicaciones para emprendedores y negocios que quieren
              destacar en internet.
            </p>
          </div>
        </div>

        {/* Main grid — 2 columnas */}
        <div className="row g-5 align-items-start">

          {/* Columna izquierda — frase + valores */}
          <div className="col-12 col-md-6">
            <blockquote
              className="mb-4"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
                fontWeight: 400, fontStyle: 'italic',
                color: 'var(--navy)', lineHeight: 1.35,
                paddingLeft: '20px',
                borderLeft: '3px solid var(--blue)',
                margin: 0,
              }}
            >
              "No solo construimos lo que pides — construimos lo que necesitas para brillar digitalmente."
            </blockquote>

            {/* Valores — 3 columnas Bootstrap */}
            <div className="row g-3 mt-2">
              {valores.map(v => (
                <div className="col-12 col-sm-4" key={v.word}>
                  <div className="text-center p-3 brand-card h-100">
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.3rem', fontWeight: 600,
                      color: 'var(--navy)', marginBottom: 4,
                    }}>{v.word}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — pilares */}
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column gap-3">
              {pillars.map(p => (
                <div
                  key={p.title}
                  className="d-flex gap-3 align-items-start p-3 brand-card"
                  style={{ borderRadius: 10 }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 8,
                    background: 'var(--navy)', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem',
                  }}>{p.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: 3 }}>{p.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.5 }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}