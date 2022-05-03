import React from 'react'

const Header = () => {
  console.log("Header")
  return (
    <h1 className='f1 title'>Robo Friends</h1>
  )
}

//React memo prevents unnecessary rerenders when components props dont change.
export default React.memo(Header)