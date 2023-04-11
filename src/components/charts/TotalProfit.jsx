import { useState } from "react";
import Chart from "react-apexcharts";

function TotalProfitChart() {
  const [series, setSeries] = useState([
    {
      "name": "Earning",
      "data": [{ "x": "Jan", "y": "125" },{ "x": "Feb", "y": "230" },{ "x": "Mar", "y": "330" },{ "x": "Apr", "y": "300" },{ "x": "May", "y": "120" },{ "x": "Jun", "y": "75" },{ "x": "Jul", "y": "180" },{ "x": "Aug", "y": "250" },{ "x": "Sep", "y": "100" }]
    },
    {
      "name": "Expense",
      "data": [{ "x": "Jan", "y": "-180" },{ "x": "Feb", "y": "-100" },{ "x": "Mar", "y": "-60" },{ "x": "Apr", "y": "-220" },{ "x": "May", "y": "-120" },{ "x": "Jun", "y": "-75" },{ "x": "Jul", "y": "-120" },{ "x": "Aug", "y": "-100" },{ "x": "Sep", "y": "-120" }]
    }
  ])
  const [options, setOptions] = useState({
    chart: {
      animations: {
          enabled: false
      },
      foreColor: "#373D3F",
      id: "IWtPl",
      stacked: true,
      toolbar: {
          show: false
      },
      type: "bar",
    },
    legend: { show: false },
    grid: { show: false },
    plotOptions: { bar: { columnWidth: "20%" } },
    colors: [ "#0BB885", "#FF9F43"],
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels:{ style:{ colors: '#6B7280', fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 300 } },
      axisTicks: { show: false },
    },
    yaxis: {
      labels:{ style:{ colors: '#6B7280', fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 300 } },
      axisTicks: { show: false },
    },
  })

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="500"
      />
    </>
  )
}

export default TotalProfitChart