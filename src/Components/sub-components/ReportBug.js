import React from "react";
import Select from 'react-select';

const ReportBug = () => {

    const activityOption = [
        { value: 'company1', label: 'company1' },
        { value: 'company1', label: 'company1' },
        { value: 'company1', label: 'company1' }
      ]

    return (
        <div class="col-md-6 offset-2 report-bug">
            <form method="POST" action="" className="group-control">
                <label>Title</label>
                <input className="form-control" type="text" id="report-title"/>

                <label>Activity</label>
                <Select id="report-activity" options={activityOption} />

                <label>Description</label>
                <textarea className="form-control"  id="report-desc"/>

                <button type="submit" className="btn btn-primary">Report</button>
            </form>
        </div>
    );
}

export default ReportBug;