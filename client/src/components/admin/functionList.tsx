import style from './style/functionList.module.sass'

interface functionListProps {
    text: string
    icon?: React.ReactNode
}

const FunctionList: React.FC<functionListProps> = (props) => {

    const { text, icon } = props

    return (
        <span className={style.functionList}>
            {text}{icon}
        </span>
    )
}

export default FunctionList