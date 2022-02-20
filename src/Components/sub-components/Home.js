import React from "react";
import Select from 'react-select';

const Home = () =>{

    const Companies = [
        { value: 'company1', label: 'company1' },
        { value: 'company1', label: 'company1' },
        { value: 'company1', label: 'company1' }
      ]

    const Locations = [
    { value: 'location1', label: 'location1' },
    { value: 'location2', label: 'location2' },
    { value: 'location3', label: 'location3' }
    ]

    const Facilities = [
        { value: 'facility1', label: 'facility1' },
        { value: 'facility1', label: 'facility1' },
        { value: 'facility1', label: 'facility1' }
      ]

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4"><Select options={Companies} /></div>
                <div className="col-md-4"><Select options={Locations} /></div>
                <div className="col-md-4"><Select options={Facilities} /></div>
                <div className="clearfix"></div>
            </div>

            <div className="row">
                <div className="col-md-4 activity-count-out">
                    <h6>Total Activity Monitoring</h6>
                    <div className="activity-count">3</div>
                </div>
                <div className="col-md-4 camera-count-out">
                    <h6>Total Cameras</h6>
                    <div className="row">
                        <div className="col-md-6">
                            <span id="cam-run-count">15</span>
                            <p>Running</p>
                        </div>
                        <div className="col-md-6">
                            <span id="cam-close-count">4</span>
                            <p>Closed</p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    );
}

export default Home;