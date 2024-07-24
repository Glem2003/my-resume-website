//style
import "./style/experience.sass"

//component
import ContentText from "./common/__content"
import DateText from "./common/__date"
import TitleText from "./common/__title"

interface experienceProps {
    firstDate: string
    lastDate?: string
    title: string
    content: string | string[]
}

const ExperienceCard: React.FC<experienceProps> = (props) => {

    const { lastDate, firstDate, title, content } = props

    const date = lastDate ? `${firstDate} - ${lastDate}` : `${firstDate}`

    return (
        <div className="experience">
            <div className="experience__head">
                <DateText date={date} />
                <TitleText title={title} />
            </div>
            <ContentText content={content} />
        </div>
    )
}

export default ExperienceCard