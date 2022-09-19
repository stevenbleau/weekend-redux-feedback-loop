import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActivityItem from './ActivityItem.jsx';

function FeedbackList() {
    let [activityList, setActivityList] = useState([]);

    // On Load, fetch activity data from the server
    useEffect(() => {
        console.log('in useEffect')
        getActivities();
    }, []);

    const getActivities = () => {
        axios({
            method: 'GET',
            url: '/activity'
        }).then((response) => {
            setActivityList(response.data);
        }).catch((err)=>{
            console.log(err);
            alert('Something went wrong.');
        });
    };

    return (
        <div>
            {
                activityList.map(item => (
                    <ActivityItem key={item.id} activity={item} getActivities={getActivities} />
                ))
            }
        </div>
    );
    
}

export default FeedbackList;
