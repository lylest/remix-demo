import {FC, ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface IPageFit {
     children: ReactNode;
     className?: string;
}

const PageFit:FC<IPageFit> =({ children,className })=> {
    return (
        <div className={twMerge("px-3 lg:px-6 py-20 lg:py-4 space-y-", className)}>
            {children}
        </div>
    )
}
export default  PageFit