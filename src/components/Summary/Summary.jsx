
// Step 1: imports
import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import
import axios from 'axios';

const Summary = () => {
    const history = useHistory(); // useHistory
    const feeling = useSelector(store => store.feeling); // getter
    const understanding = useSelector(store => store.understanding); // getter
    const support = useSelector(store => store.support); // getter
    const comment = useSelector(store => store.comment); // getter
    const dispatch = useDispatch();
    console.log(history, feeling, understanding, comment );

    // Pass the data to the server
    const handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comment: comment,
            }
        }).then((response) => {
            // Clear all reducers
            dispatch({ type: 'CLEAR_ALL' });
            // Navigate to the Feedback Review
            history.push('/step/review');

        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!')
        })
    }

    return (
        <>
            <h2>Summary Page</h2>
            <div>
                <div style={{ margin: '20px 10px', fontSize: '1.4em' }}>
                    <div>Feeling: {feeling}</div>
                    <div>Understanding: {understanding}</div>
                    <div>Support: {support}</div>
                    <div>Comment: {comment}</div>
                </div>
                <button onClick={handleSubmit} className="button">Submit</button>
            </div>
        </>
    )
}

export default Summary;