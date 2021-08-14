import { useEffect, useContext } from "react";
import { PathContext } from "../../../PathContext";
import axios from "axios";
import { useState } from "react";
import StudentDets from "../Students/StudentsDets"
import SimilarColleges from "./SimilarColleges";
import { Card, CardBody } from "reactstrap";
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri"
const CollegeDets = ({ name, lightMode }) => {
    const path = useContext(PathContext);
    let history = useHistory();
    const [Students, setStudents] = useState(null);
    const dark = {
        color: "white",
        backgroundColor: "#2C2C2C",
        border: "none",
    }
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
        <div style={{height :"100%",paddingBottom :"2em"}}>
            <Row >
                <Col className={"pl-4 pt-2 mt-3 box-light"}>
                    <Breadcrumb>
                        <span onClick={() => history.goBack()} style={{ marginRight: "0.5em" }} ><RiArrowGoBackFill />  </span>
                        <BreadcrumbItem > {"Home"}</BreadcrumbItem>
                        <BreadcrumbItem >By Location</BreadcrumbItem>
                        <BreadcrumbItem active>Similar Colleges and Student details</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
            </Row>
            <Card className="m-md-3 m-xs-2 mt-3" style={lightMode ? { color: "black" } : dark}>
                <CardBody>
                    <SimilarColleges name={name} lightMode={lightMode} />
                </CardBody>
            </Card>
            <Card className="m-md-3 m-xs-2 mt-3" style={lightMode ? { color: "black" } : dark}>
                <CardBody>
                    <StudentDets data={Students} lightMode={lightMode} />
                </CardBody>
            </Card>
        </div>
    );
}

export default CollegeDets;