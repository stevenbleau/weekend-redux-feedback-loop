// Step 1: imports
import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import

const StepTwo = () => {
    const history = useHistory(); // useHistory
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value });
    }

    return(
        <>
            <h1>How well are you understanding the content?</h1>
            <div>
                <input value={understanding} onChange={handleChange} className="input" type="number"/>
                <button onClick={() => history.push('/step/three')} className="button">Next</button>
            </div>
        </>
    )
}

export default StepTwo;