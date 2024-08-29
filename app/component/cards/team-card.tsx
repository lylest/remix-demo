import {FC} from "react";
import {TeamMember} from "~/types/types";
import {getRandomColor} from "~/helpers/generate-color";
import {UserIcon} from "@heroicons/react/24/outline";
import Badge from "~/component/badge/Badge";

interface Props {
      name:string;
      description:string;
      members:TeamMember[];
      issues:number
}
const TeamCard:FC<Props> =({ ...team })=> {
    return (
        <div className={"w-[20rem]  space-y-2 rounded-xl shadow-xs px-4 py-3  overflow-hidden bg-white border space-y-1"}>
            <h1 className={"text-lg font-medium"}>{team.name}</h1>
            <p className={"text-sm text-gray-600"}>{team.description}</p>
            {team.issues && team.issues > 0 && <Badge label={`Issues ${team.issues}`} type={"pink"} className={"rounded-lg py-2 px-3"}/>}
            <div className={"py-3 flex gap-5"}>
                <div className={"flex space-x-1 space-y-2 "}>
                    <div className="flex -space-x-3 rtl:space-x-reverse">
                        {team.members.map(item => (
                            <div key={item.name} style={{backgroundColor: getRandomColor()}}
                                 className="w-8 h-8 flex items-center justify-center border-2 rounded-full dark:border-gray-800 text-white font-medium">
                                {item.name[0].toUpperCase()}
                            </div>
                        ))}
                        <a className="flex items-center justify-center w-8 h-8 text-xs font-medium border-2 text-primary  bg-gray-100 rounded-full hover:bg-gray-200 dark:border-gray-800"
                           href="#">+{team.members.length}</a>
                    </div>
                </div>
                <div className={"flex space-x-1  pt-2"}>
                    <UserIcon  className={"text-gray-500 size-5 dark:text-neutral-500"}/>
                    <p className={"dark:text-neutral-300"}>{team.members.length} Members</p>
                </div>
            </div>
        </div>
    )
}

export default TeamCard