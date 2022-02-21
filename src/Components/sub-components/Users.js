import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";


const Users = () =>{

    let navigate = useNavigate();
    const changeRoute = () => {
        let path=`./add-user`;
        navigate(path);
    }
    return (
        
        <div>
            <button className="btn btn-primary" onClick={changeRoute} >Add User</button>
            <div className="camera-status">
                <table className="table table-bordered">
                    <tr>
                        <th>User Name</th>
                        <th>Is Admin</th>
                        <th>Allow Verification</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Pankaj</td>
                        <td><CheckIcon /></td>
                        <td><CheckIcon /></td>
                        <td><button className="btn btn-primary">Edit</button></td>
                    </tr>
                    <tr>
                        <td>Amol</td>
                        <td><CheckIcon /></td>
                        <td><CloseIcon /></td>
                        <td><button className="btn btn-primary">Edit</button></td>
                    </tr>
                    <tr>
                        <td>Pravin</td>
                        <td><CloseIcon /></td>
                        <td><CloseIcon /></td>
                        <td><button className="btn btn-primary">Edit</button></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Users;