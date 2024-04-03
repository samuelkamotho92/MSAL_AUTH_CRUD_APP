import { InteractionType } from "@azure/msal-browser"
import { MsalAuthenticationTemplate } from "@azure/msal-react"
import { loginRequest } from "~/authProvider/authConfig"

const LoadingComponent = () => {
    return <p>Authentication in progress</p>
}

const ErrorComponent = ({ error }) => {
    return <p>An Error Occured: {error}</p>
}

const profile = () => {
    const authRequest = {
        ...loginRequest
    }
    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Popup}
            authenticationRequest={authRequest}
            errorComponent={ErrorComponent}
            loadingComponent={LoadingComponent}
        >
            <p>This is the profile page.</p>
            <p>At least one account is signed in!</p>
        </MsalAuthenticationTemplate>
    )
}

export default profile