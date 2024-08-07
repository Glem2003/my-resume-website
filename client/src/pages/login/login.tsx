//hook
import { useNavigate } from 'react-router-dom';

//style
import './style/login.sass'

//components
import { Button } from '../../components';
import LoginInput from '../../components/login/input';

//icon
import { BsPerson, GoLock } from '../../assets/icon/index'

const LoginPage = () => {

    const inputConfig = [
        {
            icon: <BsPerson />,
            inputType: 'text',
            placeholder: 'USERNAME'
        },
        {
            icon: <GoLock />,
            inputType: 'password',
            placeholder: 'PASSWORD'
        }
    ]

    const navigate = useNavigate();
    const handleGoToAdmin = () => {
        navigate('/admin')
    }

    return (
        <main className="login">
            <h1>ADMIN SYSTEM</h1>
            <form className='login__form'>
                {inputConfig.map((input, index) => <LoginInput key={index} {...input} />)}

                <Button name='Login' btnClassName='login__btnLogin' btnClick={handleGoToAdmin}/>

            </form>
        </main>
    )
}

export default LoginPage;