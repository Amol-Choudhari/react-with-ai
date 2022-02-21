import React from "react";

const AddSite = () => {

    return (
        <div class="col-md-6 offset-2 report-bug">
            <form method="POST" action="" className="group-control">
                <label>Name</label>
                <input className="form-control" type="text" id="name"/>

                <label>Location</label>
                <input className="form-control" type="text" id="location"/>

                <label>Facility</label>
                <input className="form-control" type="text" id="facility"/>

                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
}

export default AddSite;