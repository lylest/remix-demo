import {FC} from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    className?:string
}

const FullDivider:FC<Props>=({ className })=> {
    return (
        <div className={twMerge("w-full  h-[1px] bg-gray-200/80 dark:bg-neutral-700/50", className)} />
    )
}

export default FullDivider