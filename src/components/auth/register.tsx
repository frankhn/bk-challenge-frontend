import React, { Component, Fragment } from 'react'
import { AppState } from '../../store'
import { connect } from 'react-redux'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { register } from './store/action'

interface AppylProps {
    jobs: Array<any>
    register(values: any): any
}


class Register extends Component<AppylProps> {

    handleValidSubmit = (e: Event, values: any) => {
        this.props.register(values)
    }

    render() {
        return (
            <Fragment>
                <h2>Apply to this Job</h2>
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
                            name="birthdate"
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
                            >Register
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

    return {
        jobs
    }
}

export default connect(mapStateToProps, {
    register
})(Register)