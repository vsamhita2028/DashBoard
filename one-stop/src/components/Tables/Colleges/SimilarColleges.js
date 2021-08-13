import { useEffect, useContext } from "react";
import { PathContext } from "../../../PathContext";
import axios from "axios";
import { useState } from "react";
import { Table } from 'reactstrap';

const SimilarColleges = ({name,lightMode}) => {
    const path = useContext(PathContext);
    const [SimilarColleges,setSimilarColleges] = useState(null);
    const dark ={
        color: "white",
        backgroundColor : "#2C2C2C",
        border :"none",
      }
    useEffect(() => {
        const headers = { 'Content-Type': 'application/json' };
        const finalPath = path + "/college/similar-colleges";
        axios.get(finalPath, {
            params :{
                name : name
            },
            headers: headers
        }).then((result) => {
            let data = result.data;
            for(let inc=0;inc<data.length;inc+=1){
                data[inc]["Courses"] = data[inc]["Courses"].toString();
            }
            setSimilarColleges(data);
            console.log(data);
        })
    }, [path,name],SimilarColleges)
    return ( 
        <div>
            <Table responsive borderless style={lightMode ?{color: "black"} : dark }>
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
                    {SimilarColleges &&
                        SimilarColleges.map((elem, indx) => 
                            <tr key={indx} className={lightMode ? " ":"trdark"}>
                                <th scope="row">{indx+1}</th>
                                <td >{elem.Name}</td>
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
 
export default SimilarColleges;