import React from 'react'
import { Breadcrumb, NotificationList } from './sub-component'

const NotificationMain = () => {
  return (
    <>
    <main>
      <Breadcrumb />
      <section className="jobdtl-section">
        <div className="container">
        <NotificationList />
        </div>
      </section>
    </main>
  </>
  )
}

export default NotificationMain