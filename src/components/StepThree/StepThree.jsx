// Step 1: imports
import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const StepTwo = () => {
    const history = useHistory(); // useHistory
    const support = useSelector(store => store.support);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
    }

    return(
        <>
            <h1>How well are you being supported</h1>
            <div>
                <input value={support} onChange={handleChange} className="input" type="number"/>
                <button onClick={() => history.push('/step/four')} className="button">Next</button>
            </div>
        </>
    )
}

export default StepTwo;