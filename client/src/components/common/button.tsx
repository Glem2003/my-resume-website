//style
import style from './style/button.module.sass'

interface buttonProps {
    name?: string
    icon?: React.ReactNode
    disabled?: boolean
    btnClick?: () => void
    btnClassName?: string
}

const Button: React.FC<buttonProps> = (props) => {

    const { name, icon, disabled, btnClick, btnClassName } = props

    const className = btnClassName ? `${style.button} ${btnClassName}` : style.button

    return (
        <button
            className={className}
            disabled={disabled}
            onClick={btnClick}
        >
            {name && <p>{name}</p>}
            {icon && <span className={style.icon}>{icon}</span>}
        </button>
    )
}

export default Button