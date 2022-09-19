// Step 1: imports
import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const StepFour = () => {
    const history = useHistory(); // useHistory
    const comment = useSelector(store => store.comment);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_COMMENT', payload: event.target.value });
    }

    return(
        <>
            <h1>Any comments you want to leave?</h1>
            <div>
                <input value={comment} onChange={handleChange} className="input" type="text"/>
                <button onClick={() => history.push('/step/summary')} className="button">Next</button>
            </div>
        </>
    )
}

export default StepFour;