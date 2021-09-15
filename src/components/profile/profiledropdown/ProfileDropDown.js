import { useContext } from 'react';
import { UserContext } from '../../../shared/provider/UserProvider';
import "./ProfileDropDown.css";
import {Link} from "react-router-dom";
import RoutingPath from '../../../routes/RoutingPath';
import { SettingsView } from '../../../view/settingsview/SettingsView';
import LocalStorage from '../../../shared/storage/LocalStorage';
import { useHistory } from 'react-router';

export const ProfileDropDown = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
    const history = useHistory();

    const logout = () => {
        setAuthenticatedUser(false);
        localStorage.removeItem(LocalStorage.username);
        history.push(RoutingPath.homeView);
    };

    return (
        <div className="profiledropdown">
            <p>Firstname Lastname</p>
            <p>email</p>
            <hr/>
            <Link to={RoutingPath.profileView}>Profile</Link>
            <br/>
            <Link to={RoutingPath.settingsView}>Settings</Link>
            <br/>
            <button onClick={() => logout()}>Log out</button>
        </div>
    )
}
