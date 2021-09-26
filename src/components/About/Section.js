import React from 'react'
import ImageSection from './ImageSection'
import ParaSection from './ParaSection'

function Section() {
    return (
        <div className="container-fluid mt-3 mb-3 p-3" style={{ backgroundColor: "#ECEFF1" }}>
            <div className="row mb-3">
                <ImageSection />
                <ParaSection />
            </div>
            <div className="row mb-3">
                <ParaSection />
                <ImageSection />
            </div>

            <div className="row">
                <ImageSection />
                <ParaSection />
            </div>
        </div>
    )
}

export default Section
