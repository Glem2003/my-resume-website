//style
import './style/project.sass';

//hook
import { useTranslation } from 'react-i18next';

//content
import { projectContent } from "../../data/index";

//component
import { DefaultPages, Title, ProjectCard } from "../../components/index";

const ProjectsPage = () => {

    const { t } = useTranslation();

    return (
        <DefaultPages>

            <>
                <section>
                    <Title title={t('project.title')} />
                </section>


                <main>
                    <div className="projectItems">
                        {projectContent && projectContent.map((item, index) => {
                            return <ProjectCard key={index}{...item} />
                        })}
                    </div>
                </main>

            </>

        </DefaultPages>
    )
}

export default ProjectsPage;