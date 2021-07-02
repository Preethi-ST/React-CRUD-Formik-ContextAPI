import React from 'react'
import ProgressBar from './ProgressBar'
function ProjectProgress() {
    const Projects = [
        {
            topic : "Server Migration",
            value : "20",
            color : "danger"
        },
        {
            topic : "Sales Tracking",
            value : "40",
            color : "warning"
        },
        {
            topic : "Customer Database",
            value : "60",
            color : "primary"
        },
        {
            topic : "Payout Details",
            value : "80",
            color : "info"
        },
        {
            topic :"Account Setup",
            value : "Complete!",
            color : "success"
        }
    ]
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
                {
                    Projects.map((project,index) => <ProgressBar key={index} project = {project} />)
                }
                
            </div>
        </div>
    )
}

export default ProjectProgress
