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

    const btnClick = () => {
        alert('coming soon')
    }

    return (
        <DefaultPages>

            <section className='about'>
                <Title title={headerTitle} />
                <TextInfo
                    title={headerDescription}
                    description={textInfo}
                />
                <div className="about__buttonItems">

                    <a href='mailto:glem920813@gmail.com'>
                        <Button
                            name={buttonItems[0]}
                            icon={<MdArrowOutward />}
                            backgroundColor='black'
                            color='white'
                        />
                    </a>

                    <Button
                        name={buttonItems[1]}
                        icon={<IoMdDownload />}
                        backgroundColor='white'
                        color='black'
                        btnClick={btnClick}
                    />
                    
                </div>
            </section>

        </DefaultPages>
    )
}

export default AboutPage;