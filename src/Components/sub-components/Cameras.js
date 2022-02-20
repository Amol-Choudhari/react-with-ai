import React from "react";

const Cameras = () =>{

    return (
        
        <div>
            <button className="btn btn-primary">Refresh</button>
            <div className="camera-status">
                <table className="table table-bordered">
                    <tr>
                        <th>Camera Name</th>
                        <th>Camera IP</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>Camera1</td>
                        <td>10.158.81.40</td>
                        <td>Running</td>
                    </tr>
                    <tr>
                        <td>Camera2</td>
                        <td>10.158.81.42</td>
                        <td>Running</td>
                    </tr>
                    <tr>
                        <td>Camera3</td>
                        <td>10.158.81.43</td>
                        <td>Stopped</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Cameras;