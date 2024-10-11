import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError
} from "@remix-run/react";
import { AuthProvider } from "../app/authProvider/index";
import SiteHeader from "./components/SiteHeader";
import styles from "~/styles/tailwind.css?url";
import type { LinksFunction } from "@remix-run/node";


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.querySelectorAll("html > script").forEach((s) => s.parentNode?.removeChild(s));`,
          }}
        />
        <AuthProvider>
          <SiteHeader />
          {children}
        </AuthProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary(){
  const error  = useRouteError();
  let errorMessage ;
  if(error instanceof Response)
    switch (error.status){
case 401:
  errorMessage = (
    <p className="text-lg text-center">
    Oops! Looks like you tried to visit a page that you do not have access
    to.
  </p>
  );
  break ;
  case 404:
    errorMessage = (
    <p className="text-lg text-center">
    Oops! The page you're looking for seems to be missing.
    </p>
    );
    break ;
    default:
      errorMessage = (
    <p className="text-lg text-center">Unknown Error</p>
      );
  }
  return (
    <div className="flex flex-col items-center border-4 rounded-sm border-lime-500 w-1/2 m-auto gap-4 p-2">
        <h1 className="text-3xl font-semibold">Error {error.status}</h1>
        <> {errorMessage} </>
        <Link to="/" className="bg-slate-200 px-3 py-1 rounded-sm mx-2">Return</Link>
      </div>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return <Outlet />;
}
