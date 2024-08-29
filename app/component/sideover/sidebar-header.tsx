import { FC } from "react";
import { twMerge } from "tailwind-merge";
import {XMarkIcon} from "@heroicons/react/24/outline";

interface Props {
    title: string;
    className?: string;
    buttonClassName?: string;
    onClose: () => void;
}

const SlideOverHeader: FC<Props> = (props) => {
    const { onClose: handleClose, title, className, buttonClassName } = props;
    return (
        <header
            className={twMerge(
                "flex text-lg justify-between font-medium text-slate-800 border-b-[1px] dark:border-neutral-700 dark:text-neutral-50 sticky top-0  z-20  px-4 py-3 bg-white dark:bg-neutral-800",
                className
            )}>
            <p> {title}</p>
            <div>
                <button type={"button"}
                        onClick={handleClose}
                        className={twMerge(
                            "h-8 w-8  white-button rounded-full hover:bg-neutral-300/50 bg-gray-50/90 border-neutral-200/40 dark:border-neutral-600/20  dark:bg-neutral-700/10",
                            buttonClassName
                        )}>
                    <XMarkIcon className={"h-6 w-6"}/>
                </button>
            </div>
        </header>
    );
};
export default SlideOverHeader;
