//style
import './dataTable.sass'

interface dataTableProps {
    data?: { key: string, value: any }[]
}

const DataTable: React.FC<dataTableProps> = (props) => {

    const { data } = props

    return (
        <table className='stateTable'>
            <thead className='stateTable__thead'>
                {data && data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <th>{item.key}</th>
                            <td>{item.value}</td>
                        </tr>
                    )
                })}
            </thead>
        </table>
    )
}
export default DataTable