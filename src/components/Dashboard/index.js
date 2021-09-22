import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Learn from './Learn'

function Dashboard() {
    return (
        <div className="dashboard">
            <Navbar />
            <Content />
        </div>
    )
}

export default Dashboard
