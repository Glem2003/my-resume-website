import style from './style/list.module.sass'

interface listProps {
    text?: string
    icon?: React.ReactNode
    className?: string
    listClick?: () => void
}

const List: React.FC<listProps> = (props) => {

    const { text, icon, className, listClick } = props

    const listClassName = className ? `${style.list} ${style[`list${className}`]}` : style.list

    return (
        <li className={listClassName}
            onClick={listClick}
        >
            <span>{icon}</span>
            {text}
        </li>
    )
}

export default List