import React from 'react'
import { Breadcrumb, TimeSheetList } from './sub-component'
import Setting from '../settings/Setting'

const TimeSheetMain = () => {
  return (
    <>
    <main>
     <Breadcrumb />
       <section className="seting-section">
           <div className='container'>
           <div className="home-flex-main">
           <div className="home-flex-30">
           <Setting />
           </div>
           <div className="home-flex-70">
           <TimeSheetList />
               </div>
         </div>
           </div>
       </section>  
       </main>
   </>
  )
}

export default TimeSheetMain