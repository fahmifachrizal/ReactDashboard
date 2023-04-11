import { useState } from "react";
import Chart from "react-apexcharts";

function GrowthChart({width}) {
  const [series, setSeries] = useState([
    { "name": "Growth",
        "data": [ 
          { "x": "Week 1", "y": "5.06" }, 
          { "x": "Week 2", "y": "4.58" }, 
          { "x": "Week 3", "y": "4.26" }, 
          { "x": "Week 4", "y": "5.36" }, 
          { "x": "Week 5", "y": "6.89" }, 
          { "x": "Week 6", "y": "5.24" },
          { "x": "Week 7", "y": "6.26" }, 
          { "x": "Week 8", "y": "7.36" }, 
          { "x": "Week 9", "y": "5.89" }, 
          { "x": "Week 10", "y": "7.24" }
        ]
    }
],)
  const [options, setOptions] = useState({
    tooltip: {  x: { show: false } },
    chart: {
      animations: {
          enabled: false,
          easing: "swing"
      },
      id: "2BMZL",
      toolbar: { show: false },
    },
    plotOptions: { bar: { borderRadius: 6} },
    colors: [ "#0BB885" ],
    dataLabels: { enabled: false },
    grid: {
      borderColor: "#000000",
      strokeDashArray: 8,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: false } },
      padding: {
        top: -10,
        bottom: -10,
        right: 25,
        left: 25
      }
    },
    legend: { show: false },
    stroke: { curve: "smooth", width: 3 },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: { show: false },
  })

  return (
    <>
      <Chart
        options={options}
        series={series}
        width='100%'
        height="130"
      />
    </>
  )
}

export default GrowthChart