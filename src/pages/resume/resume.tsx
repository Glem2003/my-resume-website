//style
import './style/resume.sass'

//hook
import useActive from '../../hook/useActive';

//content
import { resumeContent } from "../../content/index";

//component
import DefaultPages from "../../components/defaultPages";
import Title from "../../components/common/title";
import List from '../../components/resume/list';
import ExperienceCard from '../../components/resume/experience';
import ToolsOfChoice from '../../components/resume/toolsOfChoice';
import Education from '../../components/resume/education';
import Hobbies from '../../components/resume/hobbies';

const ResumePage = () => {

    //take content
    const { webTitle, list, experience, toolsInfo, education, hobbies } = resumeContent

    const { active, handleClick } = useActive()

    return (
        <DefaultPages>

            <div className="resume">

                <section className="resume__head">
                    <Title title={webTitle} />
                </section>

                <div className="resume__slide">
                    <ul>
                        {list.map((item) => (
                            <List
                                {...item}
                                listClass={active === item.key ? 'list--active' : ''}
                                listHandle={() => handleClick(item.key)}
                            />
                        ))}
                    </ul>
                </div>

                <main className="resume__main">

                    {active === 'experience' && experience.map((item, index) => (
                        <ExperienceCard
                            key={index}
                            {...item}
                        />
                    ))}

                    {active === 'tools of choice' && toolsInfo.map((item, index) => (
                        <ToolsOfChoice
                            key={index}
                            {...item}
                        />
                    ))}

                    {active === 'education' && education.map((item, index) => (
                        <Education
                            key={index}
                            {...item}
                        />
                    ))}

                    {active === 'hobbies' && hobbies.map((item, index) => (
                        <Hobbies
                            key={index}
                            {...item}
                        />
                    ))}

                </main>

            </div>

        </DefaultPages>
    )
}

export default ResumePage;