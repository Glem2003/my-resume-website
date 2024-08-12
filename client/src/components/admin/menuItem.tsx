import style from './style/menuItem.module.sass'

interface menuItemProps {
    lists?: Array<{
        text: string,
        icon?: React.ReactNode,
        listClick?: () => void
    }>
}

const MenuItem: React.FC<menuItemProps> = (props) => {

    const { lists } = props

    return (
        <div className={style.menuItem}>
            {lists?.map((item, index) => (
                <div
                    key={index}
                    className={style.menuItem__list}
                    onClick={item.listClick}
                >
                    <p>{item.text}</p>
                    {item.icon && <span>{item.icon}</span>}
                </div>
            ))}
        </div>
    )
}

export default MenuItem