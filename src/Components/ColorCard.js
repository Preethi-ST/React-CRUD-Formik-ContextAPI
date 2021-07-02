import React from 'react'

function ColorCard({color}) {
    const textColor = color.color !== "light" ? `white` : `black`
    return (
        <div className={`card bg-${color.color} text-${textColor} shadow mb-4`} >
            <div className="card-body">
                <span className="text-capitalize">{color.color}</span>
                <div className={`text-${textColor}-50 small`}>{color.value}</div>
            </div>
        </div>
    )
}

export default ColorCard
