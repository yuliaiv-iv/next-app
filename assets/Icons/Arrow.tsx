import * as React from "react";
import { SVGProps } from "react";

const Arrow = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
  className={props.className}
    width={6}
    height={10}
    fill="#ffffff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.715 4.61 1.265.16A.543.543 0 0 0 .878 0a.543.543 0 0 0-.386.16L.164.487a.548.548 0 0 0 0 .774L3.9 4.998.16 8.739a.543.543 0 0 0-.16.387c0 .146.057.284.16.387l.327.327c.103.103.24.16.387.16a.543.543 0 0 0 .387-.16l4.454-4.454a.544.544 0 0 0 .16-.388.544.544 0 0 0-.16-.388Z" />
  </svg>
);

export default Arrow;
