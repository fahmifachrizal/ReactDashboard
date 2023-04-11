import React from 'react'

function Metric({icon, title, subtitle}) {
  return (
    <div className='flex h-full flex-1 bg-[#1c243f] gap-x-4 items-center justify-center rounded-lg hover:bg-[#0bb885] group'>
      <div className={`p-4 rounded-full ${title!='Total Cost'?'group-hover:bg-[#1c243f]':''}`}>
        <img src={icon} alt="icon" />
      </div>
      <div className='flex flex-col font-medium'>
        <div className='text-white'>{title}</div>
        <div className='text-gray-500 group-hover:text-white'>{subtitle}</div>
      </div>
    </div>
  )
}

export default Metric