import React from 'react'
import { Breadcrumb, PostJobForm } from './sub-component'

const PostJobMain = () => {
  return (
    <>
      <main>
        <Breadcrumb />
        <section className="jobdtl-section">
          <div className="container">
          <PostJobForm/>
          </div>
        </section>
      </main>
    </>
  )
}

export default PostJobMain