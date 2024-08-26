//style
import './style/resume.sass'

//hook
import { useTranslation } from 'react-i18next';
import useActive from '../../hook/useActive';

//component
import { DefaultPages, Title, List, ExperienceCard, ToolsOfChoice, Education, Hobbies } from '../../components/index';

const ResumePage = () => {

    const { t } = useTranslation()

    // Take content
    const list: any[] = t('resume.list', { returnObjects: true }) as any[];
    const experience: any[] = t('resume.experience', { returnObjects: true }) as any[];
    const toolsInfo: any[] = t('resume.toolsOfChoice', { returnObjects: true }) as any[];
    const education: any[] = t('resume.education', { returnObjects: true }) as any[];
    const hobbies: any[] = t('resume.hobbies', { returnObjects: true }) as any[];

    const { active, handleClick } = useActive()

    return (
        <DefaultPages>

            <div className="resume">

                <section className="resume__head">
                    <Title title={t('resume.webTitle')} />
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

                    {active === 'toolsOfChoice' && toolsInfo.map((item, index) => (
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