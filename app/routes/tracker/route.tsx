import {Outlet} from "@remix-run/react";

export default function Route() {
    return (
        <div>
            <h3>Tracker</h3>
            <Outlet />
        </div>
    );
}