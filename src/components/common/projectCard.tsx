//icon
import { MdArrowOutward } from "../../assets/icon/index";

//style
import style from './style/projectCard.module.sass'

interface projectCardProps {
    image: string
    imagesName: string
    projectLink: string
    projectName: string
    firstData: string
    lastData: string
}


const ProjectCard: React.FC<projectCardProps> = (props) => {

    const {
        image,
        imagesName,
        projectLink,
        projectName,
        firstData,
        lastData
    } = props

    return (
        <div className={style.projectCard}>
            <div className={style.imagesCard}>
                <img
                    className={style.image}
                    src={image}
                    alt={imagesName}
                />
            </div>

            <h6 className={style.date}>{`${firstData} - ${lastData}`}</h6>

            <a href={projectLink} target={"_blank"} rel="noopener noreferrer" className={style.linkBox}>
                <h4 className={style.link}>
                    {projectName}
                    <span className={style.icon}>
                        <MdArrowOutward />
                    </span>
                </h4>
            </a>
        </div>
    )
}

export default ProjectCard