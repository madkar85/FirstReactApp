import {useState} from 'react'

export const ErrorMessage = (props) => {
    const [isErrorFixed, setIsErrorFixed] = useState(false);

    const displayMessage = () => {
        if (isErrorFixed) return "Error is fixed!!";
        return props.message;
    }
    return (
        <div>
            <h3>{displayMessage()}</h3>
            <button onClick={() => setIsErrorFixed(true)}>Fixed error</button>
            <button onClick={() => setIsErrorFixed(false)}>Error is not fixed</button>
        </div>
    )
}
