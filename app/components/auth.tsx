import { MsalProvider } from "@azure/msal-react"
import { msalInstance } from "~/authProvider/authConfig"


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <MsalProvider instance={msalInstance}>
            {children}
        </MsalProvider>
    )
}