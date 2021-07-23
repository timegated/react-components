import React from 'react'
import Newsletter from '../../components/Newsletter/Newsletter';
import Sidebar from '../../components/Sidebar/Sidebar';

const Composable = () => {
  return (
    <div style={{ maxWidth: '85%', margin: 'auto' }}>
      <h1>Composable Layouts</h1>
      <Newsletter />
      <Sidebar />
    </div>
  )
}

export default Composable
