import React from 'react'
import Setting from '../settings/Setting'
import { RatingTable, Breadcrumb } from './sub-component'

const RatingListMain = () => {
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
            <RatingTable />
                </div>
          </div>
            </div>
        </section>  
        </main>
    </>
  )
}

export default RatingListMain