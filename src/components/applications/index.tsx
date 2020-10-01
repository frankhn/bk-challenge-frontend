import React, { Component, Fragment } from 'react'
import { AppState } from '../../store'
import { connect } from 'react-redux'
import { getApplications } from './store/action'
import { Link } from 'react-router-dom'

interface JobProps {
    getApplications(): any
    applications: Array<any>
}


class Applications extends Component<JobProps> {


    componentDidMount() {
        this.props.getApplications()
    }


    render() {
        return (
            <>
                {this.props.applications && this.props.applications
                    ? this.props.applications.map(application => (
                        <div className="job">
                            <div >
                                <h3>
                                    <strong>
                                        {`${application.User.firstname} ${application.User.lastname}`}
                                    </strong>
                                </h3>
                                <h5>Job Applied</h5>
                                <p> Job {application.Job.title}</p>
                                <p> Descr{application.Job.description}</p>
                            </div>
                        </div>
                    ))
                    : <div>fetching available applications... </div>}
            </>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    const { applications } = state.applications

    return {
        applications
    }
}

export default connect(mapStateToProps, {
    getApplications
})(Applications)