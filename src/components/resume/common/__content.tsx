//style
import style from './style/__content.module.sass'

interface contentProps {
    content: string | string[]
}

const ContentText: React.FC<contentProps> = (props) => {

    const { content } = props

    return (
        typeof content === 'string' ? (
            <p className={style.content}>{content}</p>
        ) : (
            <ul>
                {content.map((item, index) => (
                    <li key={index} className={`${style.content} ${style['content--number']}`}>{item}</li>
                ))}
            </ul>
        )
    )
}

export default ContentText