import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActivityItem from './ActivityItem.jsx';

function FeedbackList() {
    let [feedbackList, setFeedbackList] = useState([]);

    // On Load, fetch activity data from the server
    useEffect(() => {
        console.log('in useEffect')
        getFeedback();
    }, []);

    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            setFeedbackList(response.data);
        }).catch((err)=>{
            console.log(err);
            alert('Something went wrong.');
        });
    };

    return (
        <div>
            {
                feedbackList.map(item => (
                    <ActivityItem key={item.id} fe={item} getActivities={getActivities} />
                ))
            }
        </div>
    );
    
}

export default FeedbackList;
