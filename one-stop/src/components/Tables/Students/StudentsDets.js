
import { Table } from 'reactstrap';
const StudentDets = ({ data ,lightMode }) => {
    const dark ={
        color: "white",
        backgroundColor : "#2C2C2C",
        border :"none",
      }
    return (
        <div className="m-3">
            <Table responsive borderless style={lightMode ?{color: "black"} : dark }>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Student Roll Number</th>
                        <th>Batch</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((elem, indx) =>
                            <tr key={indx} className={lightMode ? " ":"trdark"}>
                                <th scope="row">{indx + 1}</th>
                                <td>{elem.Name}</td>
                                <td>{elem.Id}</td>
                                <td>{elem.Batch}</td>
                                <td>{elem.Skills}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default StudentDets;