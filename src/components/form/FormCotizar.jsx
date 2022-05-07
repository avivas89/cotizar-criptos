import {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../../hooks/useSelectMonedas'
import Message from '../helpers/Message'

import {monedas} from '../data/monedas'

const InputSubmit = styled.input`
   display: block;
   width: 100%;
   border: 0;
   border-radius: 5px;
   padding: 8px 15px;
   font-size: 1rem;
   font-family: 'Montserrat', sans-serif; 
   font-weight: 600;
   color: #fff;
   background-color: #FF1C7D;
   text-transform: uppercase;
   margin-top: 15px;
   transition: background-color 0.3s ease;
   &:hover {
      cursor: pointer;
      background-color: #cd1866;
   }
`

const FormCotizar = ({setMonedas}) => {

   const [message, setMessage]= useState('')
   const [criptos, setCriptos] = useState([])

   const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
   const [criptomoneda, SelectCriptos] = useSelectMonedas('Elige tu criptomoneda', criptos)

   useEffect(() => {
      const consultarAPI = async () => {
         const url = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"

         const respuesta = await fetch(url)
         const resultado = await respuesta.json()

         //Cosntruimos un nuevo arreglo
         const arrayCriptos = resultado.Data.map(cripto => {
            const objeto = {
               id: cripto.CoinInfo.Name, 
               name: cripto.CoinInfo.FullName
            }
            //Debo hacer return para que muestre el objeto de todas las criptos
            return objeto            
         })
         setCriptos(arrayCriptos)        
      }
      consultarAPI()
   }, [])
   
   const handleSubmit = e => {
      e.preventDefault()

      if([moneda, criptomoneda].includes('')) {
         setMessage('Todos los campos son obligatorios')

         return
      }

      setMessage('')
      setMonedas({
         moneda, criptomoneda
      })
   }

   return (
      <form onSubmit={handleSubmit}>
         <SelectMonedas/>
         <SelectCriptos/>
         <InputSubmit
            type="submit"
            value="Cotizar" 
         />
         {
            message && <Message tipo="error">{message}</Message>
         }
      </form>
   )
}

export default FormCotizar
