import axios from 'axios';
import React,{useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import MyModal from './Modal/MyModal';
import { UsersContext } from './Users'

function UsersList() {
    const [UsersData,setUsersData,BaseURL,fetchUserData] = useContext(UsersContext);
    const history = useHistory();
    const [modal,showModal] = useState(false);
    const [deleteID, setDeleteID] = useState('')
    const deleteUser = async (id) => {
        showModal(false);
        await axios.delete(`${BaseURL}/Formik-users/${id}`)
        console.log(`${BaseURL}/Formik-users/${id}`)
        fetchUserData();
    }
    const actionDelete = (ID) => {
        console.log(ID);
        setDeleteID(ID);
        showModal(true);
    }
    return (
        <>
            <MyModal show={modal} onHide ={() => showModal(false)} saveAction={() => deleteUser(deleteID)} cancelAction={() => showModal(false)} />
            <div className="container-fluid mb-4">
                <div className="news mb-3">
                    Users data fetched from API and used Formik for form creation and validation
                </div>
                <div className="card shadow">
                    <div className="card-header">
                        <h4 className="float-left text-info">Users</h4>
                        <Link className="btn btn-info float-right" to='/Formik-CreateUser'> Create User </Link>
                    </div>
                    { 
                        UsersData.length 
                        ? 
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-info table-striped" style={{borderRadius:"10px"}}>
                                <thead style={{color:"rgb(105, 54, 156)"}}>
                                    <tr>
                                    <th scope="col">UserId</th>
                                    <th scope="col">UserName</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Plan</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody  style={{color:"rgba(110, 71, 145, 0.966)"}}>
                                    {
                                        UsersData.map(user => {
                                            return (
                                                <tr key = {user.id}>
                                                    <th scope="row">{user.id}</th>
                                                    <td>{user.username}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.plan}</td>
                                                    <td>{user.gender}</td>
                                                    <td>{user.phonenumber}</td>
                                                    <td>{user.address}</td>
                                                    <td style={{cursor:"pointer"}}>
                                                        <i className="fas fa-user-edit text-primary" onClick={() => history.push(`/Formik-editUser/${user.uid}`)}></i>
                                                        <i className="fas fa-trash pl-2 text-danger" onClick = {() => actionDelete(user.id)}></i>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                </table>  
                            </div>      
                        </div>
                        : 
                        <div className="d-flex justify-content-center" style={{paddingTop:"150px",paddingBottom:"150px"}}>
                            <span className="spinner-grow text-info" role="status"></span>
                            <span className="ml-3 text-info">Loading ...</span>
                                
                        </div>
                    }
                </div> 
            </div>
                
               
           
        </>
    )
}

export default UsersList
