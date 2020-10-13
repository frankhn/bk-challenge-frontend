import React, { Component, Fragment } from 'react'
import { AppState } from '../../store'
import { connect } from 'react-redux'
import { getJobs, createJob } from './store/action'
import './index.css'
import { Link } from 'react-router-dom'
import Modal from '../common/modals/Modal'
import { AvField, AvForm } from 'availity-reactstrap-validation'
import { Alert } from 'reactstrap'
import Loader from '../common/Spinner/Loader'
import { Button } from 'reactstrap';

interface JobProps {
    getJobs(): any
    jobs: Array<any>
    createJob(job: any): any
    newJob: any,
    errorCreatingJob: any
}

interface State {
    modal: boolean
}

class Jobs extends Component<JobProps, State> {
    state: State = {
        modal: false,
    }

    componentDidMount() {
        this.props.getJobs()
    }

    handleValidSubmit = (e: Event, values: any) => {
        return this.props.createJob(values)
    }


    // hide the modal
    shouldComponentUpdate(prevProps: JobProps, nextState: State) {
        const { newJob } = this.props;
        if (newJob && newJob && newJob.id !== prevProps.newJob.id) {
            this.createJobModalHandler();
            this.props.getJobs()
        }
        return true;
    }


    createJobModalHandler = () => {
        return this.setState(preState => ({ modal: !preState.modal }))
    }


    render() {
        return (
            <div className="col-md-6">
                <Button color="primary" onClick={this.createJobModalHandler}>Create A Job</Button>
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
                    : <Loader />}

                <Modal
                    isOpen={this.state.modal}
                    closeModal={this.createJobModalHandler}
                    toggle={this.createJobModalHandler}
                    title="Create Job">
                    <div className="register">
                        {this.props.newJob && this.props.newJob
                            ? < Alert color="success"> Job Create successfully</Alert>
                            : null}
                        {this.props.errorCreatingJob && this.props.errorCreatingJob
                            ? < Alert color="danger"> An error has occured</Alert>
                            : null}
                        <AvForm
                            className="form-horizontal"
                            onValidSubmit={this.handleValidSubmit}>
                            <div className="form-group">
                                <AvField
                                    type="text"
                                    name="title"
                                    label="Job Title"
                                    required
                                    value=""
                                    placeholder="senior full stack engineer "
                                />
                            </div>
                            <AvField
                                type="textarea"
                                name="description"
                                label="Description"
                                required
                            />

                            <div className="submit-btn">
                                <Button
                                    color="primary"
                                    className="btn"
                                    type="submit"
                                    style={{ border: '1px solid #ccc' }}
                                >Apply</Button>
                            </div>

                        </AvForm>

                    </div>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    const { jobs, newJob, errorCreatingJob } = state.jobs

    return {
        jobs, newJob, errorCreatingJob
    }
}

export default connect(mapStateToProps, {
    getJobs, createJob
})(Jobs)