import { useEffect, useState } from "react"
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
import { BsChevronDown, BsArrowUp } from "react-icons/bs"
import Timeline from "../components/Timeline"
import GrowthChart from "../components/charts/Growth"

function Home() {
  const [ selectedOption, setSelectedOption ] = useState('This Week');
  const [ toogleOption, setToogleOption ] = useState(false);
  const [ EarningValue, setEarningValue ] = useState([78.4375, 55]);

  const handleOptionChange = (option)=>{
    setSelectedOption(option)
    setToogleOption(false)
    switch(option){
      case 'This Week':
        setEarningValue([78.4375, 55])
        break;
      case 'Last Week':
        setEarningValue([65.625, 48.75])
        break;
      case '2 Weeks Ago':
        setEarningValue([51.5625, 45.9375])
        break;
      case 'Last Month':
        setEarningValue([97.1875, 93.125])
        break;
      default:
        setEarningValue([78.4375, 55])
    }
  }

  return (
    <div className='bg-[#151a2e] min-h-screen w-full px-8 pb-12'>
      <div className='h-20 flex items-center justify-end px-8 border-b border-b-gray-600 '>
        <div className='flex items-center justify-center gap-x-4'>
          <div className='h-10 w-10 bg-gray-400 rounded-full relative border-gray-200 border-2'>
            <div className="h-3 w-3 bg-[#5ccc5a] rounded-full absolute right-0"></div>
          </div>
          <p className='text-white'>Hello, User!</p>
        </div>
      </div>
      <div className='w-full py-8 flex flex-col gap-y-3'>
        <h1 className='text-3xl font-semibold text-white'>Marketing Dashboard</h1>
        <p className='text-[#6C747D] text-sm font-medium'>Home / <span className='text-[#0BB885]'>Dashboard</span></p>
      </div>

      {/* Metrics */}
      <div className="w-full h-fit flex flex-wrap gap-4">
        <Metric icon={iconTotalCost} title={'Total Cost'} subtitle={'$31.868'}/>
        <Metric icon={iconTotalSales} title={'Total Sales'} subtitle={'$66.053'}/>
        <Metric icon={iconThisWeek} title={'This Week'} subtitle={'$35.000,00'}/>
        <Metric icon={iconRevenue} title={'Revenue'} subtitle={'$63,00K'}/>
        <Metric icon={iconLastPayment} title={'$1250'} subtitle={'Last Payment'}/>
      </div>

      <div className="pt-10 w-full flex flex-wrap gap-4">
        {/* Charts */}
        <div className="flex flex-wrap max-w-5xl gap-4">
          <div className="h-56 w-fit bg-[#1c243f] rounded-xl flex-1 px-4 py-4 hover:ring hover:ring-[#0BB885]">
            <div className="flex justify-between">
              <p className="text-white font-semibold">Earnings</p>
              <div className="relative text-sm">
                <button className="flex gap-x-2 w-32 items-center px-1 text-[#5c6ca5] justify-end" onClick={()=>setToogleOption(!toogleOption)}>{selectedOption}<BsChevronDown/></button>
                { toogleOption && <div className="absolute bg-[#2e4b85] w-28 flex flex-col top-6 text-white translate-x-4 rounded-md">
                  {selectedOption!='This Week' && <button className="flex justify-start w-full hover:bg-[#4f6899] px-2 py-1 first:rounded-t-md last:rounded-b-md" onClick={()=>handleOptionChange('This Week')}>This Week</button>}
                  {selectedOption!='Last Week' && <button className="flex justify-start w-full hover:bg-[#4f6899] px-2 py-1 first:rounded-t-md last:rounded-b-md" onClick={()=>handleOptionChange('Last Week')}>Last Week</button>}
                  {selectedOption!='2 Weeks Ago' && <button className="flex justify-start w-full hover:bg-[#4f6899] px-2 py-1 first:rounded-t-md last:rounded-b-md" onClick={()=>handleOptionChange('2 Weeks Ago')}>2 Weeks Ago</button>}
                  {selectedOption!='Last Month' && <button className="flex justify-start w-full hover:bg-[#4f6899] px-2 py-1 first:rounded-t-md last:rounded-b-md" onClick={()=>handleOptionChange('Last Month')}>Last Month</button>}
                </div> }
              </div>
            </div>
            <div className="flex">
              <EarningChart value={EarningValue}/>
              <div className="flex flex-col justify-center gap-y-4">
                <div className="flex gap-x-2 items-center">
                  <div className="h-3 w-3 bg-[#0BB885] rounded-full"></div>
                  <div className="text-white">
                    <p className="text-xs">Total Sales</p>
                    <p className="text-xs text-gray-500">{Math.round(EarningValue[0]*320)/100}K</p>
                  </div>
                </div>
                <div className="flex gap-x-2 items-center">
                  <div className="h-3 w-3 bg-[#FF9F43] rounded-full"></div>
                  <div className="text-white">
                    <p className="text-xs">Total Orders</p>
                    <p className="text-xs text-gray-500">{Math.round(EarningValue[1]*320)/100}K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-56 w-fit bg-[#1c243f] rounded-xl flex-1 px-4 py-4 flex flex-col justify-between hover:ring hover:ring-[#0BB885]">
            <div className="flex justify-between">
              <p className="text-white font-semibold">Orders</p>
            </div>
            <div>
              <p className="text-3xl text-[#FF9F43]">189K</p>
            </div>
            <OrderChart/>
          </div>
          <div className="h-56 w-fit bg-[#1c243f] rounded-xl flex-1 px-4 py-4 flex flex-col justify-between hover:ring hover:ring-[#0BB885]">
            <div className="flex justify-between">
              <p className="text-white font-semibold">Profit</p>
            </div>
            <div>
              <p className="text-3xl text-[#0BB885]">8,24K</p>
            </div>
            <ProfitChart/>
          </div>
          
          <div className="h-fit w-fit bg-[#1c243f] rounded-xl flex-1 px-4 py-4 flex gap-x-4 hover:ring hover:ring-[#0BB885]">
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
            <div className="flex-1 w-full h-auto border-sky-900 border-l-2 flex flex-col justify-between items-center">
              <div className="">
                <button className="flex gap-x-2 items-center py-1 px-4 font-medium rounded-md text-[#0bb885] border-2 border-[#0bb885]">2023<BsChevronDown/></button>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-3">
                <p className="text-white text-4xl font-semibold">$842.98</p>
                <p className="text-gray-500 text-xs font-medium">Latest Month Balance $426.20K</p>
              </div>
                <div><GrowthChart/></div>
              <div>
              <button className="flex gap-x-2 items-center py-1 px-4 font-medium rounded-md text-white bg-[#0bb885]">View Report</button>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Overview */}
        <div className="h-fit bg-[#1c243f] flex-1 rounded-xl p-6 hover:ring hover:ring-[#0BB885] max-w-md">
          <div className="flex flex-col gap-y-4">
            <p className="text-white text-xl font-bold">Activity Overview</p>
            <div className="flex gap-x-2 items-center">
              <BsArrowUp className="text-[#1aa053] text-lg font-medium"/>
              <p className="text-white">16% this month</p>
            </div>
            <div>
              <Timeline timestamp={'11 JUL 8:10 PM'} subject={'Nick Mark'} object={'Sara Smith In New Post'} activity={'Mentioned'}/>
              <Timeline timestamp={'11 JUL 9:10 PM'} subject={'The Post Name'} object={'Nick Mark'} activity={'Was Removed By'}/>
              <Timeline timestamp={'18 JUL 18:10 PM'} subject={'Pattrick Sulivan'} object={'A New Post'} activity={'Published'}/>
              <Timeline timestamp={'12 JUL 10:10 PM'} subject={'240+ Users'} object={'Newsletter #1'} activity={'Have Subscribed To'}/>
              <Timeline timestamp={'11 JUL 9:10 PM'} subject={'The Post Name'} object={'Nick Mark'} activity={'Was Suspended'}/>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-x-12 pt-8 text-gray-400 text-sm">
        <div className="">
          <button>Privacy Policy</button>
        </div>
        <div className="">
          <button>Term of Use</button>
        </div>
      </div>
    </div>
  )
}

export default Home