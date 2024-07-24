//style
import './style/project.sass';

//content
import { projectContent } from "../../content/index";

//component
import DefaultPages from "../../components/defaultPages";
import Title from "../../components/common/title";
import ProjectCard from "../../components/common/projectCard";

const ProjectsPage = () => {
    return (
        <DefaultPages>

            <>
                <section>
                    <Title title={'Projects'} />
                </section>

                <main className="projectItems">
                    {projectContent && projectContent.map((item, index) => {
                        return <ProjectCard key={index}{...item} />
                    })}
                </main>
            </>

        </DefaultPages>
    )
}

export default ProjectsPage;