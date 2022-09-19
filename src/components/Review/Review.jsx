// Step 1: imports
import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const Review = () => {
    const history = useHistory(); // useHistory

    return(
        <>
            <h1>Thank You!</h1>
            <button onClick={() => history.push('/step/one')} className="button">Leave new feedback</button>
        </>
    )
}

export default Review;