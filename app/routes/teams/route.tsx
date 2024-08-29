import {Link, Outlet} from "@remix-run/react";
import PageFit from "~/component/page-fit/PageFit";
import TextInput from "~/component/form-controls/input/text-input";
import TeamCard from "~/component/cards/team-card";
import {teams} from "~/data";

export default function Route() {

    return (
        <>
            <PageFit className={"space-y-6"}>
                <div className={"space-y-6"}>
                    <div className="flex justify-between  flex-wrap space-y-2">
                        <div className={"space-y-1"}>
                            <div className={"flex items-center gap-2"}>
                                <h1 className={"text-neutral-800  text-lg font-medium"}>Teams</h1></div>
                            <p className={"text-xs text-neutral-600 "}>Manage teams, create, edit and delete</p>
                        </div>

                        <div className={"flex gap-2 items-center"}>
                            <TextInput name="search" placeholder={"Search"}/>
                            <Link to={`team-form`}>
                                <button type="button" className="py-[10px] px-3 py-3 rounded-lg small-button">
                                    <svg
                                        className={`remix  w-4 h-4 fill-white`}>
                                        <use xlinkHref={`other/svg-icons/remixicon.symbol.svg#ri-add-line`}></use>
                                    </svg>
                                    <span className={"hidden lg:block"}>Add team</span>
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className={"flex gap-3"}>
                    {teams.map(team => (
                       <Link to={`/teams-details/${team.id}`} key={team.id}>
                           <TeamCard {...team}/>
                       </Link>
                    ))}
                </div>
                <Outlet/>
            </PageFit>
        </>
    );
}