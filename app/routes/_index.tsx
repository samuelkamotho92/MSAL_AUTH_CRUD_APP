import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import SignInButton from "~/components/buttons/SignInButton";
import SignInSignOutButton from "~/components/buttons/SignInSignOutButton";
import { useLoaderData } from "@remix-run/react";
import BookList from "~/components/BookList";
import homeStyles from "~/styles/home.css?url";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export default function Index() {
  const books = useLoaderData();
  return (
    <div className="flex-col justify-center items-center  mt-5">
      <div>
        <p className="text-center">Welcome to my Book Library</p>
      </div>
      <div className="flex-col justify-center item-center m-auto  bg-amber-100 w-1/2 mt-6 p-3">
        <h1 className="text-center">Collection of must read books</h1>
        <p className="text-center">This are the books i enjoy most and help me in my career growth</p>
        <p id="cta" className="text-center text-lime-500 mx-10" >
          <Link to="/books">
            Checkout books!
          </Link>
        </p>
      </div>
    </div>
  );
}
