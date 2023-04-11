import { useState } from "react";
import Chart from "react-apexcharts";

function OrderChart({width}) {
  const [series, setSeries] = useState([
    {
        "name": "Orders",
        "data": [ { "x": "", "y": "25" }, { "x": "", "y": "64" }, { "x": "", "y": "32" }, { "x": "", "y": "20" }, { "x": "", "y": "48"}]
    },
    {"name": "",
        "data": [ { "x": "", "y": "75" }, { "x": "", "y": "36" }, { "x": "", "y": "68" }, { "x": "", "y": "80" }, { "x": "", "y": "52"}]
    }
],)
  const [options, setOptions] = useState({
    chart: {
      animations: {
          enabled: true
      },
      foreColor: "#373D3F",
      id: "IWtPl",
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false
      },
      type: "bar",
    },
    width: "100%",
    legend: { show: false },
    plotOptions: { bar: { columnWidth: "20%" } },
    colors: [ "#FF9F43", "#2e4b85"],
    dataLabels: { enabled: false },
    xaxis: { show: false, axisTicks: { show: false } },
    yaxis: { show: false },
    grid: {
      show: false,
      padding: {
          top: -20,
          right: -5,
          bottom: -25,
          left: -5
      }
    },
  })

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="bar"
        height="120"
      />
    </>
  )
}

export default OrderChart