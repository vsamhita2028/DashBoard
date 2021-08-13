import { useEffect, useContext } from "react";
import { PathContext } from "../../../PathContext";
import axios from "axios";
import { useState } from "react";
import MediumSize from "./MediumViewPort";
import { Card } from "reactstrap";
import { CardBody } from "reactstrap";
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'reactstrap';
const CollegeByState = ({ state, setProps,lightMode }) => {
    const path = useContext(PathContext);
    const [colleges, setColleges] = useState(null);
    const dark ={
        color: "white",
        backgroundColor : "#2C2C2C",
        border :"none",
      }
    useEffect(() => {
        const headers = { 'Content-Type': 'application/json' };
        const finalPath = path + "/college/get-colleges-bystate";

        axios.get(finalPath, {
            params: {
                state: state
            },
            headers: headers
        }).then((result) => {
            let data = result.data;
            for (let inc = 0; inc < data.length; inc += 1) {
                data[inc]["Courses"] = data[inc]["Courses"].toString();
            }
            console.log(data)
            setColleges(data);
        })
    }, [path, state])
    return (
        <div >
            <Row >
                <Col className={"pl-4 pt-2 mt-3 box-light"}>
                    <Breadcrumb>
                        <BreadcrumbItem >Home</BreadcrumbItem>
                        <BreadcrumbItem active>By Location</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
            </Row>
            <Card className="m-md-3 m-xs-2 mt-3" style={lightMode ?{color: "black"} : dark }>
                <CardBody>
                    <MediumSize data={colleges} setProps={setProps} lightMode={lightMode} />
                </CardBody>
            </Card>
        </div>
    );
}

export default CollegeByState;