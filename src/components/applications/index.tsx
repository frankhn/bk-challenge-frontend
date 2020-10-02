import React, { Component, Fragment } from 'react'
import { AppState } from '../../store'
import { connect } from 'react-redux'
import { getApplications } from './store/action'
import { Link } from 'react-router-dom'
import Modal from '../common/modals/Modal'
import ViewApplicant from '../common/table/applicant'

interface JobProps {
    getApplications(): any
    applications: Array<any>
}

interface State {
    modal: boolean
    application: any
}

class Applications extends Component<JobProps, State> {

    state: State = {
        modal: false,
        application: {}
    }

    componentDidMount() {
        this.props.getApplications()
    }

    modalHandler = () => {
        return this.setState(prevState => ({ modal: !prevState.modal }))
    }

    applicationHandler = (application: any) => {
        return this.setState({ modal: true, application })
    }


    render() {
        return (
            <>
                {this.props.applications && this.props.applications
                    ? this.props.applications.map(application => (
                        <div className="job" onClick={() => this.applicationHandler(application)} style={{ cursor: "pointer"}}>
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


                <ViewApplicant
                    application={this.state.application}
                    show={this.state.modal}
                    togglemodal={this.modalHandler}
                />
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