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
        </div>
    );
}

export default Home;