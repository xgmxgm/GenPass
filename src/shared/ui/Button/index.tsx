import { forwardRef } from 'react'
import "./Button.scss"

interface IProps {
    children: string,
    onClick?: () => void
}

export const Button = forwardRef<HTMLButtonElement, IProps>(( props, ref ) => {
    const { children, onClick } = props;

    return (
        <button ref={ref} onClick={onClick} className='btn'>
            {children}
        </button>
    )
})