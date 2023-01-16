import * as React from "react";
import { SVGProps } from "react";

const Sorting = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={13}
    fill="#347eff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={20} height={3} rx={1.5} />
    <rect y={5} width={14} height={3} rx={1.5} />
    <rect y={10} width={8} height={3} rx={1.5} />
  </svg>
);

export default Sorting;
