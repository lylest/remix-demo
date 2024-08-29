import {FC, TextareaHTMLAttributes} from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    onUpload?: () => void;
    errorMessage?: string | null;
    showErrorMessage?: boolean;
    hasError?: boolean;
    name?: string;
    label?: string;
    labelClassName?: string;
    wrapperClass?: string;
    optional?: boolean;
}

const Textarea: FC<TextareaProps> = (
    {
        name,
        label,
        errorMessage,
        ...rest
    }) => {
    return (
        <div className={rest.wrapperClass}>
            {label && (
                <label
                    htmlFor={name}
                    className={`block text-sm font-medium mb-2 dark:text-white ${rest.labelClassName}`}
                >
                    {label}
                </label>
            )}
            <div className="relative">
                <textarea
                    id={name}
                    name={name}
                    className={`py-3 px-4 block w-full border ${
                        errorMessage
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:border-primary-500 focus:ring-primary-500 focus:ring-inset focus:ring-1"
                    } rounded-lg text-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400`}
                    aria-describedby={errorMessage ? `${name}-error` : undefined}
                    {...rest}
                />
                {!!errorMessage && (
                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg
                            className="shrink-0 size-4 text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" x2="12" y1="8" y2="12"></line>
                            <line x1="12" x2="12.01" y1="16" y2="16"></line>
                        </svg>
                    </div>
                )}
            </div>
            {!!errorMessage && (
                <p id={`${name}-error`} className="text-sm text-red-600 mt-2">
                    {errorMessage}
                </p>
            )}
        </div>
    );
};

export default Textarea;
