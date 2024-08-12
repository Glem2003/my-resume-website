import { useState } from 'react'

const useSlideOpen = () => {

    const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsSlideOpen(!isSlideOpen)
    }

    return { isSlideOpen, handleOpen }
}

export default useSlideOpen