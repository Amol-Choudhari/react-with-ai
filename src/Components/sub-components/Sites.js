import React from "react";
import { useNavigate } from "react-router-dom";

const Sites = () =>{

    let navigate = useNavigate();
    const changeRoute = () => {
        let path=`./add-site`;
        navigate(path);
    }

    return (
        
        <div>
            <button className="btn btn-primary" onClick={changeRoute}>Add Site</button>
            <div className="camera-status">
                <table className="table table-bordered">
                    <tr>
                        <th>Site Name</th>
                        <th>Location</th>
                        <th>Facility</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Site1</td>
                        <td>Location1</td>
                        <td>Facility1</td>
                        <td><button className="btn btn-primary">Edit</button></td>
                    </tr>
                    <tr>
                        <td>Site2</td>
                        <td>Location2</td>
                        <td>Facility2</td>
                        <td><button className="btn btn-primary">Edit</button></td>
                    </tr>
                    <tr>
                        <td>Site3</td>
                        <td>Location3</td>
                        <td>Facility3</td>
                        <td><button className="btn btn-primary">Edit</button></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Sites;