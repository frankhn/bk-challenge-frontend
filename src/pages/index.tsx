import React, { Fragment } from 'react'
import Jobs from '../components/jobs'
import Applications from '../components/applications'
import Separator from '../components/common/separator'

const home = () => {
    return (
        <>
            <div className="container" style={{ display: "flex"}}>

                <Jobs />

                <Applications />
            </div>
        </>
    )
}

export default home