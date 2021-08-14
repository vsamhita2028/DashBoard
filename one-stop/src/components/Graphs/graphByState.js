import { useEffect, useContext } from "react";
import { PathContext } from "../../PathContext";
import axios from "axios";
import { useState } from "react";
import PieChart from "./PieChart";
import { useHistory } from "react-router-dom";
import { Card } from "reactstrap";
import { CardBody, CardTitle } from "reactstrap";
import { Spinner } from 'reactstrap';

const ByState = ({ setExtraValue, lightMode }) => {
  const path = useContext(PathContext);
  let history = useHistory();
  const [labels, setLabels] = useState(null);
  const [values, setValues] = useState(null);
  const [hasError, setHasError] = useState(true);
  const dark = {
    color: "white",
    backgroundColor: "#2C2C2C",
    border: "none",
  }
  //rgba(87, 87, 87, 0.1)
  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    onClick: function (evt, element) {
      setExtraValue(evt.chart.tooltip.dataPoints[0].label);
      history.push("/byLocation");
    },
    responsive: true,
    maintainAspectRatio: false
  }
  useEffect(() => {
    const headers = { 'Content-Type': 'application/json' };
    const finalPath = path + "/college/getcount-by-state";

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
    return <div style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", height: "80vh" }}>
      <Spinner type="grow" color="success" >{" "}</Spinner>
      <Spinner type="grow" color="danger" >{" "}</Spinner>
      <Spinner type="grow" color="warning" >{" "}</Spinner>
      <Spinner type="grow" color="info" >{" "}</Spinner>
    </div>
  }
  return (
    <div className={"m-md-3 m-xs-2 mt-3"} >
      <Card style={lightMode ? { color: "black" } : dark}>
        <CardBody>
          <CardTitle tag="h5">Based on Location</CardTitle>
          <PieChart labels={labels} values={values} options={options} setExtraValue={setExtraValue} height={523} width={600} lightMode={lightMode} />
        </CardBody>
      </Card>
    </div>
  );
}

export default ByState;