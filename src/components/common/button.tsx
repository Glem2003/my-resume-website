//style
import style from './style/button.module.sass'

interface buttonProps {
    name: string
    icon?: React.ReactNode
    disabled?: boolean
    backgroundColor?: string
    color?: string
}

const Button: React.FC<buttonProps> = (props) => {

    const { name, icon, disabled, backgroundColor, color } = props

    return (
        <button
            style={{ backgroundColor: backgroundColor, color: color }}
            className={style.button}
            disabled={disabled}
        >
            <p>{name}</p>
            <span className={style.icon}>{icon}</span>
        </button>
    )
}

export default Button