import {Outlet} from "@remix-run/react";

export default function Route() {
    return (
        <div>
            <h3>Profile</h3>
            <Outlet />
        </div>
    );
}