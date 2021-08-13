import { useEffect, useContext } from "react";
import { PathContext } from "../../../PathContext";
import axios from "axios";
import { useState } from "react";
import { Table } from 'reactstrap';
import { Card, CardBody } from "reactstrap";
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';


const CollegeByCourses = ({ name }) => {
    const path = useContext(PathContext);
    const [colleges, setColleges] = useState(null);
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
        <div >
            <Row>
                <Col className={"pl-4 pt-2 mt-3 box-light"}>
                    <Breadcrumb>
                        <BreadcrumbItem >Home</BreadcrumbItem>
                        <BreadcrumbItem active>By A Specific Course</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
            </Row>
            <Card className="m-md-3 m-xs-2 mt-3" >
                <CardBody>
                    <Table responsive>
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
                                    <tr key={indx}>
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