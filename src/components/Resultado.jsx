import styled from '@emotion/styled'

const Resulte = styled.div`
   color: #fff;
   font-family: 'Montserrat', sans-serif;
   display: flex;
   align-items: center;
   gap: 1rem;
   margin-top: 30px;
`

const Precio = styled.p`
   font-size: 1.5rem;
   span {
      font-weight: 700;
   }
`

const Texto = styled.p`
   font-size: 1rem;
   span {
      font-weight: 700;
   }
`

const Image = styled.img`
   display: block;
   width: 70px;
`

const Resultado = ({cotizacion}) => {
   const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion
   return (
      <Resulte>
         <Image
            src={`https://cryptocompare.com/${IMAGEURL}`}
         />
         <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Útlima actualización: <span>{LASTUPDATE}</span></Texto>
         </div>
      </Resulte>
   )
}

export default Resultado
