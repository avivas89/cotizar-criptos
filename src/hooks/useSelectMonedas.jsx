import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
   color:#fff;
   font-size: 1.2rem;
   font-family: 'Montserrat', sans-serif; 
   font-weight: 500;
   display: block;
   margin: 15px 0 10px;
`

const Select = styled.select`
   width:100%;
   font-size: 1rem;
   font-family: 'Montserrat', sans-serif; 
   font-weight: 400;
   background-color: #fff;
   border-radius: 5px;
   border: 0;
   outline: none;
   padding: 8px 15px;

`


const useSelectMonedas = (label, options) => {

   const [state, setState] = useState('')

   const SelectMonedas = () => (
      <>
         <Label>{label}</Label>
         <Select
            value={state}
            onChange={e => setState(e.target.value)}
         >
            <option value="">Seleccione</option>
            {options.map(opt => (
               <option
                  key={opt.id}
                  value={opt.id}
               >{opt.name}
               </option>
            ))}
         </Select>
      </>      
   ) 
   return [state, SelectMonedas]
}

export default useSelectMonedas
