//style
import './style/userSetting.sass'

//components
import DataTable from '../../components/userSetting/dataTable'
import { Button } from '../../components'

//data
import { userSetting } from '../../data'

const UserSetting = () => {

    const fakeStateData = [
        {
            key: 'UserName',
            value: 'admin'
        },
        {
            key: 'Identity',
            value: 'admin'
        },
        {
            key: 'Last Login',
            value: '2024-08-13 00:08:13'
        }
    ]
    
    const settingData = userSetting

    return (
        <section className="userSetting">

            <h5>User State</h5>
            <DataTable data={fakeStateData} />

            <h5>User Setting</h5>
            <form>
                <DataTable data={settingData} />
                <div className="userSetting__btnItem">
                    <Button name='Save' />
                    <Button type="reset" name='Reset' />
                </div>

            </form>

        </section>
    )
}

export default UserSetting