import { useState, useEffect } from 'react';

const useMobileMenuActive = () => {

    const [isActive, setActive] = useState<boolean>(false)
    const [isClicked, setClicked] = useState<boolean>(false)

    const handleClick = () => {
        setActive(!isActive)
        setClicked(true)
    }

    useEffect(() => {

        if (!isClicked) return;
        const mobileMain = document.querySelector('.header__mobileMain')
        const handleAnimationEnd = () => {
            if (!isActive) {
                mobileMain?.classList.remove('header__mobileMain--close')
            }
        }
        if (mobileMain) {
            mobileMain.addEventListener('animationend', handleAnimationEnd);
        }
        if (isActive) {
            mobileMain?.classList.remove('header__mobileMain--close')
            mobileMain?.classList.add('header__mobileMain--open')
        } else {
            mobileMain?.classList.remove('header__mobileMain--open')
            mobileMain?.classList.add('header__mobileMain--close')
        }

        return () => {
            if (mobileMain) {
                mobileMain.removeEventListener('animationend', handleAnimationEnd);
            }
        }

    }, [isActive, isClicked])

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isActive])

    return { isActive, handleClick }
}

export default useMobileMenuActive