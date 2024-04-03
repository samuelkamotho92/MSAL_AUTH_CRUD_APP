import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { AuthProvider } from "./components/auth";
import SiteHeader from "./components/SiteHeader";
import styles from "~/styles/tailwind.css?url";
import type { LinksFunction } from "@remix-run/node";
import MainNavigation from "./components/MainNavigation";
import mainStyles from "~/styles/main.css?url";

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

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return <Outlet />;
}
