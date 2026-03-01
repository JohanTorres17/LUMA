import Navbar from './components/Navbar.jsx'
import Cover from './components/Cover.jsx'
import LaMarca from './components/LaMarca.jsx'
import Concepto from './components/Concepto.jsx'
import Planimetria from './components/Planimetria.jsx'
import GamaCromatica from './components/GamaCromatica.jsx'
import Tipografia from './components/Tipografia.jsx'
import TamanioReserva from './components/Tamanioreserva.jsx'
import VersionesLogo from './components/VersionesLogo.jsx'
import Paletas from './components/Paletas.jsx'
import LogoBreakdown from './components/Logobreakdown.jsx'
import UsosIncorrectos from './components/Usosincorrectos.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Cover />
        <LaMarca />
        <Concepto />
        <Planimetria />
        <GamaCromatica />
        <Tipografia />
        <TamanioReserva />
        <VersionesLogo />
        <Paletas />
        <LogoBreakdown />
        <UsosIncorrectos />
      </main>
    </div>
  )
}

export default App