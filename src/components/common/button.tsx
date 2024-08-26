//style
import style from './style/button.module.sass'

interface buttonProps {
    name?: string
    icon?: React.ReactNode
    disabled?: boolean
    btnClick?: () => void
    btnClassName?: string,
    type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<buttonProps> = (props) => {

    const { name, icon, disabled, btnClick, btnClassName, type = 'button' } = props

    const className = icon ? style.button : `${style.button} ${style['button--onlyName']}`

    const btnClass = btnClassName || ''

    return (
        <button
            className={`${className} ${btnClass}`}
            disabled={disabled}
            onClick={btnClick}
            type={type}
        >
            {name && <p>{name}</p>}
            {icon && <span className={style.icon}>{icon}</span>}
        </button>
    )
}

export default Button