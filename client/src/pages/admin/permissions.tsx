//style
import './style/permissions.sass'

const Permissions = () => {

    const fakeData = [
        {
            id: 1,
            name: "admin",
            identity: "admin",
            lastLogin: "2024-08-11 15:38:10"
        },
        {
            id: 2,
            name: "user",
            identity: "guest",
            lastLogin: "2024-03-12 23:11:50"
        },
        {
            id: 3,
            name: "guest123",
            identity: "guest",
            lastLogin: "2024-07-07 22:00:10"
        }
    ]

    return (
        <section className="permissions">

            <h5>Permissions</h5>

            <div className='permissions__search'>
            </div>

            <table className='permissions__table'>
                <tr>
                    <th>Name</th>
                    <th>Identity</th>
                    <th>last login</th>
                    <th>Action</th>
                </tr>
                {fakeData && fakeData.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.identity}</td>
                        <td>{item.lastLogin}</td>
                        <td>edit</td>
                    </tr>
                ))}
            </table>

        </section>
    )
}

export default Permissions