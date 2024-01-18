import React from 'react'
import { UserButton } from "@clerk/nextjs"
import { UserProfile } from "@clerk/nextjs";
import Navbar from './components/Navbar';


function page() {
  return (
    <div className='p-1 flex items-center overflow-x-hidden  bg-black text-white h-[100vh] flex-col'>
            <UserButton afterSignOutUrl="/"/>
            {/* <UserProfile /> */}
        <Navbar/>
      <div>
        This is the website for our tool.
      </div>

    
    </div>
  )
}

export default page