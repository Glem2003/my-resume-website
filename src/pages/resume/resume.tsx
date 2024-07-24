import React from 'react';

//style
import './style/resume.sass'

//content
import { resumeContent } from "../../content/index";

//component
import DefaultPages from "../../components/defaultPages";
import Title from "../../components/common/title";
import List from '../../components/resume/list';
import ExperienceCard from '../../components/resume/experience';

const ResumePage = () => {

    //take content
    const {
        webTitle,
        list
    } = resumeContent

    const [active, setActive] = React.useState<string>('experience');

    const handleClick = (id: string) => {
        setActive(id)
    }

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

                    {active === 'experience' && <ExperienceCard />}
                    
                </main>

            </div>

        </DefaultPages>
    )
}

export default ResumePage;