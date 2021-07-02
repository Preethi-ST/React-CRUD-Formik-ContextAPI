import React from 'react'
import DisplayDashboardData from './DisplayDashboardData'
import ProjectProgress from './ProjectProgress'
import ColorSystem from './ColorSystem'

function AdminDashboard() {
    const datas = [
        {
            Earnings : "Earnings (Monthly)",
            value : "$40,000",
            symbol : "fas fa-calendar",
            bar : 0,
            color:"primary"
        },
        {
            Earnings : "Earnings (Annual)",
            value : "$215,000",
            symbol : "fas fa-dollar-sign",
            bar : 0,
            color : "success"
        },
        {
            Earnings : "Tasks",
            value : "50%",
            symbol : "fas fa-clipboard-list",
            bar : 1,
            color:"info"
        },
        {
            Earnings : "Pending Requests",
            value : "18",
            symbol : "fas fa-comments",
            bar : 0,
            color:"warning"
        }
    ]
    
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="/" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-download fa-sm text-white-50"></i> 
                    Generate Report
                </a>
            </div>
            <div className="row">
            {
                datas.map((data,index) => {
                return <DisplayDashboardData key = {index} data = {data} />
                })
            }
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <ProjectProgress />
                </div>
              <div className="col-lg-6 mb-4"> 
                
                        <ColorSystem />
                   
                </div> 
            </div>
            
        </div>
    )
}

export default AdminDashboard
