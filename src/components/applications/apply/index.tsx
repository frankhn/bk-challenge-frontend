import React, { Component, Fragment } from 'react'
import { AppState } from '../../../store'
import { connect } from 'react-redux'
import { apply } from './store/action'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { getJobs } from '../../jobs/store/action'

interface AppylProps {
    match: any
    apply(application: any, job: any): any
    jobs: Array<any>
    getJobs(): any
    applies: string
}


class Apply extends Component<AppylProps> {

    componentDidMount() {
        this.props.getJobs()
    }

    handleValidSubmit = (e: Event, values: any) => {
        const { id } = this.props.match.params
        this.props.apply({
            ...values,
            bithdate: `${values.bithdate}`,
        }, id)
    }


    render() {

        const { jobs } = this.props
        const { id } = this.props.match.params
        let job: any = ''
        if (jobs && jobs) {
            job = jobs.filter(job => job.id == id)[0]
        }
        return (
            <Fragment>
                <h2>You are Appylying for {job.title}</h2>
                <hr />
                { this.props.applies && this.props.applies
                    ? <h2 style={{
                        color: "#53A831",
                        textDecoration: "underline",
                        fontWeight: "bolder"
                    }}>
                        {this.props.applies}
                    </h2>
                    : <h2>Apply to this Job</h2>
                }

                <hr />
                <div className="register">
                    <AvForm
                        className="form-horizontal"
                        onValidSubmit={this.handleValidSubmit}>
                        <div className="form-group">
                            <AvField
                                type="text"
                                name="firstname"
                                label="First Name"
                                required
                                value=""
                                placeholder="First Name"
                            />
                        </div>
                        <AvField
                            type="text"
                            name="lastname"
                            label="Last Name"
                            required
                        />
                        <AvField
                            type="email"
                            name="email"
                            label="Email"
                            required
                        />
                        <AvField
                            type="text"
                            name="address"
                            label="Address"
                            required
                        />
                        <AvField
                            type="number"
                            name="age"
                            label="Age"
                            required
                        />
                        <AvField
                            type="select"
                            name="gender"
                            label="Gender"
                            required>
                            <option value="male">Male</option>
                            <option value="Female">Female</option>
                        </AvField>
                        <AvField
                            type="date"
                            name="bithdate"
                            label="Birth Date"
                            required
                        />
                        <AvField
                            type="text"
                            name="phone"
                            label="Phone Number"
                            required
                        />
                        <AvField
                            type="text"
                            name="password"
                            label="Password"
                            required
                        />

                        <AvField
                            type="url"
                            name="cv"
                            label="Link To You CV"
                            required
                        />

                        <div className="submit-btn">
                            <button
                                className="btn"
                                type="submit"
                                style={{ border: '1px solid #ccc' }}
                            >Apply
                  </button>
                        </div>

                    </AvForm>

                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state: AppState) => {
    const { jobs } = state.jobs
    const { applies } = state.applied

    return {
        jobs,
        applies
    }
}

export default connect(mapStateToProps, {
    getJobs,
    apply
})(Apply)