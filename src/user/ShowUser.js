import React, { useState, useContext } from 'react'
import { ThemeContext,StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'

export default function ShowUser ({username,userId}){
    const{dispatch} = useContext(StateContext)
    return (<div>
        {username}
    </div>)
}