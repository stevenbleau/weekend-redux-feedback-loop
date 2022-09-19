import axios from 'axios';

const FeedbackItem = ({ activity, getActivities }) => {
    const deleteActivity = () => {
        axios({
            method: 'DELETE',
            url: `/activity/${activity.id}`
        }).then((response) => {
            getActivities();
        }).catch((err) => {
            console.log(err);
            alert('Something went wrong.');
        });
    }
    return (
        <div style={{margin: '20px 10px', fontSize: '1.4em'}}>
            <div>Person: {activity.name}</div>
            <div>Type of activity: {activity.type}</div>
            <div>Minutes: {activity.minutes}</div>
            <div>Miles: {activity.miles}</div>
            <button onClick={deleteActivity} className="button">Delete</button>
        </div>
    );
}

export default FeedbackItem;