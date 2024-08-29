import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import type {LinksFunction,} from "@remix-run/node";
import appStylesHref from "~/tailwind.css?url";
import SiderNav from "~/component/sider-nav/sider-nav";
import Header from "~/component/header/header";

export const links: LinksFunction = () => [
    {rel: "stylesheet", href: appStylesHref},
    { rel:"stylesheet", href: ""}
];

export  default  function App() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/><title></title>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
        </head>
        <body>
        <div className={"flex "}>
            <aside className={"w-[18%] h-screen"}><SiderNav/></aside>
            <section className={"w-[82%] bg-gray-100 h-screen"}>
                <Header/>
                <Outlet/>
            </section>
        </div>
        <div id="portal-root"></div>
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}
