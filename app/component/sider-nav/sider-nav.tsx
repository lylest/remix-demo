import {FunctionComponent} from "react";
import {NavLink, useLocation} from "@remix-run/react";

const SiderNav: FunctionComponent<{}> = () => {
    const location = useLocation();
    const menulist = [
        {
            id: 1,
            label: "Dashboard",
            link: "/dashboard",
            icon: "ri-layout-grid-line",
            pattern: new RegExp("^/dashboard?/*"),
        },
        {
            id: 2,
            label: "Teams",
            link: "/teams",
            icon: "ri-team-line",
            pattern: new RegExp("^/teams?/*"),
        },
        {
            id: 3,
            label: "Tracker",
            link: "/tracker",
            icon: "ri-timer-line",
            pattern: new RegExp("^/tracker?/*"),
        },
        {
            id: 4,
            label: "Profile",
            link: "/profile",
            icon: "ri-user-line",
            pattern: new RegExp("^/profile?/*"),
        },
    ];

    //    const active = pattern.test(pathname);
    return (
        <div className={"px-6 py-2 shadow-right h-screen border-r-[1px] border-neutral-100"}>
            <div className={"flex gap-2 -space-y-1 py-3 border-b-[1px] border-gray-100"}>
                <svg className="remix fill-back-900">
                    <use xlinkHref="other/svg-icons/remixicon.symbol.svg#ri-cloud-fill"></use>
                </svg>
                <h1 className={"text-xl  text-black-900"}>Code flow</h1>
            </div>

            <div className={" space-y-1 py-6"}>
                {menulist?.map(item => {
                    const active = item.pattern.test(location.pathname);
                    return (
                        (
                            <div key={item.id}>
                                <NavLink
                                    to={item.link}
                                    className={() => {
                                        return ` text-sm ${active ? "text-white" : "text-black-800"}`;
                                    }}>
                                    <div key={item.id}
                                         className={`flex  py-2 px-3 rounded-lg gap-2 ${active ? 'bg-primary-600 ring-1 ring-inset ring-primary-700/60' : 'bg-inherit'}`}>
                                        <svg
                                            className={`remix  mt-[2px] w-4 h-4 ${active ? "fill-white" : "fill-back-800"}`}>
                                            <use xlinkHref={`other/svg-icons/remixicon.symbol.svg#${item.icon}`}></use>
                                        </svg>
                                        {item.label}
                                    </div>
                                </NavLink>
                            </div>
                        )
                    )
                })}
            </div>
        </div>
    );
};

export default SiderNav