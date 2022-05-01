import { useState } from "react";

export default function NavItem({ href, direction, children, setOffCanvas }) {
  return (
    <>
      <li>
        <a
          href={href}
          className={`${
            direction == "vertical" ? "text-black" : "text-white text-opacity-60 hover:text-opacity-100"
          } text-lg  transition font-semibold`}
          onClick={setOffCanvas}
        >
          {children}
        </a>
      </li>
    </>
  );
}
