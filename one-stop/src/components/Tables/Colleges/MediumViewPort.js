import { Table } from 'reactstrap';
const MediumSize = ({ data }) => {
    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Foundation Year</th>
                        <th>Courses Offered</th>
                        <th>Strength</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((elem, indx) => 
                            <tr key={indx}>
                                <th scope="row">{indx+1}</th>
                                <td>{elem.Name}</td>
                                <td>{elem.FoundedYear}</td>
                                <td>{elem.Courses}</td>
                                <td>{elem.Strength}</td>
                                <td>{elem.City}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default MediumSize;