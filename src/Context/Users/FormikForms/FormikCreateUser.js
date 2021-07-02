import React, { useContext, useState } from 'react'
import { useHistory,useParams } from 'react-router'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

/* Package to generate Unique ID */
import generateUniqueId from 'generate-unique-id'

/* To include Animated spinner add CSS import in App.js apart from below import */
import { SpinnerDotted } from 'spinners-react';

/* Package to validate Phone Number */
import "yup-phone";

/* Custom Modules */
import FormControl from './FormControl'
import { UsersContext } from '../Users';


function FormikCreateUser() {

    /* Getting data from Provider */
    const [UsersData,setUsersData,BaseURL,fetchUserData] = useContext(UsersContext);

    const history = useHistory();
    const [spinner,setSpinner] = useState(0)

    /* checking whether EDIT or CREATE */
    const pathFlag = history.location.pathname.includes('edit') ? 1 : 0;

    /* Code gets executed when user is on - EDIT */
    const editUserID = useParams();
    let UserTobeEdited = {};
    if(pathFlag){
        let User = UsersData.filter(user => user.uid === editUserID.uid);
        UserTobeEdited = User[0];
    }
    
    /* Conditionally rendering initial values based on CREATE or EDIT */
    const initialValues = {
        id : UserTobeEdited.id || '',
        uid : UserTobeEdited.uid || '',
        username : UserTobeEdited.username || '',
        email : UserTobeEdited.email || '',
        plan : UserTobeEdited.plan || '',
        gender: UserTobeEdited.gender || '',
        phonenumber : UserTobeEdited.phonenumber || '',
        address : UserTobeEdited.address || ''
    }

    const validationSchema = Yup.object({
        username : Yup.string().required('Name is mandatory'),
        email : Yup.string().email('Enter valid email').required('Email is required'),
        plan : Yup.string().required('Select plan'),
        gender : Yup.string().required('Gender is mandatory'),
        phonenumber : Yup.string().phone('Enter valid Number').required('Phone Number is mandatory'),
        address : Yup.string().required('Address is mandatory')
    })
    const onSubmit = async (values,onSubmitProps) => {
        if(history.location.pathname.includes('Create')||history.location.pathname.includes('edit') ){
            console.log("In spinner")
            setSpinner(1); 
        }

        if(!pathFlag){
            values.uid = generateUniqueId({length:36,includeSymbols: ['-']});
            await axios.post(`${BaseURL}/Formik-users`,values)
        }else{
            await axios.put(`${BaseURL}/Formik-users/${UserTobeEdited.id}`,values)
        }
        onSubmitProps.resetForm();
        fetchUserData();
        history.push('/Formik-users')
    } 

    const planOptions = [
        {key : 'Bronze',value: 'Bronze'},
        {key : 'Gold',value: 'Gold'},
        {key : 'Starter',value: 'Starter'},
        {key : 'Premium',value: 'Premium'},
        {key : 'Platinum',value: 'Platinum'},
        {key : 'Essential',value: 'Essential'},
        {key : 'Diamond',value: 'Diamond'},
        {key : 'Business',value: 'Business'}
    ]
    const genderRadio = [
        {key:'Male',value:'Male'},
        {key:'Female',value:'Female'},
        {key:'Other',value : 'Other'}
    ]
    return (
        <>
        {
            spinner === 0
            ?
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnMount>
            {
                (formik) => (
                    <Form>
                        {
                            UserTobeEdited.id
                            ? 
                            <FormControl control='input' type = 'text' label = 'User ID' name='id' disabled = {true} />
                            : <></>
                        }
                        <FormControl control='input' type = 'text' label = 'UserName' name='username' />
                        <FormControl control='input' type = 'email' label = 'Email' name= 'email' />
                        <FormControl control='select' label = 'Plan' name='plan' options = {planOptions} />
                        <FormControl control='radio' label= 'Gender' name="gender" options = {genderRadio} />
                        <FormControl control='input' type="text" name="phonenumber" label = 'PhoneNumber' />
                        <FormControl control='input' type="text" name="address" label="Address" />
                        <button type="submit" className={`btn btn-success ${!(formik.isValid) ? 'not-allowed' : ''}`} disabled= {!(formik.isValid)} >{!pathFlag ? 'Create' : 'Update'}</button>
                    </Form>
                )
            }
        </Formik>
        :
        
        <div className="d-flex align-items-center justify-content-center" style={{paddingTop:"150px",paddingBottom:"150px"}}>
            <SpinnerDotted /> 
            <span className = "text-success pl-2"> {!pathFlag ? 'Creating ...' : 'Updataing ...' }</span>
        </div>
        
        }
        </>
    )
}

export default FormikCreateUser

