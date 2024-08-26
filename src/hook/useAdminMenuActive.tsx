import { useState } from "react"

const useAdminMenuActive = () => {

    const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

    const handleMenuClick = () => {
        setIsMenuActive(!isMenuActive)
    }

    return {
        isMenuActive,
        handleMenuClick
    }

}

export default useAdminMenuActive