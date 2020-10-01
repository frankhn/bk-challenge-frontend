import React, { Fragment } from 'react'
import Jobs from '../components/jobs'
import Applications from '../components/applications'

const home = () => {
    return (
        <Fragment>
            <h1>Available Jobs</h1>

            <Jobs />

            <h2>Applications</h2>

            <Applications />
        </Fragment>
    )
}

export default home