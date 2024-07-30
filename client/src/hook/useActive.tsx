import { useState } from 'react';

const useActive = () => {
    const [active, setActive] = useState<string>('experience');

    const handleClick = (id: string) => {
        setActive(id)
    }

    return { active, handleClick }
}

export default useActive