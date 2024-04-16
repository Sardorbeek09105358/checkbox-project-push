import React, { useState } from 'react'
const Todos = () => {
    const [users, setUsers] = useState([
        { id: 1, title: "alisher", check: false },
        { id: 2, title: "javohir", check: false },
        { id: 3, title: "dilshod", check: false },
    ])
    const [actives, setActives] = useState([{ id: 1, title: "alisher", check: false },])
    const moveItems = (value) => {
        if (value === "users") {
            users.forEach((item, index) => {
                if (item.check === true) {
                    actives.push(item)
                    users.splice(index, 1)
                    setActives([...actives])
                    setUsers([...users])
                }
            })
        } else {
            actives.forEach((item, index) => {
                if (item.check === true) {
                    users.push(item)
                    actives.splice(index, 1)
                    setUsers([...users])
                    setActives([...actives])
                }
            })
        }
    }
    const hanleChangeuser = (id) => {
        users.forEach((item) => {
            if (item.id === id) {
                item.check = !item.check
            }
        })
    }
    const hanleChangeActive = (id) => {
        actives.forEach((item) => {
            if (item.id === id) {
                item.check = !item.check
            }
        })
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h1 className='text-center'>Users</h1>
                        </div>
                        <div className="card-body">
                            {
                                users.map((item, index) => {
                                    return <div key={index} className="d-flex align-items-center gap-3">
                                        <span>{item.title}</span>
                                        <input type="checkbox" onChange={() => hanleChangeuser(item.id)} />
                                    </div>
                                })
                            }
                        </div>
                        <div className="card-footer">
                            <button onClick={() => moveItems('users')} className="btn btn-info">o'tkazish</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h1 className='text-center'>actives</h1>
                        </div>
                        <div className="card-body">
                            {
                                actives.map((item, index) => {
                                    return <div key={index} className="d-flex align-items-center gap-3">
                                        <span>{item.title}</span>
                                        <input type="checkbox" onChange={() => hanleChangeActive(item.id)} />
                                    </div>
                                })
                            }
                        </div>
                        <div className="card-footer">
                            <button onClick={() => moveItems('actives')} className="btn btn-info">o'tkazish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todos

