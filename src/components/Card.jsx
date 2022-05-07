import React from 'react'

const Card = ({name, id, email, phone}) => {

  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot homie" />
      <div>
        <h2 role="name">{name}</h2>
        <p role="email">{email}</p>
        <p role="phone">{phone}</p>
      </div>
    </div>
  )
}

export default Card