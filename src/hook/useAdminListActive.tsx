import { useState } from 'react'

const useAdminListActive = () => {

    const [isList, setIsList] = useState<string>('')

    const handleClick = (id: string) => {
        setIsList(id)
    }

    return {
        isList,
        handleClick
    }
}

export default useAdminListActive