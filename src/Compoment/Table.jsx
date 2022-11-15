import Table from 'react-bootstrap/Table';
const bgg={'color':'#fd7e14','fontSize':'20px'}
const Tables=()=>{
    return(
        <div className="p-2 ">
            <Table responsive="md">
                <thead>
                    <tr  style={bgg}>
                        <th >Username</th>
                        <th >Email</th>
                        <th >Password</th>
                        <th >Role</th>
                        <th >Option</th>
                      
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>azer</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                    </tr>
                
                </tbody>
            </Table>
        </div>
    )
}

export default Tables