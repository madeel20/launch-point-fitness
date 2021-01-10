import { Button } from 'antd'
import React from 'react'

function CMediaContainer({label,buttonLabel}) {
    return (
        <div className="c-media-container">
                <div className="d-flex justify-content-between align-items-center mb-1">
                        <p>{label}</p>
                        <Button>{buttonLabel}</Button>
                </div>
                <div className="pics-container">

                </div>
        </div>
    )
}

export default CMediaContainer
