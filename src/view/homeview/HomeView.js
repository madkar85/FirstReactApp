import {GreetUser} from "../../components/greetuser/GreetUSer" 
import {ErrorButton} from "../../components/errorbutton/ErrorButton"
import { ErrorMessage } from "../../components/errormessage/ErrorMessage"

export const HomeView = () => {
    return (
        <div>
            <h1>You are in Home View</h1>
                <GreetUser name="dotNet20D" age="1" />
                <ErrorButton>Alert!</ErrorButton>
                <ErrorMessage message="A dangerous error has occured on the site."/>
            
        </div>
    )
}
