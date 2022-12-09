import { IButtonProps } from '../../interfaces'
import { Container } from './style'


const Button = ({ children, disabled, onClick, type, size, color }: IButtonProps) => {

    return (
        <Container size={ size } color={ color } disabled={ disabled } onClick={ onClick } type={ type }>
            { children }
        </Container>
    )
}

export { Button }
