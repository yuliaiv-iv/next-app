import * as React from "react";
import { SVGProps } from "react";

const ButtonUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    xmlns="http://www.w3.org/2000/svg"
    fill="#347EFF"
    {...props}
  >
    <rect width={40} height={40} rx={10} />
    <rect
      x={10}
      y={23.899}
      width={14}
      height={3}
      rx={1.5}
      transform="rotate(-45 10 23.9)"
      fill="#fff"
    />
    <path
      d="M19.06 15.232a1.5 1.5 0 0 1 2.122 0l7.778 7.779a1.5 1.5 0 1 1-2.121 2.121l-7.778-7.778a1.5 1.5 0 0 1 0-2.122Z"
      fill="#fff"
    />
  </svg>
);

export default ButtonUp;
