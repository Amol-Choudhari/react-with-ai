import React from "react";

const Login = () => {

    return (
        <div class="col-md-6 offset-2 report-bug">
            <form method="POST" action="" className="group-control">
                <label>User Id</label>
                <input className="form-control" type="text" id="user-id"/>

                <label>Password</label>
                <input className="form-control" type="password" id="user-password"/>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;