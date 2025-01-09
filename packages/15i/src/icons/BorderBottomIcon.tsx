import * as React from "react";
import { IconProps } from "./types.js";

export const BorderBottomIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1 13.25L14 13.25V14.75L1 14.75V13.25Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <rect x="7" y="5" width="1" height="1" rx=".5" fill={color} />
        <rect x="13" y="5" width="1" height="1" rx=".5" fill={color} />
        <rect x="7" y="3" width="1" height="1" rx=".5" fill={color} />
        <rect x="13" y="3" width="1" height="1" rx=".5" fill={color} />
        <rect x="7" y="7" width="1" height="1" rx=".5" fill={color} />
        <rect x="7" y="1" width="1" height="1" rx=".5" fill={color} />
        <rect x="13" y="7" width="1" height="1" rx=".5" fill={color} />
        <rect x="13" y="1" width="1" height="1" rx=".5" fill={color} />
        <rect x="5" y="7" width="1" height="1" rx=".5" fill={color} />
        <rect x="5" y="1" width="1" height="1" rx=".5" fill={color} />
        <rect x="3" y="7" width="1" height="1" rx=".5" fill={color} />
        <rect x="3" y="1" width="1" height="1" rx=".5" fill={color} />
        <rect x="9" y="7" width="1" height="1" rx=".5" fill={color} />
        <rect x="9" y="1" width="1" height="1" rx=".5" fill={color} />
        <rect x="11" y="7" width="1" height="1" rx=".5" fill={color} />
        <rect x="11" y="1" width="1" height="1" rx=".5" fill={color} />
        <rect x="7" y="9" width="1" height="1" rx=".5" fill={color} />
        <rect x="13" y="9" width="1" height="1" rx=".5" fill={color} />
        <rect x="7" y="11" width="1" height="1" rx=".5" fill={color} />
        <rect x="13" y="11" width="1" height="1" rx=".5" fill={color} />
        <rect x="1" y="5" width="1" height="1" rx=".5" fill={color} />
        <rect x="1" y="3" width="1" height="1" rx=".5" fill={color} />
        <rect x="1" y="7" width="1" height="1" rx=".5" fill={color} />
        <rect x="1" y="1" width="1" height="1" rx=".5" fill={color} />
        <rect x="1" y="9" width="1" height="1" rx=".5" fill={color} />
        <rect x="1" y="11" width="1" height="1" rx=".5" fill={color} />
      </svg>
    );
  },
);

export default BorderBottomIcon;
