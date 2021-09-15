import {useContext} from 'react';
import {UserContext} from "./../../shared/provider/UserProvider";
import "./Profile.css";
import { ProfileDropDown } from './profiledropdown/ProfileDropDown';

export const Profile = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    return (
        <div className="profile">
            <img className="profile__img" src="https://thispersondoesnotexist.com/image" alt="A random face" />
            <span className="profile__name">{authenticatedUser}</span>
            <ProfileDropDown />
        </div>
    )
};
