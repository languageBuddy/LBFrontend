import React from 'react'
import Navbar from './Navbar'
import Sidebars from './Sidebars'
import Content from './Content'


function Dashboard() {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="d-flex" style={{ height: "100vh" }}>
                <Sidebars />
                <Content />
            </div>
        </div>
    )
}

export default Dashboard
