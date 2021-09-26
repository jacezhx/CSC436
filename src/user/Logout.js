import React from 'react'

export default function Logout({user,handleLogout}) {

  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleLogout()

    
}
    return (
      <form onSubmit={handleSubmit}>
         Logged in as: <b>{user}</b>&nbsp;&nbsp;
         <input type="submit" value="Logout" />
      </form>
     )
 }
 