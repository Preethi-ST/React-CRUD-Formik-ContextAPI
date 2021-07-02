import React , {useState, useEffect} from 'react'
import axios from "axios";
// Step 1 -  create context for Users

export const UsersContext = React.createContext();

// Step2 - create a provider function
// All components wrapped inside Userprovider will be able to access Users data
export const UsersProvider = ({children}) => {
    const [UsersData, setUsersData] = useState([]);
    const BaseURL = `https://60dc2d4ac2b6280017feb777.mockapi.io`;
    const fetchUserData = async () => {
        await axios.get(`${BaseURL}/Formik-users`)
        .then(response => setUsersData(response.data) )
    }

    useEffect(() => {
        fetchUserData();
        return () => {
            <></>
        }
    }, [])
    return(
        <UsersContext.Provider value={[UsersData, setUsersData,BaseURL,fetchUserData]}>
            {children}
        </UsersContext.Provider>
    )
}

