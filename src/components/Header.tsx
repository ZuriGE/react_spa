import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className=" w-full h-16 bg-fuchsia-950 flex items-center px-8 md:px-16 justify-between relative ">
        <Logo></Logo>
        <Menu></Menu>
    </header>
  )
}
