import React from "react";
import Select from 'react-select';

const ReportBug = () => {

    const activityOption = [
        { value: 'company1', label: 'company1' },
        { value: 'company1', label: 'company1' },
        { value: 'company1', label: 'company1' }
      ]

    return (
        <div class="col-md-8 report-bug">
            <form method="POST" action="" className="group-control">
                <lable>Title</lable>
                <input className="form-control" type="text" id="report-title"/>

                <lable>Activity</lable>
                <Select id="report-activity" options={activityOption} />

                <lable>Description</lable>
                <textarea className="form-control"  id="report-desc"/>

                <button type="submit" className="btn btn-primary">Report</button>
            </form>
        </div>
    );
}

export default ReportBug;