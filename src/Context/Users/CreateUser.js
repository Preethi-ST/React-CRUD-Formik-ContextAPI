import React from 'react'
import { useHistory } from 'react-router-dom';
import FormikCreateUser from './FormikForms/FormikCreateUser';

function CreateUser() {
    const history = useHistory();
    const path = history.location.pathname.includes('Create') ? 1 : 0
    return (
        <div className={`container-fluid`}>
            <div className="card shadow">
                <div className="card-header">
                    <h4 className="float-left text-info">{path ? 'Create User' : 'Update User'}</h4>
                </div>
                <div className="card-body">
                    <FormikCreateUser />
                </div>
            </div>
        </div>
    )
}

export default CreateUser
