import style from './style/input.module.sass'

interface inputProps {
    icon?: React.ReactNode
    inputType: string
    placeholder?: string
}

const LoginInput: React.FC<inputProps> = (props) => {

    const { icon, inputType, placeholder } = props

    return (
        <div className={style.LoginInput}>

            <div className={style.icon}>
                {icon}
            </div>

            <input type={inputType} placeholder={placeholder} className={style.input} />
            
        </div>
    )
}

export default LoginInput