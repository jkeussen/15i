import * as React from "react";
import { IconProps } from "./types.js";

export const BorderSolidIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M1.25 7.5C1.25 7.22386 1.47386 7 1.75 7H13.25C13.5261 7 13.75 7.22386 13.75 7.5C13.75 7.77614 13.5261 8 13.25 8H1.75C1.47386 8 1.25 7.77614 1.25 7.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default BorderSolidIcon;
