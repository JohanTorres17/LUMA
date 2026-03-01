const fonts = [
  {
    tag: 'Display / Títulos',
    name: 'Cormorant Garamond',
    desc: 'Serif de alto contraste para títulos y display. Diferencia a LUMA de cualquier estudio tech genérico.',
    weights: ['300', '400', '600', '700', 'Italic'],
    sample: (
      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3.8rem)', fontWeight: 600, lineHeight: 1, color: 'var(--navy)', letterSpacing: '-0.02em' }}>
        Claridad digital desde el primer pixel.
      </div>
    ),
  },
  {
    tag: 'Cuerpo / Interfaz',
    name: 'DM Sans',
    desc: 'Sans-serif humanista para cuerpo de texto, UI y comunicación. Neutral, legible y con personalidad.',
    weights: ['300', '400', '500', '600'],
    sample: (
      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.75, color: 'var(--muted)', maxWidth: 480 }}>
        Construimos experiencias digitales que funcionan con precisión técnica y se ven con criterio estético. Cada proyecto es una colaboración entre tu visión y nuestra ejecución.
      </div>
    ),
  },
  {
    tag: 'Código / Datos',
    name: 'DM Mono',
    desc: 'Monoespaciada para colores HEX, versiones y especificaciones técnicas en presentaciones.',
    weights: ['400', '500'],
    sample: (
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--navy)' }}>
        <span style={{ color: 'var(--blue)' }}>const</span> luma = {'{'}<br/>
        &nbsp;&nbsp;color: <span style={{ color: '#16a34a' }}>'#2563EB'</span>,<br/>
        &nbsp;&nbsp;version: <span style={{ color: '#16a34a' }}>'1.0.0'</span>,<br/>
        &nbsp;&nbsp;studio: <span style={{ color: 'var(--blue)' }}>true</span><br/>
        {'}'}
      </div>
    ),
  },
]

const hierarchy = [
  { label: 'H1 — Hero',      sample: 'LUMA Studio',            font: 'Cormorant Garamond, serif', size: '2rem',    weight: 700, tracking: '-0.02em' },
  { label: 'H2 — Sección',   sample: 'Diseño Digital',         font: 'Cormorant Garamond, serif', size: '1.6rem',  weight: 600 },
  { label: 'H3 — Subsección',sample: 'Desarrollo Web',         font: 'Cormorant Garamond, serif', size: '1.25rem', weight: 600 },
  { label: 'Body principal',  sample: 'Texto de párrafo principal',     font: 'DM Sans, sans-serif',       size: '1rem',    weight: 400 },
  { label: 'Body muted',      sample: 'Texto secundario y descripciones', font: 'DM Sans, sans-serif',     size: '0.875rem',weight: 300, color: 'var(--muted)' },
  { label: 'Label / Tag',     sample: 'ETIQUETA · CÓDIGO',     font: 'DM Mono, monospace',        size: '0.72rem', weight: 500, tracking: '0.15em', upper: true, color: 'var(--blue)' },
]

export default function Tipografia() {
  return (
    <section id="s05" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">05 — Tipografía</span>
            <h2 className="sec-title">Sistema <em>tipográfico</em></h2>
            <p className="sec-desc">Tres familias elegidas para cubrir display, cuerpo de texto e interfaces técnicas.</p>
          </div>
        </div>

        {/* Font blocks */}
        <div className="d-flex flex-column gap-3 mb-4">
          {fonts.map(f => (
            <div key={f.name} className="row g-0 brand-card" style={{ borderRadius: 14 }}>
              <div className="col-12 col-lg-8" style={{ padding: '40px 48px' }}>
                {f.sample}
              </div>
              <div
                className="col-12 col-lg-4 d-flex flex-column justify-content-center gap-3"
                style={{ padding: '32px', borderLeft: '1px solid var(--border)', background: 'var(--off)' }}
              >
                <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blue)' }}>{f.tag}</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 600 }}>{f.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.55 }}>{f.desc}</div>
                <div className="d-flex flex-wrap gap-2">
                  {f.weights.map(w => (
                    <span key={w} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', padding: '3px 8px', border: '1px solid var(--border)', borderRadius: 100, color: 'var(--muted)' }}>{w}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hierarchy table */}
        <div className="brand-card" style={{ borderRadius: 14, overflow: 'hidden' }}>
          <div className="row g-0" style={{ background: 'var(--off)', borderBottom: '1px solid var(--border)', padding: '12px 24px' }}>
            <div className="col-3" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase' }}>Estilo</div>
            <div className="col-5" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase' }}>Muestra</div>
            <div className="col-2 text-end" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase' }}>Tamaño</div>
            <div className="col-2 text-end" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase' }}>Peso</div>
          </div>
          {hierarchy.map((h, i) => (
            <div key={i} className="row g-0 align-items-center" style={{ padding: '14px 24px', borderBottom: i < hierarchy.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div className="col-3" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'var(--muted)' }}>{h.label}</div>
              <div className="col-5" style={{ fontFamily: h.font, fontSize: h.size, fontWeight: h.weight, letterSpacing: h.tracking, textTransform: h.upper ? 'uppercase' : 'none', color: h.color || 'var(--text)' }}>{h.sample}</div>
              <div className="col-2 text-end" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'var(--muted)' }}>{h.size}</div>
              <div className="col-2 text-end" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'var(--muted)' }}>{h.weight}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}