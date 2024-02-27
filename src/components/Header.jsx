// import React from 'react'

const Header = () => {
  return (
   <div className="flex h-10 items-center py-4 bg-blue-800 text-white px-10 justify-between">
    <div className="">Logo</div>
    <div className="flex gap-3">
       <p className='px-2 py-3 hover:cursor-pointer'>Home</p>
       <p className='px-2 py-3 hover:cursor-pointer'>Contact</p>
    </div>
   </div>
  )
}

export default Header
