import * as React from "react";
import { IconProps } from "./types.js";

export const FontStyleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M1.03791 9.98075C0.934777 9.6583 1.11603 9.37719 1.40005 9.24871C1.68408 9.12022 2.09463 9.13412 2.27071 9.45426C2.85393 10.5147 3.64599 10.7282 4.48665 10.7282C5.52721 10.7282 6.29659 10.2615 6.29659 9.45426C6.29659 8.8047 5.9119 8.46416 4.87134 8.14253L4.15872 7.92181C2.64518 7.44883 1.88842 6.69206 1.88842 5.45601C1.88842 3.79743 3.27583 2.6875 5.24342 2.6875C6.91733 2.6875 7.97409 3.33536 8.43833 4.31065C8.57087 4.58909 8.57614 4.91294 8.22794 5.19114C7.87974 5.46934 7.52351 5.34799 7.23327 5.03839C6.47215 4.22653 5.99545 4.04968 5.25604 4.04968C4.1398 4.04968 3.547 4.63618 3.547 5.27943C3.547 5.86592 3.96322 6.23169 4.94702 6.5344L5.67856 6.76143C7.22994 7.23441 7.97409 7.95964 7.97409 9.17047C7.97409 10.7723 6.69389 12.0903 4.46143 12.0903C2.86612 12.0903 1.40005 11.1131 1.03791 9.98075ZM11.8491 8.77985C10.661 8.39543 10.1649 7.86114 10.1649 6.98805C10.1649 5.86736 11.1636 5.04639 12.6128 5.04639C13.8546 5.04639 14.6629 5.63345 14.9778 6.6346C15.0443 6.84599 14.9593 6.98006 14.7475 7.0491C14.5394 7.11697 14.3176 7.09974 14.238 6.89611C13.9356 6.12273 13.352 5.76311 12.5998 5.76311C11.6467 5.76311 11.0135 6.25178 11.0135 6.91638C11.0135 7.45066 11.3464 7.75038 12.2473 8.04358L12.8348 8.23254C14.062 8.62999 14.5516 9.13821 14.5516 10.0178C14.5516 11.1972 13.481 12.0442 11.9927 12.0442C10.6439 12.0442 9.65644 11.2809 9.41979 10.3361C9.36535 10.1188 9.41192 10.0287 9.70039 9.96184C9.98886 9.89499 10.0714 9.89918 10.1715 10.1369C10.4555 10.8114 11.1531 11.3275 12.0318 11.3275C12.9914 11.3275 13.6834 10.7802 13.6834 10.0634C13.6834 9.53567 13.3961 9.28807 12.4366 8.97532L11.8491 8.77985Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default FontStyleIcon;
