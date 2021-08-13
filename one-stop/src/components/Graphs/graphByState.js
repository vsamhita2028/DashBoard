import { useEffect, useContext } from "react";
import { PathContext } from "../../PathContext";
import axios from "axios";
import { useState } from "react";
import PieChart from "./PieChart";
import { useHistory } from "react-router-dom";
import { Card } from "reactstrap";
import { CardBody, CardTitle } from "reactstrap";
const ByState = ({ setExtraValue }) => {
  const path = useContext(PathContext);
  let history = useHistory();
  const [labels, setLabels] = useState(null);
  const [values, setValues] = useState(null);
  const [hasError, setHasError] = useState(true);
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
    return <div><h1>Loading....</h1></div>
  }
  return (
    <div className={"m-md-3 m-xs-2 mt-3"}>
      <Card>
        <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
          <PieChart labels={labels} values={values} options={options} setExtraValue={setExtraValue} height={550} width={600}/>
        </CardBody>
      </Card>
    </div>
  );
}

export default ByState;








// import { useState } from 'react';
// import { Bar } from 'react-chartjs-2';

// const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };


// const Graph = () => {
//   const [val,setVal] = useState(false);
//   const options = {
//     onClick : function(evt, element){
//       console.log(element)
//       console.log(evt.chart.tooltip.title[0])
//       if(evt.chart.tooltip.title[0] === 'Blue'){
//         setVal(true);
//       }
//     },
//     indexAxis: 'y',
//     // Elements options apply to all of the options unless overridden in a dataset
//     // In this case, we are setting the border of each horizontal bar to be 2px wide
//     elements: {
//       bar: {
//         borderWidth: 2,
//       },
//     },
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'right',
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Horizontal Bar Chart',
//       },
//     },
//   };
//   return ( 
//     <div>
//         <Bar data={data} options={options}  />
//         {val && console.log("yes it worked")}

//     </div>
//    );
// }

// export default Graph;