import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'

const SharedButtonStyle = css`
    border-radius: 6px;
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
    transition: all 0.25s;
    font-weight: bold;
    height: fit-content;
    width: fit-content;
    cursor: pointer;
    ${props => {
        if (props.primary)
            return css`
                border: 2px solid var(--color-red);
                color: var(--color-white);
                background: var(--color-red);

                &:hover {
                    background-color: var(--color-red-3);
                    border-color: var(--color-red-3);
                }
            `
        if (props.secondary)
            return css`
                border: 2px solid var(--color-grey-5);
                color: var(--color-black);
                background: transparent;

                &:hover {
                    background-color: rgba(0, 0, 0, 0.08);
                }
            `
        if (props.flat)
            return css`
                background: transparent;
                color: var(--color-red);
                border: none;

                &:hover {
                    background: rgba(255, 68, 79, 0.08);
                }
            `
    }}
    ${props => {
        if (props.disabled)
            return css`
                pointer-events: none;
                opacity: 0.32;
            `
    }}
    ${space}

    &:focus,
    &:active {
        outline: none;
        transform: scale(0.95);
    }
`

export const LinkButton = styled.a`
    ${SharedButtonStyle}
    text-align: center;
    text-decoration: none;
`

const Button = styled.button`
    ${SharedButtonStyle}
`

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
}

export default Button
