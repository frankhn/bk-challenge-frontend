import React from 'react';
import Modal from '../modals/Modal';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

interface Props {
    show: boolean;
    togglemodal: any;
    application: any
}

export default ({ show, togglemodal, application }: Props) => {
    return (
        <Modal
            isOpen={show}
            toggle={togglemodal}
            closeModal={togglemodal}
            title="Applicants's Details"
        >
            <div className="p-2">
                <div className="table-responsive">
                    <Table className="table-nowrap">
                        <tbody>
                            <tr>
                                <th scope="row">Job Applied</th>
                                <td>{application?.Job?.title}</td>
                            </tr>
                            <tr>
                                <th scope="row">Job Description</th>
                                <td>{application?.Job?.description}</td>
                            </tr>
                            <tr>
                                <th scope="row">Status</th>
                                <td>Submitted</td>
                            </tr>
                            <tr>
                                <th scope="row">Applied</th>
                                <td>{new Date(application?.updatedAt).toDateString()}</td>
                            </tr>
                            <tr>
                                <th scope="row">Applicant</th>
                                <td>{`${application?.User?.firstname} ${application?.User?.lastname}`}</td>
                            </tr>
                            <tr>
                                <th scope="row">Address</th>
                                <td>{application?.User?.address}</td>
                            </tr>
                            <tr>
                                <th scope="row">Gender</th>
                                <td>{application?.User?.gender}</td>
                            </tr>
                            <tr>
                                <th scope="row">Phone Number</th>
                                <td>{application?.User?.phone}</td>
                            </tr>
                            <tr>
                                <th scope="row">CV</th>
                                <td><a href={`${application?.User?.cv}`} target="_blank">CV</a></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </Modal>
    );
};
