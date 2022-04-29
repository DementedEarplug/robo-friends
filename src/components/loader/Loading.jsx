import React from 'react'
import logo from './logo.svg'
import './loading.css'

const Loading = () => {
  return (
    <div>
      <img className='loader-logo' src={logo} alt="spinning atoms" />
      <h2 className='loading-text'>Loading...</h2>
    </div>
  )
}

export default Loading