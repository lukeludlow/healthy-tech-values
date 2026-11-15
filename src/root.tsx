import "@/App.css";
// @ts-expect-error inter is CSS only
import "@fontsource-variable/inter";
import type { ReactNode } from "react";
import {
    isRouteErrorResponse,
    Link,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";
import { PrimeReactProvider } from "primereact/api";
import { Analytics } from "@vercel/analytics/react";
import TopNavBar from "@/components/navbar/TopNavBar.tsx";
import ContactTab from "@/components/contact/ContactTab.tsx";
import Seo from "@/components/seo/Seo.tsx";
import { pageHeading, sectionIntro, textLink } from "@/components/ui/styles.ts";

export function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="theme-color" content="#60815f" />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

function Shell({ children }: { children?: ReactNode }) {
    return (
        <PrimeReactProvider value={{ ripple: true }}>
            <div className={"bg-E5F0FF"}>
                <div className={"flex flex-col min-h-screen w-full"}>
                    <div className="print:hidden">
                        <TopNavBar />
                    </div>
                    <div className={"flex-1 flex flex-col"}>{children}</div>
                </div>
                <ContactTab />
                <Analytics />
            </div>
        </PrimeReactProvider>
    );
}

export default function App() {
    return (
        <Shell>
            <Outlet />
        </Shell>
    );
}

/**
 * Rendered into the SPA fallback page that Vercel serves for URLs that were
 * not prerendered, until the client router takes over.
 */
export function HydrateFallback() {
    return <Shell />;
}

export function ErrorBoundary({ error }: { error: unknown }) {
    const notFound = isRouteErrorResponse(error) && error.status === 404;
    const title = notFound ? "Page not found" : "Something went wrong";

    return (
        <Shell>
            <Seo
                title={`${title} | Healthy Tech Balance`}
                description="This page could not be loaded."
                path="/"
                noindex
            />
            <section className="bg-base-200 px-6 pt-22 pb-18 flex-1">
                <div className="max-w-[720px] mx-auto">
                    <h1 className={`mb-5 ${pageHeading}`}>{title}</h1>
                    <p className={`mb-6 ${sectionIntro}`}>
                        {notFound
                            ? "We couldn't find the page you were looking for."
                            : "Please try reloading the page."}
                    </p>
                    <Link to="/" className={textLink}>
                        Go to the home page
                    </Link>
                </div>
            </section>
        </Shell>
    );
}
