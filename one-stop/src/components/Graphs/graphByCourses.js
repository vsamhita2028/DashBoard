import { useEffect, useContext } from "react";
import { PathContext } from "../../PathContext";
import axios from "axios";
import { useState } from "react";
import DoughnutChart from "./DoughnutChart";
import { useHistory } from "react-router-dom";
import { Spinner } from 'reactstrap';
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";
const ByCourse = ({ setExtraValue,lightMode }) => {
  const path = useContext(PathContext);
  let history = useHistory();
  const dark ={
    color: "white",
    backgroundColor : "#2C2C2C",
    border :"none",
  }
  const [labels, setLabels] = useState(null);
  const [values, setValues] = useState(null);
  const [hasError, setHasError] = useState(true)
  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    onClick: function (evt, element) {
      setExtraValue(evt.chart.tooltip.dataPoints[0].label)
      history.push("/byCourses");
    },
    responsive: true,
    maintainAspectRatio: false
  }
  useEffect(() => {
    // const headers = { 'Content-Type': 'application/json' };
    const finalPath = path + "/college/getcount-by-course";
    console.log(finalPath)
    axios.get(finalPath).then((result) => {
      console.log(result.data);
      const data = result.data;
      let tempLabel = [];
      let tempValues = [];
      data.forEach(element => {
        tempLabel.push(element._id);
        tempValues.push(element.count);
      });
      setLabels(tempLabel);
      setValues(tempValues);
      setHasError(false);
    })
  }, [path], labels, values)
  if (hasError) {
    return <div style={{display:"flex", textAlign : "center",alignItems:"center",justifyContent :"center",height:"80vh"}}>
      <Spinner type="grow" color="success" >{" "}</Spinner>
      <Spinner type="grow" color="danger" >{" "}</Spinner>
      <Spinner type="grow" color="warning" >{" "}</Spinner>
      <Spinner type="grow" color="info" >{" "}</Spinner>
    </div>
  }
  return (
    <div>
      <Container fluid>
        <Row className={"m-md-3 m-xs-2 mt-3"}>
          <Col>
            <Card style={lightMode ?{color: "black"} : dark } >
              <CardBody >
                <CardTitle tag="h5">Based on Common Courses</CardTitle>
                <DoughnutChart labels={labels} values={values} options={options} setExtraValue={setExtraValue} height={523} width={600} lightMode={lightMode} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ByCourse;