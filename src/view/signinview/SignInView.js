import { useState, useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import {useHistory} from "react-router";
import LocalStorage from "../../shared/storage/LocalStorage";

export const SignInView = () => {
    const [username, SetUsername] = useState();
    const [password, SetPassword] = useState();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const history = useHistory();

    const logIn = () => {
        setAuthenticatedUser(username);
        localStorage.setItem(LocalStorage.username, username);
        history.goBack();
    }
    return (
        <div>
            <h1>You are in SignIn View</h1>
            <h2>Användarnamn: {authenticatedUser}</h2>
            <input type="text" placeholder="Användarnamn" onChange={(event) => SetUsername(event.target.value)}></input> <br/>
            <input type="password" placeholder="Lösenord" onChange={(event) => SetPassword(event.target.value)}></input> <br/>
            <button onClick={() => logIn()}>Logga in</button>
        </div>
    )
}
