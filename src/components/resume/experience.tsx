//component
import ContentText from "./common/__content"
import DateText from "./common/__date"
import TitleText from "./common/__title"

const ExperienceCard = () => {
    return (
        <div className="resume__experience">
            <DateText />
            <TitleText />
            <ContentText />
        </div>
    )
}

export default ExperienceCard