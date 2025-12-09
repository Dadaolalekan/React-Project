import React, { useState } from 'react'


const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchUsers = async () => {
        setIsLoading(true)
        try {
            const res = await fetch("https://fakestoreapi.com/users")
            const data = await res.json()
            console.log(data)
            setUsers(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='users'>
            <button onClick={fetchUsers}>Fetch Users</button>

            <h2>Users</h2>
            {
                isLoading ? (
                    <div className='loader'>
                        <h3>Loading...</h3>
                    </div>
                ) : (
                    <section>
                        {
                            users.length === 0 ? (
                                <div className='empty'>
                                    <h3>No User</h3>
                                </div>
                            ) : (
                                <div className='users-list'>
                                    {
                                        users.map((user, index) => (
                                            <div className='user-card' key={index}>
                                                <h2>{user.name.firstname} {user.name.lastname}</h2>
                                                <p>{user.email}</p>
                                                <p>{user.username}</p>
                                                <p>{user.address?.city}</p>
                                            </div>
                                        ))

                                    }
                                </div>
                            )
                        }
                    </section>
                )
            }
        </div>
    )
}

export default Users
