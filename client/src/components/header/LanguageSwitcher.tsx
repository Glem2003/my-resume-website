import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

//hook
import useIsMobile from '../../hook/useIsMobile';

//style
import './style/languageSwitcher.sass';

const LanguageSwitcher = () => {

    const { isMobile } = useIsMobile()

    const { i18n } = useTranslation()

    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            {
                !isMobile && (
                    <div className='languageSwitcher'>
                        {i18n.language === 'en' ? (
                            <p onClick={() => changeLanguage('zh_TW')}>中</p>
                        ) : (
                            <p onClick={() => changeLanguage('en')}>EN</p>
                        )}
                    </div>
                )
            }

            {
                isMobile && (
                    <div className='languageSwitcher--mobile'>
                        <p>EN</p>
                        <label className="languageSwitcher__switch">
                            <input
                                className="languageSwitcher__input"
                                type="checkbox"
                                checked={i18n.language === 'zh_TW'}
                                onChange={() => changeLanguage(i18n.language === 'en' ? 'zh_TW' : 'en')}
                            />
                            <span className="languageSwitcher__slider round"></span>
                        </label>
                        <p>中文</p>
                    </div>
                )
            }
        </>
    )
}

export default LanguageSwitcher;