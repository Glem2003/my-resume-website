//style
import './style/about.sass';

//icon
import { MdArrowOutward, IoMdDownload } from '../../assets/icon/index';

//hook
import { useTranslation } from 'react-i18next';

//component
import { DefaultPages, Title, Button, TextInfo } from '../../components/index';

const AboutPage = () => {

    const { t } = useTranslation();

    const btnClick = () => {
        alert('coming soon')
    }

    return (
        <DefaultPages>

            <section className='about'>

                <Title title={t('about.headerTitle')} />
                <TextInfo
                    title={t('about.headerDescription')}
                    description={t('about.textInfo')}
                />

                <div className="about__buttonItems">

                    <a href='mailto:glem920813@gmail.com'>
                        <Button
                            name={t('about.buttonItems.0')}
                            icon={<MdArrowOutward />}
                            backgroundColor='black'
                            color='white'
                        />
                    </a>

                    <Button
                        name={t('about.buttonItems.1')}
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