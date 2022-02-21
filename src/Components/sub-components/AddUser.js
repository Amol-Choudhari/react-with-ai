import React from "react";

const AddUser = () => {

    return (
        <div class="col-md-6 offset-2 report-bug">
            <form method="POST" action="" className="group-control">
                <label>Name</label>
                <input className="form-control" type="text" id="name"/>

                <label>Email</label>
                <input className="form-control" type="email" id="email"/>

                <label>Username</label>
                <input className="form-control" type="text" id="username"/>

                <label>Password</label>
                <input className="form-control" type="password" id="password"/>

                <input type="checkbox" id="consent" />Allow user to verify process deviation
                <br />
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
}

export default AddUser;