import { useState, useEffect } from 'react'

const LogoMark = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect width="64" height="64" rx="14" fill="#162236"/>
    <rect x="16" y="12" width="10" height="36" rx="2" fill="white"/>
    <rect x="16" y="38" width="32" height="10" rx="2" fill="white"/>
    <rect x="30" y="12" width="3" height="16" rx="1.5" fill="#3B82F6" opacity="0.9"/>
    <circle cx="48" cy="16" r="4" fill="#2563EB"/>
  </svg>
)

const navLinks = [
  { href: '#s01', label: 'La Marca' },
  { href: '#s02', label: 'Concepto' },
  { href: '#s04', label: 'Colores' },
  { href: '#s05', label: 'Tipografía' },
  { href: '#s07', label: 'Versiones' },
  { href: '#s09', label: 'Breakdown' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: scrolled ? 'rgba(13,27,42,0.97)' : 'rgba(13,27,42,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        transition: 'background 0.3s',
        padding: '12px 0',
      }}
    >
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand d-flex align-items-center gap-2 text-white text-decoration-none" href="#cover">
          <LogoMark size={28} />
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.1em' }}>
            LUMA
          </span>
        </a>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-1">
            {navLinks.map(link => (
              <li className="nav-item" key={link.href}>
                <a
                  className="nav-link"
                  href={link.href}
                  style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', fontWeight: 500 }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}