//style
import style from './style/textInfo.module.sass'

interface textInfoProps {
    title: string
    description: string
}

const TextInfo: React.FC<textInfoProps> = (props) => {

    const {
        title,
        description
    } = props

    return (
        <div className={style.textInfo}>
            <h3 className={style.title}>{title}</h3>
            <h6 className={style.description}>{description}</h6>
        </div>
    )
}

export default TextInfo