import * as React from "react";
import { SVGProps } from "react";

const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
  width={12}
  height={12}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <g clipPath="url(#a)">
    <path
      d="m11.649 3.684-6.331 6.33a1.201 1.201 0 0 1-1.698 0L.352 6.746A1.201 1.201 0 0 1 2.05 5.048l2.419 2.419L9.95 1.986a1.201 1.201 0 0 1 1.699 1.698Z"
      fill="#1DC37E"
    />
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h12v12H0z" />
    </clipPath>
  </defs>
</svg>
);

export default Check;
