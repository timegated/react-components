import React from 'react'
import Form from '../Forms/Form';
import Split from '../../composable-layout/Split';

const Sidebar = () => {
  return (
    <Split>
      <div>
        <h2>Personal Information</h2>
        <span>The information you provide will be displayed publicly.</span>
      </div>
      <Form />
    </Split>
  )
}

export default Sidebar
