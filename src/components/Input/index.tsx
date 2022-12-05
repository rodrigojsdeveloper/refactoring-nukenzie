import { Container, InputContainer } from './style'
import { Iinput } from '../../interfaces'


const Input = ({ label, register, name, error, sizeInput, autoComplete, placeholder, type, required }: Iinput) => {

  return (
    <Container>
      <div>{ label } { !!error && <span> - {error}</span> }</div>

      <InputContainer sizeInput={ sizeInput } {...register(name)} autoComplete={ autoComplete } placeholder={ placeholder } type={ type } required={ required } />
    </Container>
  )
}

export { Input }
