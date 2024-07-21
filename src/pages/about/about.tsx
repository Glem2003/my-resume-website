//style
import './style/about.sass';

//icon
import { MdArrowOutward, IoMdDownload } from '../../assets/icon/index';

//content
import { aboutContent } from "../../content/index";

//component
import DefaultPages from "../../components/defaultPages";
import Title from "../../components/common/title";
import Button from "../../components/common/button";
import TextInfo from '../../components/common/textInfo';

const AboutPage = () => {

    //take content
    const {
        headerTitle,
        headerDescription,
        textInfo,
        buttonItems
    } = aboutContent

    return (
        <DefaultPages>

            <section className='about__head'>
                <Title title={headerTitle} />
                <TextInfo
                    title={headerDescription}
                    description={textInfo}
                />
                <div className="about__buttonItems">
                    <Button
                        name={buttonItems[0]}
                        icon={<MdArrowOutward />}
                        backgroundColor='black'
                        color='white'
                    />
                    <Button
                        name={buttonItems[1]}
                        icon={<IoMdDownload />}
                        backgroundColor='white'
                        color='black'
                        disabled
                    />
                </div>
            </section>

        </DefaultPages>
    )
}

export default AboutPage;