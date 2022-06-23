import React, { useEffect, useState } from 'react'
import apiClient from '../services/Api'

const User = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        // apiClient.get('http://localhost:8000/sanctum/csrf-cookies').then(response => {
        apiClient.get('http://localhost:8000/api/arsip').then((response) => {
            const userData = JSON.parse(response.data.arsip)
            // const userData = "'"
            isMounted && setUser(userData)
            console.log(userData)
        }).catch((err) => {
            console.error(err)
        })
        // })

        return () => {
            isMounted = false
            controller.abort()
        }

    }, [])
    return (
        <div>
            <h2>User</h2>
            {user?.length
                ? (
                    <ul>
                        {user.map(item => {
                            return <li key={item.id}>{item.nama_arsip}</li>
                        })}
                    </ul>
                )
                : <p>No users</p>
            }
        </div>
    )
}

export default User