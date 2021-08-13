import { useEffect, useContext } from "react";
import { PathContext } from "../../PathContext";
import axios from "axios";
import { useState } from "react";
import PieChart from "./PieChart";
const ByCourse = ({setLevel,setExtraValue}) => {
  const path = useContext(PathContext);
  const [labels,setLabels] =useState(null);
  const [values,setValues] =useState(null);
  const [hasError, setHasError] = useState(true)
  const options = {
    onClick : function(evt, element){
      setExtraValue(evt.chart.tooltip.dataPoints[0].label)
      setLevel(1.2);
    },
    responsive: true,
}
  useEffect(()=>{
    const headers = { 'Content-Type': 'application/json' };
				const finalPath = path + "/college/getcount-by-course";

				axios.get(finalPath,  {
					headers: headers
				}).then((result) => {
					console.log(result.data);
          const data = result.data;
          let tempLabel =[];
          let tempValues = [];
          data.forEach(element => {
            tempLabel.push(element._id);
            tempValues.push(element.count);
          });
          setLabels(tempLabel);
          setValues(tempValues);
          setHasError(false);
				})
  },[path],labels,values)
  if (hasError) {
    return <div><h1>Loading....</h1></div>
}
  return ( 
    <div>
      <PieChart labels ={labels} values= {values} options={options} setLevel={setLevel} setExtraValue={setExtraValue} />
    </div>
   );
}
 
export default ByCourse;