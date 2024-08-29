//style
import style from './style/title.module.sass';

interface titleProps {
    title: string
}

const Title: React.FC<titleProps> = (props) => {

    const { title } = props

    const titleClass = title.length < 6 ? style['title--small'] : ''

    return (
        <h1 className={`${style.title} ${titleClass}`}>{title}</h1>
    )
}

export default Title