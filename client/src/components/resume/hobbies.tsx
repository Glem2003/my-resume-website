//style
import './style/hobbies.sass'

//components
import DateText from "./common/__date";
import TitleText from "./common/__title";

interface hobbiesProps {
    subtitle: string
    title: string
}

const Hobbies: React.FC<hobbiesProps> = (props) => {

    const { subtitle, title } = props

    return (
        <div className="hobbies">
            <DateText date={subtitle}/>
            <TitleText title={title}/>
        </div>
    )
}

export default Hobbies;