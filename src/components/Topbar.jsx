import React from 'react'

function Topbar() {
  return (
    <nav className='px-12 py-4 flex justify-between items-center shadow'>
        <div className='font-semibold'>Leave It Local</div>
        <div className='flex gap-3'>
            <button className='bg-[#D1FAE5] px-[1.3rem] py-[0.6rem] rounded-[32px] text-[#047857] text-[0.9rem] font-semibold'>About Us</button>
            <button className='bg-[#D1FAE5] px-[1.3rem] py-[0.6rem] rounded-[32px] text-[#047857] text-[0.9rem] font-semibold'>Property</button>
            <button className='bg-[#D1FAE5] px-[1.3rem] py-[0.6rem] rounded-[32px] text-[#047857] text-[0.9rem] font-semibold'>Sign In</button>
        </div>
    </nav>
  )
}

export default Topbar