//style
import style from './style/__date.module.sass'

interface dateProps {
    date: string
}

const DateText: React.FC<dateProps> = (props) => {

    const { date } = props

    return (
        <p className={style.date}>{date}</p>
    )
}

export default DateText