//components
import { Button } from '../components'

const userSetting = [
    {
        key: 'System Language',
        value: (
            <select>
                <option>English</option>
                <option>中文</option>
            </select>
        )
    },
    {
        key: "Reset password",
        value: (<Button name='Reset Password' />)
    },
    {
        key: 'Account management',
        value: (<Button name='Delete User' />)
    }
]

export default userSetting