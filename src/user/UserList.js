import React from 'react'
import ShowUser from './ShowUser'
import { StateContext } from '../Contexts'
import { useContext } from 'react'

export default function ToDoList () {
      const{state} = useContext(StateContext)
      const{accounts} = state
     return (
      <div>
       <h2>All Registered Users</h2>
       {accounts.map((account, i) => <ShowUser username={account.username} userId ={account.id} key={'user-' + i} />)}
      </div> 
      )
}