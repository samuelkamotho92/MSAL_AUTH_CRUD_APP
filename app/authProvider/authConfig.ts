import { Configuration, PublicClientApplication } from "@azure/msal-browser";


// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
    auth: {
        clientId: process.env.CLIENT_ID,
        authority:"" ,
        navigateToLoginRequestUrl: true,
        redirectUri: "http://localhost:5173"
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    }
};


// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
const msalInstance = new PublicClientApplication(msalConfig);

export { msalInstance };
