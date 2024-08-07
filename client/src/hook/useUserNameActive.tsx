import { useState, useEffect } from 'react';

const useUserNameActive = () => {

    const [isUserNameActive, setIsUserNameActive] = useState<boolean>(false);

    const handleFunctionItem = () => {
        setIsUserNameActive(!isUserNameActive)
    }

    useEffect(() => {
        if (isUserNameActive) {
            document.querySelector('.admin__functionItem')?.classList.add('admin__functionItem--show');
        } else {
            document.querySelector('.admin__functionItem')?.classList.remove('admin__functionItem--show');
        }
    }, [isUserNameActive]);

    return { isUserNameActive, handleFunctionItem }
}

export default useUserNameActive