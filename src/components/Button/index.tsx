import { IButton } from '../../interfaces'
import { Container } from './style'


const Button = ({ children, disabled, onClick, type, size, color }: IButton) => {

    return (
        <Container size={ size } color={ color } disabled={ disabled } onClick={ onClick } type={ type }>
            { children }
        </Container>
    )
}

export { Button }
