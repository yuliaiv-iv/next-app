import * as React from "react";
import { SVGProps } from "react";

const CloseBtn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      y={16.51}
      width={23}
      height={3}
      rx={1.5}
      transform="rotate(-45 0 16.51)"
      fill="#347EFF"
    />
    <rect
      x={2.253}
      width={23}
      height={3}
      rx={1.5}
      transform="rotate(45 2.253 0)"
      fill="#347EFF"
    />
  </svg>
);

export default CloseBtn;
