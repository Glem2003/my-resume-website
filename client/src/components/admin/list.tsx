import style from './style/list.module.sass'

interface listProps {
    text: string
}

const List: React.FC<listProps> = (props) => {

    const { text } = props

    return (
        <li className={`${style.list} ${style['list--active']}`}>{text}</li>
    )
}

export default List