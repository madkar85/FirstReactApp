import React, {useContext, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeView } from '../view/homeview/HomeView';
import { SignInView } from '../view/signinview/SignInView';
import { StoreView } from '../view/storeview/StoreView';
import { SettingsView } from '../view/settingsview/SettingsView';
import { ProfileView } from '../view/profileview/ProfileView';
import RoutingPath from './RoutingPath';
import { UserContext } from '../shared/provider/UserProvider';
import LocalStorage from '../shared/storage/LocalStorage';
import { useHistory } from 'react-router';

export const Routes = ({children}) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

    const isUserAuthenticated = () => {
        const userFromMemory = localStorage.getItem(LocalStorage.username);
        setAuthenticatedUser(userFromMemory);
    }

    useEffect(() => {
        isUserAuthenticated();
    },[]);
    
    const blockIfAuthenticated = (view) => {
        if (!authenticatedUser) return view;
        else return HomeView;
    };

    //const blockIfAuthenticated2 = view => (!authenticatedUser ? view : HomeView); samma som metoden ovan men på ett annat sätt

    const authenticationRequired = (view) => authenticatedUser ? view : HomeView;


    return (
        <BrowserRouter basename="/FirstReactApp">
            {children}
            <Switch>
                <Route exact path={RoutingPath.storeView} component={StoreView} />              
                <Route exact path={RoutingPath.signInView}
                component={blockIfAuthenticated(SignInView)} />
                <Route exact path={RoutingPath.profileView} component={authenticationRequired(ProfileView)} />
                <Route exact path={RoutingPath.settingsView} component={authenticationRequired(SettingsView)}/>
                <Route path={RoutingPath.homeView} component={HomeView} />
            </Switch>
        </BrowserRouter>
    );    
};

