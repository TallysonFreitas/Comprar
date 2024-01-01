import { SessaoContainer } from './style'

const Navegacao = () => {
  const ItensMenu = [
    'Ferramentas',
    'Ofertas do dia',
    'Eletroportáteis',
    'Comércio e Industria',
    'Brinquedos',
    'Automotivo',
    'Casa',
    'Utilidade Doméstica'
  ]

  return (
    <SessaoContainer>
      <h2>Tem no magalu</h2>
      <ul>
        {ItensMenu.map((each) => (
          <li key={each}>
            <a href="#">
              <img src="https://placehold.co/400" alt="" />
              <p>{each}</p>
            </a>
          </li>
        ))}
      </ul>
    </SessaoContainer>
  )
}

export default Navegacao
