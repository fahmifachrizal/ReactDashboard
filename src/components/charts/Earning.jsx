import { useState } from "react";
import Chart from "react-apexcharts";

function EarningChart({ value }) {
  // const [series, setSeries] = useState([78.4375, 55])
  const [options, setOptions] = useState({
    chart: {
      id: "iIuZD",
      toolbar: { show: false },
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow:{size:40},
        track: {
            startAngle: 0,
            endAngle: 0,
            background: "#1f2849",
        },
        dataLabels: {
          show: true,
          name: { show: false },
          value: {
            show: true,
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            color: "#FFF",
            offsetY: 0,
            formatter: function (val) {
              return val*320/100 +'K'
            }
          }
        },
        grid: {
          padding: {
              top: -100,
              right: -10,
              bottom: -10,
              left: -10
          }
        },
      }
    },
    colors: ["#0BB885", "#FF9F43"],
  })

  return (
    <>
      <Chart
        options={options}
        series={value}
        type="radialBar"
        width="160"
        height="200"
      />
    </>
  )
}

export default EarningChart