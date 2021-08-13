import { Pie } from 'react-chartjs-2';
const PieChart = ({labels,values,options,height,width,lightMode}) => {
  const colours = lightMode ? ["#FFC527", "#578CF7", "#7CB64F", "#E85A5A", "#E25DCD"] :["#C11B8B", "#CF4516", "#E4A500", "#AAAF33", "#0A775F"]

const data = {
  labels: labels,
  datasets: [
    {
      label: 'No of Colleges ',
      data: values,
      backgroundColor: colours,
      borderColor:colours,
      borderWidth: 1,
    },
  ],
};
    return ( 
        <div>
            <Pie data={data} options={options} height={height} width={width} />
        </div>
     );
}
 
export default PieChart;