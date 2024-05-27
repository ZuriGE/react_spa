import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className=" w-full h-16 bg-fuchsia-950 flex items-center px-8 md:px-16 justify-between relative ">
        <Logo></Logo>

        <div className="flex justify-end items-center">
          <Menu></Menu>

          <div className="hidden w-12 h-12 rounded-full  justify-center items-center overflow-hidden  md:flex">
            <img src="/img/book01.jpg" alt="" className="w-full" />
          </div>

        </div>
    </header>
  )
}
