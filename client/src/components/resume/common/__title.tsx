//style
import style from './style/__title.module.sass'

interface titleTextProps {
    title: string
}

const TitleText: React.FC<titleTextProps> = (props) => {

    const { title } = props

    return (
        <h3 className={style.title}>{title}</h3>
    )
}

export default TitleText;