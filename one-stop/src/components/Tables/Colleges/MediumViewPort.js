import { Table } from 'reactstrap';
import { useHistory } from "react-router-dom";
const MediumSize = ({ data,setProps,lightMode }) => {
    let history = useHistory();
    const SetValues =(name)=>{
        setProps(name);
        history.push("/byLocation/collegeDets");
    }
    const dark ={
        color: "white",
        backgroundColor : "#2C2C2C",
        border :"none",
      }
    return (
        <div >
            <Table borderless responsive style={lightMode ?{color: "black"} : dark } >
                <thead >
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
                            <tr key={indx} className={lightMode ? " ":"trdark"}>
                                <th scope="row">{indx+1}</th>
                                <td onClick={()=>SetValues(elem.Name)} className={"pointer"}>{elem.Name}</td>
                                <td>{elem.FoundedYear}</td>
                                <td className={"text-left"}>{elem.Courses}</td>
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