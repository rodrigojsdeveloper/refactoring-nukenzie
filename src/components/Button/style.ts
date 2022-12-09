import { IButtonStyledProps } from '../../interfaces'
import styled, { css } from 'styled-components'


const Container = styled.button<IButtonStyledProps>`

    font-weight: 500;
    font-size: 16px;

    border-radius: .25rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    ${({ size }) => {

        switch(size) {

            case 'l':
                return css`
                    width: 100%;
                    max-width: 314px;
                    height: 48px;
                `

            case 'm':
                return css`
                    padding: 0 6.5rem;
                    height: 48px;
                `

            case 's':
                return css`
                    padding: 15px 20px;
                    height: 30px;
                `

            default:
                return false
        }
    }}

    ${({ color }) => {

        switch(color) {

            case 'home':
                return css`

                    color: var(--white);
                    background-color: var(--background-button-home);
                    border-radius: 3px;
                    border: 1px solid var(--background-button-home);
                    box-shadow: var(--box-shadow-button-dashboard) 0 1px 0 0 inset;
                    touch-action: manipulation;
                    vertical-align: baseline;
                    white-space: nowrap;

                    :hover,
                    :focus {
                        background-color: var(--background-button-home-hover);
                    }

                    :focus {
                        box-shadow: 0 0 0 4px var(--background-button-home);
                    }

                    :active {
                        background-color: var(--background-button-home-hover);
                        box-shadow: none;
                    }
                `
            
            case 'dashboard':
                return css`
                
                    background-color: var(--white);
                    border: 1px solid var(--border-button);
                    box-shadow: var(--box-shadow-button) 0 1px 3px 0;
                    color: var(--color-button);
                    min-height: 3rem;
                    transition: all 250ms;
                    touch-action: manipulation;
                    vertical-align: baseline;

                    :hover,
                    :focus {
                        border-color: var(--border-color-hover-button);
                        box-shadow: var(--border-button) 0 4px 12px;
                        transform: translateY(-1px);
                        
                    }

                    :active {
                        background-color: var(--background-button-dashboard);
                        border-color: var(--border-color-hover-button);
                        box-shadow: var(--box-shadow-button) 0 2px 4px;
                        transform: translateY(0);
                    }
                `

            default:
                return false
        }
    }}
`

export { Container }
