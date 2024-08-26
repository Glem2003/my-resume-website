//style
import './style/toolsOfChoice.sass'

//components
import DateText from "./common/__date"
import TitleText from "./common/__title"

interface toolsOfChoiceProps {
    subtitle: string
    title: string
}

const ToolsOfChoice: React.FC<toolsOfChoiceProps> = (props) => {

    const {
        subtitle,
        title
    } = props

    return (
        <div className="toolsInfo">
            <DateText date={subtitle} />
            <TitleText title={title}/>
        </div>
    )
}

export default ToolsOfChoice