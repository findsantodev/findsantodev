import NavItem from "./NavItem";
import classNames from "classnames";
export default function Nav({ direction, setOffCanvas }) {
  const directions = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-6",
  };
  const pickedDirection = directions[direction];
  return (
    <>
      <ul className={classNames("flex ", pickedDirection)}>
        <NavItem direction={direction} href={"#profile"} setOffCanvas={setOffCanvas}>
          Profile
        </NavItem>
        <NavItem direction={direction} href={"#skill"} setOffCanvas={setOffCanvas}>
          Skills
        </NavItem>
        <NavItem direction={direction} href={"#project"} setOffCanvas={setOffCanvas}>
          Projects
        </NavItem>
        <NavItem direction={direction} href={"#contact"} setOffCanvas={setOffCanvas}>
          Contact
        </NavItem>
      </ul>
    </>
  );
}
