import React from "react";

const IconArrowForward = ({
    fill = "#F2F2F2",
    ...props
}: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 22 13"
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            {...props}
        >
            <path
                d="M1.161 11.96a1.408 1.408 0 010-1.995L10.527.598c.44-.44 1.15-.44 1.59 0l9.366 9.367a1.408 1.408 0 010 1.995 1.408 1.408 0 01-1.995 0L11.316 3.8l-8.171 8.17a1.405 1.405 0 01-1.984-.011z"
                fill="currentColor"
            />
        </svg>
    );
};

export default IconArrowForward;