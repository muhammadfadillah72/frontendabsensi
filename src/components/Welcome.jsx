import React from 'react'
import { useSelector } from 'react-redux'

const Welcome = () => {
  const {user, employee} = useSelector((state) => state.auth);

  return (
    <div>
        <h1 className='title'>Dashboard</h1>
        <h2 className='subtitle'>
          Welcome <strong>{user && user.username}</strong>
        </h2>
    </div>
  )
}

export default Welcome