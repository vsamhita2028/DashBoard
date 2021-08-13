import { useEffect, useContext } from "react";
import { PathContext } from "../../../PathContext";
import axios from "axios";
import { useState } from "react";
import StudentDets from "../Students/StudentsDets"
import SimilarColleges from "./SimilarColleges";
import { Card,CardBody } from "reactstrap";
const CollegeDets = ({ name }) => {
    const path = useContext(PathContext);
    const [Students, setStudents] = useState(null);
    useEffect(() => {
        const headers = { 'Content-Type': 'application/json' };
        const finalPath = path + "/college/college-dets";

        axios.get(finalPath, {
            params: {
                name: name
            },
            headers: headers
        }).then((result) => {
            let data = result.data;
            for (let inc = 0; inc < data.length; inc += 1) {
                data[inc]["Skills"] = data[inc]["Skills"].toString();
            }
            console.log(data)
            setStudents(data);
        })
    }, [path, name])
    return (
        <div>
            <Card className="m-md-3 m-xs-2 mt-3">
                <CardBody>
                    <SimilarColleges name={name} />
                </CardBody>
            </Card>
            <Card className="m-md-3 m-xs-2 mt-3">
                <CardBody>
                    <StudentDets data={Students} />
                </CardBody>
            </Card>
        </div>
    );
}

export default CollegeDets;