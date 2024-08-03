import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {

    const { i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className='header__language'>
            {i18n.language === 'en' ? (
                <p onClick={() => changeLanguage('zh_TW')}>中</p>
            ) : (
                <p onClick={() => changeLanguage('en')}>EN</p>
            )}
        </div>
    )
}

export default LanguageSwitcher;