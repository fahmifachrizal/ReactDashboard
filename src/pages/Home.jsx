import { useState } from "react"
import Metric from "../components/Metric"
import iconTotalCost from '../assets/icons/metrics/icon_total_cost.svg'
import iconTotalSales from '../assets/icons/metrics/icon_total_sales.svg'
import iconThisWeek from '../assets/icons/metrics/this_week.svg'
import iconRevenue from '../assets/icons/metrics/Revenue.svg'
import iconLastPayment from '../assets/icons/metrics/last_payment.svg'
import TotalProfitChart from "../components/charts/TotalProfit"
import EarningChart from "../components/charts/Earning"
import OrderChart from "../components/charts/Order"
import ProfitChart from "../components/charts/Profit"
import { BsChevronDown } from "react-icons/bs"

function Home() {
  const [ selectedOption, setSelectedOption ] = useState('This Week');
  const [ toogleOption, setToogleOption ] = useState(false);

  const handleOptionChange = (option)=>{
    setSelectedOption(option)
    setToogleOption(false)
  }

  return (
    <div className='bg-[#151a2e] min-h-screen w-full px-8'>
      <div className='h-20 flex items-center justify-end px-8 border-b border-b-gray-600'>
        <div className='flex items-center justify-center gap-x-4'>
          <div className='h-10 w-10 bg-gray-300 rounded-full'></div>
          <p className='text-white'>Hello, User!</p>
        </div>
      </div>
      <div className='w-full py-8 flex flex-col gap-y-3'>
        <h1 className='text-3xl font-semibold text-white'>Marketing Dashboard</h1>
        <p className='text-[#6C747D] text-sm font-medium'>Home / <span className='text-[#0BB885]'>Dashboard</span></p>
      </div>
      <div className="w-full h-24 flex flex-wrap gap-x-4">
        <Metric icon={iconTotalCost} title={'Total Cost'} subtitle={'$31.868'}/>
        <Metric icon={iconTotalSales} title={'Total Sales'} subtitle={'$66.053'}/>
        <Metric icon={iconThisWeek} title={'This Week'} subtitle={'$35.000,00'}/>
        <Metric icon={iconRevenue} title={'Revenue'} subtitle={'$63,00K'}/>
        <Metric icon={iconLastPayment} title={'$1250'} subtitle={'Last Payment'}/>
      </div>
      <div className="pt-10 w-full flex flex-wrap gap-4">
        <div className="flex flex-wrap max-w-5xl gap-4">
          <div className="h-56 w-fit bg-[#1c243f] rounded-xl flex-1 px-4 py-4">
            <div className="flex justify-between">
              <p className="text-white font-semibold">Earnings</p>
              <div className="relative text-sm">
                <button className="flex gap-x-4 w-32 items-center px-1 text-[#5c6ca5] justify-end" onClick={()=>setToogleOption(!toogleOption)}>{selectedOption}<BsChevronDown/></button>
                { toogleOption && <div className="absolute bg-[#2e4b85] w-28 flex flex-col top-6 text-white translate-x-4">
                  {selectedOption!='This Week' && <button className="flex justify-start w-full hover:bg-[#4f6899] px-2 py-1" onClick={()=>handleOptionChange('This Week')}>This Week</button>}
                  {selectedOption!='Last Week' && <button className="flex justify-start w-full hover:bg-[#4f6899] px-2 py-1" onClick={()=>handleOptionChange('Last Week')}>Last Week</button>}
                  {selectedOption!='2 Weeks Ago' && <button className="flex justify-start w-full hover:bg-[#4f6899] px-2 py-1" onClick={()=>handleOptionChange('2 Weeks Ago')}>2 Weeks Ago</button>}
                  {selectedOption!='Last Month' && <button className="flex justify-start w-full hover:bg-[#4f6899] px-2 py-1" onClick={()=>handleOptionChange('Last Month')}>Last Month</button>}
                </div> }
              </div>
            </div>
            <div className="flex">
              <EarningChart/>
              <div className="flex flex-col justify-center gap-y-4">
                <div className="flex gap-x-2 items-center">
                  <div className="h-3 w-3 bg-[#0BB885] rounded-full"></div>
                  <div className="text-white">
                    <p className="text-xs">Total Sales</p>
                    <p className="text-xs text-gray-500">251K</p>
                  </div>
                </div>
                <div className="flex gap-x-2 items-center">
                  <div className="h-3 w-3 bg-[#FF9F43] rounded-full"></div>
                  <div className="text-white">
                    <p className="text-xs">Total Sales</p>
                    <p className="text-xs text-gray-500">176K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-56 w-fit bg-[#1c243f] rounded-xl flex-1 px-4 py-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <p className="text-white font-semibold">Orders</p>
            </div>
            <div>
              <p className="text-3xl text-[#FF9F43]">189K</p>
            </div>
            <OrderChart/>
          </div>
          <div className="h-56 w-fit bg-[#1c243f] rounded-xl flex-1 px-4 py-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <p className="text-white font-semibold">Profit</p>
            </div>
            <div>
              <p className="text-3xl text-[#0BB885]">8,24K</p>
            </div>
            <ProfitChart/>
          </div>
          
          <div className="w-fit bg-[#1c243f] rounded-xl flex-1 px-4 py-4 flex gap-x-4">
            <div className="w-fit">
              <div className="flex justify-between">
                <p className="text-white font-semibold">Total Profit</p>
                <div className="text-gray-500 text-sm flex gap-x-4 items-center">
                  <div className="flex gap-x-2 items-center">
                    <div className="h-3 w-3 bg-[#0BB885] rounded-full"></div>
                    <p>Earning</p>
                  </div>
                  
                  <div className="flex gap-x-2 items-center">
                    <div className="h-3 w-3 bg-[#FF9F43] rounded-full"></div>
                    <p>Expense</p>
                  </div>
                </div>
              </div>
              <TotalProfitChart/>
            </div>
            <div className="flex-1 h-full border-sky-900 border-l-2 flex flex-col justify-between ">
              <div>2023</div>
              <div>Money</div>
              <div>Graph</div>
              <div>
                <button>View Report</button>
              </div>
            </div>
          </div>
          
        </div>
        <div className="h-96 bg-[#1c243f] flex-1 rounded-xl">

        </div>
      </div>
    </div>
  )
}

export default Home