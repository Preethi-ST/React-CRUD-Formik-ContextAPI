import React from 'react'

function ProgressBar({project}) {
    const width = project.value === 'Complete!' ? '100' : project.value;
    return (
        <>
            <h4 className="small font-weight-bold">
                {project.topic}
                <span className="float-right">{project.value}{project.value === 'Complete!' ? '' : '%'}</span>
            </h4>
            <div className="progress mb-4">
                <div className={`progress-bar bg-${project.color} `} role="progressbar" style = {{width : `${width}%`}}
                    aria-valuenow={`${width}`} aria-valuemin="0" aria-valuemax="100">
                </div>
            </div> 
        </>
    )
}

export default ProgressBar
