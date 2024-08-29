import {twMerge} from "tailwind-merge";
import {FC} from "react";

interface Props {
    className?:string
}
const DottedDivider:FC<Props> =({ className })=> {
    return (
        <div className={twMerge("w-full  border-[1px] border-dashed  border-gray-200/80 dark:border-neutral-700/50", className)}/>
    )
}

export default DottedDivider;