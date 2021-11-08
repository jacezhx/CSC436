import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'
import{ Link } from 'react-navi'
import { useState, useContext } from 'react'
import { ThemeContext,StateContext } from '../Contexts'
import UserList from '../user/UserList';


export default function HomePage () {
    const { state, dispatch } = useContext(StateContext)
    const [accounts, getAccounts] = useResource(()=>({
        url: '/users',
        method: 'get'
    }))
    useEffect(getAccounts, [])
    useEffect(() => {
    if (accounts && accounts.data) {
            dispatch({ type: 'SHOW', accounts: accounts.data.reverse() })
        }
    }, [accounts])

    return (
        <>
            <UserList />
        </>
    )
    
}