import React, { useEffect, useState } from 'react'
import apiClient from '../services/Api'

const Arsip = () => {
    const [arsip, setArsip] = useState([])

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        // apiClient.get('http://localhost:8000/sanctum/csrf-cookies').then(respomse => {
        apiClient.post('http://localhost:8000/api/request-read').then((response) => {
            console.log(response.data)
            isMounted && setArsip(JSON.parse(response.data.data))
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
            {arsip?.length
                ? (
                    <ul>
                        {arsip.map((item) => {
                            return <li>{arsip}</li>
                        })}
                    </ul>
                )
                : <p>No User</p>
            }
        </div >
    )
}

export default Arsip