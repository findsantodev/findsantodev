import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import classNames from "classnames";

export default function NavBar() {
  const [offCanvas, setOffCanvas] = useState(false);
  function setCanvasOff() {
    setOffCanvas(false);
  }
  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12 ">
          <Logo />
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav direction="horizontal" />
        </div>
        <div className="w-3/12 text-right hidden md:block">
          <Button href={"#contact"} variant="outline-yellow" pill>
            Call Me
          </Button>
        </div>
        <div className="w-9/12 md:hidden text-right">
          <img src="/menu_icon.svg" alt="" className="inline-block" onClick={() => setOffCanvas(true)} />
        </div>
      </div>

      <div
        className={classNames(
          "flex fixed bg-white z-10 top-0 h-full w-full p-10 md:hidden transition-all",
          offCanvas ? "right-0" : "-right-full"
        )}
      >
        <img src="/x_icon.svg" alt="" className="absolute top-8 right-8 w-10" onClick={setCanvasOff} />
        <Nav direction="vertical" setOffCanvas={setCanvasOff} />
      </div>
    </>
  );
}
