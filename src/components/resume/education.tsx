//style
import './style/education.sass'

//components
import ContentText from "./common/__content";
import DateText from "./common/__date";
import TitleText from "./common/__title";

interface educationProps {
    firstDate: string
    lastDate?: string
    title: string
    content: string
}

const Education: React.FC<educationProps> = (props) => {

    const { firstDate, lastDate, title, content } = props
    const date = lastDate ? `${firstDate} - ${lastDate}` : `${firstDate}`

    return (
        <div className="education">
            <div className='education__head'>
                <DateText date={date} />
                <TitleText title={title} />
            </div>
            <ContentText content={content} />
        </div>
    )
}

export default Education;