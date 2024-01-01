import Navegacao from './containers/Navegacao'
import { ContainerGlobal, ContainerPadrao, EstiloGlobal } from './style'

function App() {
  return (
    <ContainerGlobal>
      <EstiloGlobal />
      <ContainerPadrao>
        <Navegacao />
      </ContainerPadrao>
    </ContainerGlobal>
  )
}

export default App
