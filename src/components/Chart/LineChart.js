import {Line } from "react-chartjs-2";

export default function LineChart() {
  const data = {
    labels: [
      "1/1/2021",
      "2/1/2021",
      "3/1/2021",
      "4/1/2021",
      "5/1/2021",
      "6/1/2021",
      "7/1/2021",
      "8/1/2021",
      "9/1/2021",
      "10/1/2021",
    ],datasets: [{
      label: 'Sales for January 2021 (M)',
      data: [2,3,4,5,1,4,7,3,7,8]
    }]
  };
  return(
    <Line data={data}/>
  )
}
