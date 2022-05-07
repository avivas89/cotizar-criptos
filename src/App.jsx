import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import FormCotizar from './components/form/FormCotizar'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
import imagenCripto from './img/imagen-criptos.png'

const Container = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Montserrat', sans-serif; 
  color: #fff;
  text-align: center;
  font-weight: 500;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 2rem;
  &:after {
    content: '';
    width: 100px;
    height: 4px;
    background-color: #FF1C7D;
    display: block;
    margin: 10px auto 0;
  }
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [cotizacion, setCotizacion] = useState({})
  const [cargando, setCargando]= useState(false)

  useEffect(() => {
   if(Object.keys(monedas).length > 0) {
    const cotizarCripto = async () => {
      setCargando(true)
      setCotizacion({})
      const { moneda, criptomoneda} = monedas
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      setCotizacion(resultado.DISPLAY[criptomoneda][moneda])
      setCargando(false)
      
    }

     cotizarCripto()
     
   }
  }, [monedas])
  
  return (
    <Container>
      <Image 
        src={imagenCripto}
        alt="Criptomonedas"
      />
      <div>
        <Heading>Cotizar criptomonedas</Heading>
        <FormCotizar
          setMonedas = {setMonedas}
        />
        {cargando && <Spinner/>}
        {cotizacion.PRICE && <Resultado cotizacion={cotizacion}/>}
      </div>      
    </Container>
  )
}

export default App
