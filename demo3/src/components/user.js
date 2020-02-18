import React, { useContext, useEffect } from 'react'
import Context from '../Context'
import ajax from '../ajax'

function User() {

    const { state, dispatch } = useContext(Context)

    // 使用 useEffect 的效果：多次 User 执行（重新渲染），只有第一次 ajax 会执行
    useEffect(() => {
        ajax('/user').then(user => {
            dispatch({ type: 'setUser', user })
        })
    }, [])

    return (
        <div>
            <h1>个人信息:</h1>
            <div>name:{state.user ? state.user.name : ''}</div>
        </div>
    )
}

export default User