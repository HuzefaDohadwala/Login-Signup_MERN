import React from 'react'
import { UserContext } from '../Context/userContext'
import { useContext } from 'react'

export const Dashboard = () => {
    const {user} = useContext(UserContext)
    console.log(user);
  return (
    <>
    <div>
        <h1>
            Dashboard
        </h1>
        {!!user && (<h1>Hi {user.name}!</h1>)}
    </div>
    </>
  )
}
