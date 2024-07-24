//style
import style from './style/list.module.sass'

interface listProps {
    listText: string
    listClass?: string
    listHandle?: () => void
}

const List: React.FC<listProps> = (props) => {

    const {
        listText,
        listClass,
        listHandle
    } = props

    const listClassName = listClass ? `${style.list} ${style[`${listClass}`]}` : style.list

    return (
        <li className={listClassName} onClick={listHandle}>{listText}</li>
    )
}

export default List