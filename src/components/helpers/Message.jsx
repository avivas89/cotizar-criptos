import styled from '@emotion/styled'

const BoxMessage = styled.div`
  border: 2px solid green;
  border-radius: 5px;
  color: #fff;
  padding: 8px 10px;
  font-size: .9rem;
  margin-top: 10px;
  font-family: 'Montserrat', sans-serif;
  &.error {
    border-color: red;    
  }
`
const Message = ({children, tipo}) => {
  return (
    <BoxMessage className={tipo}>
      {children}
    </BoxMessage>
  )
}

export default Message
