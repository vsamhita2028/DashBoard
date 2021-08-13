import { useEffect, useContext } from "react";
import { PathContext } from "../../PathContext";
import axios from "axios";
import { useState } from "react";
import DoughnutChart from "./DoughnutChart";
import { useHistory } from "react-router-dom";
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";
const ByCourse = ({ setExtraValue }) => {
  const path = useContext(PathContext);
  let history = useHistory();

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
    const headers = { 'Content-Type': 'application/json' };
    const finalPath = path + "/college/getcount-by-course";

    axios.get(finalPath, {
      headers: headers
    }).then((result) => {
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
    return <div><h1>Loading....</h1></div>
  }
  return (
    <div>
      <Container fluid>
        <Row className={"m-md-3 m-xs-2 mt-3"} >
          <Col>
            <Card>
              <CardBody >
                <CardTitle tag="h5">Card title</CardTitle>
                <Row>
                {/* <DoughnutChart labels={labels.slice(0, 71)} values={values.slice(0, 71)} options={options} setExtraValue={setExtraValue} height={220}  /> */}
                  <Col md={6}>
                    <DoughnutChart labels={labels.slice(0, 35)} values={values.slice(0, 35)} options={options} setExtraValue={setExtraValue} height={220}  />
                  </Col>
                  <Col md={6}>
                    <DoughnutChart labels={labels.slice(35, 71)} values={values.slice(35, 71)} options={options} setExtraValue={setExtraValue} height={220}  />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className={"m-md-3 m-xs-2 mt-3"}>
          <Col>
            <Card>
              <CardBody >
                <CardTitle tag="h5">Card title</CardTitle>
                <DoughnutChart labels={labels.slice(71, labels.length)} values={values.slice(71, labels.length)} options={options} setExtraValue={setExtraValue} height={220} width={300} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ByCourse;