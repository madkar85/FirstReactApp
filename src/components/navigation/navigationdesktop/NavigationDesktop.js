import React, {useContext} from 'react'
import { Link } from 'react-router-dom'  // alternativ ett
// import { useHistory } from 'react-router'// alternativ två
import RoutingPath from '../../../routes/RoutingPath'
import "./NavigationDesktop.css"
import { UserContext } from '../../../shared/provider/UserProvider'
import {Profile} from "../../profile/Profile";


// alternativ ett för att byta mellan sidor med Link
export const NavigationDesktop = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const changeSignedInView = () => {
        if(authenticatedUser) return (
        <span className="navbar">
            <Profile></Profile>
        </span>
        ); 
        else return (
            <Link className="signInLink" to={RoutingPath.signInView}>Sign in</Link>
        );
    };
    return (
        <span className="navbar">
            <Link className="test" to={RoutingPath.homeView}>Home</Link>
            <Link className="test" to={RoutingPath.storeView}>Store</Link>
            {changeSignedInView()}
        </span>
    )
}


// alternativ två för att byta sidor med useHistory (Hook)
/*
export const NavigationDesktop = () => {
    const history = useHistory();
    return (
        <nav>
            <button onClick = {() => history.push("/")}>Home</button>
            <button onClick = {() => history.push("signin")}>Sign in</button>            
        </nav>
    )
}
*/
