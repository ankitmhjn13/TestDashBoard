import React, {Component} from 'react';
import {Timeline, TimelineBlip} from 'react-event-timeline'
import './../app.css';

class TimeLineEvent extends Component{
    render(){
        return(
            <div style={{height: '100vh',fontFamily: 'Roboto'}} className="shiftBottom">
                <h4>Release Schedule</h4>
                <hr />
                <Timeline>
                <TimelineBlip
                  title="Ankit Mahajan (25-July-2019)"
                  iconStyle={{marginLeft: 1,marginTop: 0}}
                  icon={<i />}
                  iconColor="#eb3434"
                />
                <TimelineBlip title="SSSSSSS (01-Aug-2019)" icon={<i />} iconColor="#ebeb34"/>
                <TimelineBlip title="ABC (08-Aug-2019)" icon={<i />} iconColor="#6beb34"/>
                </Timeline>
            </div>
        );
    }
}

export default TimeLineEvent;