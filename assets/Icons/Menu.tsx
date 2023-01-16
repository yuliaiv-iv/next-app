import * as React from "react";
import { SVGProps } from "react";

const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={20} height={3} rx={1.5} fill="#347EFF" />
    <rect y={7} width={20} height={3} rx={1.5} fill="#347EFF" />
    <rect y={14} width={20} height={3} rx={1.5} fill="#347EFF" />
  </svg>
);

export default Menu;
