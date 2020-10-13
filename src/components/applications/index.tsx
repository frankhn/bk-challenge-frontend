import React, { useEffect, useState } from 'react'
import { AppState } from '../../store'
import { connect, useDispatch } from 'react-redux'
import { getApplications } from './store/action'
import ViewApplicant from '../common/table/applicant'
import updateObject from '../../helpers/updateObject'
import './index.css'

interface JobProps {
    getApplications(): any
    applications: Array<any>
}

interface State {
    modal: boolean
    application: any
}

const initialState = {
    modal: false,
    application: {}
}

const Applications = ({ applications }: JobProps) => {

    const [state, setState] = useState(initialState)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getApplications())
    }, [])

    const modalHandler = () => {
        return setState(updateObject(state, {
            modal: !state.modal
        }))
    }

    const applicationHandler = (application: any) => {
        return setState(updateObject(state, {
            modal: true, application
        }))
    }

    return (
        <div className="col-md-6" style={{ padding: "0 5rem" }}>
            <div style={{ marginBottom: "2.8rem",textAlign: "center",fontSize: "1.5rem", fontWeight: 800 }}>Applications</div>
            {applications && applications
                ? applications.map(application => (
                    <div className="application" onClick={() => applicationHandler(application)} style={{ cursor: "pointer" }}>
                        <div >
                            <h3 className="appli-name">
                                <strong>
                                    {`${application.User.firstname} ${application.User.lastname}`}
                                </strong>
                            </h3>
                            <h6 style={{ color: "#ccc"}}>Job Applied</h6>
                            <p> Job {application.Job.title}</p>
                            <p> Descr{application.Job.description}</p>
                        </div>
                    </div>
                ))
                : <div>fetching available applications... </div>}


            <ViewApplicant
                application={state.application}
                show={state.modal}
                togglemodal={modalHandler}
            />
        </div>
    )
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