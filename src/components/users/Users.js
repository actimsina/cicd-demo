import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Users() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))
            .catch(() => setError("Error fetching data"))
    }, [])
    return (
        <div>
            <h1>List of Users</h1>
            {error && <p>{error}</p>}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
