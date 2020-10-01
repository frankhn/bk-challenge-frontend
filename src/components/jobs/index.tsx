import React, { Component, Fragment } from 'react'
import { AppState } from '../../store'
import { connect } from 'react-redux'
import { getJobs } from './store/action'
import './index.css'
import { Link } from 'react-router-dom'

interface JobProps {
    getJobs(): any
    jobs: Array<any>
}


class Jobs extends Component<JobProps> {


    componentDidMount() {
        this.props.getJobs()
    }


    render() {
        return (
            <>
                {this.props.jobs && this.props.jobs
                    ? this.props.jobs.map(job => (
                        <div className="job">
                            <Link to={`/apply/${job.id}`}>
                                <h3>
                                    <strong>
                                        {job.title}
                                    </strong>
                                </h3>
                                <p>{job.description}</p>
                            </Link>
                        </div>
                    ))
                    : <div>fetching available Jobs... </div>}
            </>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    const { jobs } = state.jobs

    return {
        jobs
    }
}

export default connect(mapStateToProps, {
    getJobs
})(Jobs)