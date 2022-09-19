// Step 1: imports
import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const StepTwo = () => {
    const history = useHistory(); // useHistory
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_FEELING', payload: event.target.value });
    }

    return(
        <>
            <h1>How well are you understanding the content?</h1>
            <div>
                <input value={feeling} onChange={handleChange} className="input" type="number"/>
                <button onClick={() => history.push('/step/three')} className="button">Next</button>
            </div>
        </>
    )
}

export default StepTwo;