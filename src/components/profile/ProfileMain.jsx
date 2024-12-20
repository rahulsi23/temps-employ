import React from 'react'
import { Breadcrumb, ProfileForm } from './sub-component'
import Setting from '../settings/Setting'

const ProfileMain = () => {
  return (
    <>
   
     
      <main>
      <Breadcrumb />
        <section className="workhistory-section">
            <div className='container'>
            <div className="home-flex-main">
            <div className="home-flex-30">
            <Setting />
            </div>
            <div className="home-flex-70">
                <ProfileForm/>
                </div>
          </div>
            </div>
        </section>
       </main>
    </>
  )
}


export default ProfileMain