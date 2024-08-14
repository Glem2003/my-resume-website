import { useNavigate } from 'react-router-dom';

//style
import './style/login.sass'

//components
import { Button } from '../../components';
import LoginInput from '../../components/login/input';

//data
import loginInputConfig from '../../data/login'

const LoginPage: React.FC = () => {

    const inputConfig = loginInputConfig

    const navigate = useNavigate();
    const handleGoToAdmin = () => {
        navigate('/admin')
    }

    return (
        <main className="login">
            <h1>BACKEND SYSTEM</h1>
            <form className='login__form'>
                {inputConfig.map((input, index) => <LoginInput key={index} {...input} />)}

                <Button name='Login' btnClassName='login__btnLogin' btnClick={handleGoToAdmin} />

            </form>
        </main>
    )
}

export default LoginPage;