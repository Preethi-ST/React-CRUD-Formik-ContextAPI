import React from 'react'
import ColorCard from './ColorCard'
function ColorSystem() {
    const colors = [
        {
            color : "primary",
            value : "#4e73df"
        },
        {
            color : "success",
            value : "#1cc88a"
        },
        {
            color : "info",
            value : "#36b9cc"
        },
        {
            color : "warning",
            value : "#f6c23e"
        },
        {
            color : "danger",
            value : "#e74a3b"
        },
        {
            color : "secondary",
            value : "#858796"
        },
        {
            color : "light",
            value : "#f8f9fc"
        },
        {
            color : "dark",
            value : "#5a5c69"
        }
    ]
    return (
        <div className="col-lg-12 mb-4">
        {
            colors.map((color,index) => {
                return <ColorCard key = {index} color = {color} />
            })
        }
        </div>
    )
}

export default ColorSystem
