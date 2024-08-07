import { useEffect, useState } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 550);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 550)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return { isMobile }
}

export default useIsMobile