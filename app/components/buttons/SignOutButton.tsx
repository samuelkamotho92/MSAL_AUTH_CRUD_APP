import { useMsal } from "@azure/msal-react";

const SignOutButton = () => {
    const { instance } = useMsal();
    return (
        <div>
            <button type="button"
                onClick={() => instance.logoutPopup().catch(e => { console.error(e); return null; })}
            >
                Logout by Popup
            </button>
            <button
                type="button"
                onClick={() => instance.logoutPopup().catch(e => { console.error(e); return null; })}
            >
                Logout by Redirect
            </button>
        </div>
    )
}

export default SignOutButton