import Logo from '../assets/icons/Logo.svg'
import home from '../assets/icons/menu/home.svg'
import reports from '../assets/icons/menu/reports.svg'
import notifications from '../assets/icons/menu/notifications.svg'
import settings from '../assets/icons/menu/settings.svg'
import logout from '../assets/icons/menu/logout.svg'

import React from 'react'

function Navbar() {
  return (
    <div className='w-64 h-screen bg-[#171e37] p-4'>
      <div className='h-12 flex items-center'>
        <img src={Logo} alt='Logo' />
      </div>
      <div>
        <ul className='mt-8 flex flex-col gap-y-4'>
          <li className='h-12 w-full'>
            <button className='bg-[#1f2849] h-full w-full px-3 flex items-center gap-x-3 rounded-lg hover:bg-[#1f2849]'>
              <img src={home} alt="home"/>
              <p className='text-gray-500 font-semibold'>Home</p>
            </button>
          </li>
          <li className='h-12 w-full'>
            <button className='h-full w-full px-3 flex items-center gap-x-3 rounded-lg hover:bg-[#1f2849]'>
              <img src={reports} alt="home"/>
              <p className='text-gray-500 font-semibold'>Reports</p>
            </button>
          </li>
          <li className='h-12 w-full'>
            <button className='h-full w-full px-3 flex items-center gap-x-3 rounded-lg hover:bg-[#1f2849]'>
              <img src={notifications} alt="home"/>
              <p className='text-gray-500 font-semibold'>Notifications</p>
              <div className='flex flex-1 justify-end'>
                <p className='text-sm h-5 w-5 bg-[#98ffe0] flex items-center justify-center rounded-md'>1</p>
              </div>
            </button>
          </li>
          <li className='h-12 w-full'>
            <button className='h-full w-full px-3 flex items-center gap-x-3 rounded-lg hover:bg-[#1f2849]'>
              <img src={settings} alt="home"/>
              <p className='text-gray-500 font-semibold'>Settings</p>
            </button>
          </li>
          <li className='h-12 w-full'>
            <button className='h-full w-full px-3 flex items-center gap-x-3 rounded-lg hover:bg-[#1f2849]'>
              <img src={logout} alt="home"/>
              <p className='text-gray-500 font-semibold'>Log Out</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar