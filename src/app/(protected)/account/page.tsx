import React from 'react'
import { UserButton } from "@clerk/nextjs"

// this is protected page

function page() {
  return (
    <div>
  
  {/* <UserButton afterSignOutUrl="/"/> */}
       <p>This is protected </p>
    </div>
  )
}

export default page
