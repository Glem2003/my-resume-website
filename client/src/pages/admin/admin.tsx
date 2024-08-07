import { useState } from 'react';

//icon
import { AiOutlineLogin } from "../../assets/icon/index";

//style
import './style/admin.sass'

//hook
import useUserNameActive from '../../hook/useUserNameActive';

//components
import List from '../../components/admin/list';
import FunctionList from '../../components/admin/functionList';

const AdminPage = () => {

    const [isMenuActive, setIsMenuActive] = useState<string>('home');
    const { isUserNameActive, handleFunctionItem } = useUserNameActive()

    return (
        <div className='admin'>

            <header className='admin__header'>

                <h4>ADMIN SYSTEM</h4>
                <ul className='admin__list'>
                    <List text='Home' />
                    <List text='Admin' />
                </ul>
                <div className='admin__username'>
                    <p onClick={handleFunctionItem}>username</p>
                    <div className={`admin__functionItem ${isUserNameActive ? 'admin__functionItem--show' : ''}`}>
                        <FunctionList text='Sign out' icon={<AiOutlineLogin />} />
                    </div>
                </div>

            </header>

            <main className='admin__main'>

            </main>

        </div>
    )
}

export default AdminPage;