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