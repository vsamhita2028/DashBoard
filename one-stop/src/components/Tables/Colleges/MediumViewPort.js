import { Table } from 'reactstrap';
import { useHistory } from "react-router-dom";

const MediumSize = ({ data,setProps }) => {
    let history = useHistory();
    const SetValues =(name)=>{
        setProps(name);
        history.push("/byLocation/collegeDets");
    }
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
                                <td onClick={()=>SetValues(elem.Name)}>{elem.Name}</td>
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