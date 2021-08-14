import { useEffect, useContext } from "react";
import { PathContext } from "../../../PathContext";
import axios from "axios";
import { useState } from "react";
import { Table } from 'reactstrap';
import { Card, CardBody } from "reactstrap";
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
import { RiArrowGoBackFill } from "react-icons/ri"
import { useHistory } from "react-router-dom";
import '../../../App.css';

const CollegeByCourses = ({ name, lightMode }) => {
    const path = useContext(PathContext);
    let history = useHistory();
    const [colleges, setColleges] = useState(null);
    const dark = {
        color: "white",
        backgroundColor: "#2C2C2C",
        border: "none"
    }
    useEffect(() => {
        const headers = { 'Content-Type': 'application/json' };
        const finalPath = path + "/college/byCourses";

        axios.get(finalPath, {
            params: {
                name: name
            },
            headers: headers
        }).then((result) => {
            let data = result.data;
            setColleges(data);
            console.log(data);
        })
    }, [path, name], colleges)
    return (
        <div style={{height :"92.5vh"}} >
            <Row>
                <Col className={"pl-4 pt-2 mt-3 box-light"}>
                    <Breadcrumb>
                        <span onClick={() => history.goBack()} style={{ marginRight: "0.5em" }} ><RiArrowGoBackFill />  </span>
                        <BreadcrumbItem >Home</BreadcrumbItem>
                        <BreadcrumbItem active>Course - {name}</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
            </Row>
            <Card className="m-md-3 m-xs-2 mt-3" style={lightMode ? { color: "black" } : dark} >
                <CardBody>
                    <Table responsive borderless style={lightMode ? { color: "black" } : dark}>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Foundation Year</th>
                                <th>Strength</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {colleges &&
                                colleges.map((elem, indx) =>
                                    <tr key={indx} className={lightMode ? "pointer" : "trdark "}>
                                        <th scope="row">{indx + 1}</th>
                                        <td >{elem.Name}</td>
                                        <td>{elem.FoundedYear}</td>
                                        <td>{elem.Strength}</td>
                                        <td>{elem.City}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    );
}

export default CollegeByCourses;