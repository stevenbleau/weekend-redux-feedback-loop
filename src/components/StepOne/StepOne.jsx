// Step 1: imports
import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const StepOne = () => {
    const history = useHistory(); // useHistory
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_FEELING', payload: event.target.value });
    }

    return(
        <>
            <h1>How are you feeling today?</h1>
            <div>
                <input value={feeling} onChange={handleChange} className="input" type="number"/>
                <button onClick={() => history.push('/step/two')} className="button">Next</button>
            </div>
        </>
    )
}

export default StepOne;