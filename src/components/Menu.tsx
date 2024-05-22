import { NavItem } from "../types"
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

export default function Menu() {
    const menu:NavItem[] = [
        {
            id:0,
            name:'Home',
            link: 'home'
        },
        {
            id:2,
            name:'Libros',
            link: 'libros'
        },
        {
            id:3,
            name:'Login',
            link: 'login'
        },

    ] 

    const [visible, setVisible]=useState(false)
    
    const hideShowMenu = ()=>{
        
        setVisible(!visible)
    }
    
    return (
        <>
            {/* falta la lógica para desplegar el menú en vista móvil */}
            <nav className="hidden md:flex">
                {menu.map((link)=>
                    <a className="text-neutral-300 text-lg mx-4  min-w-20 text-center hover:text-orange-400 hover:font-semibold"
                        key={link.id}
                        href={link.link}
                    >{link.name}</a>
                )}
            </nav>


            <button 
                className=" md:hidden h-full w-14 flex justify-center items-center"
                onClick={hideShowMenu}
            >
                {visible ? (
                    <FaXmark size={35} className=" fill-orange-400"  />
                ):(
                    <FaBars size={35} className=" fill-orange-400" />
                  
                )
                
                }
            </button>

            {visible && 
                <nav className=" absolute top-16 left-0 w-full flex flex-col items-center py-4 bg-neutral-200 shadow-md">
                     {menu.map((link)=>
                    <a className="py-4 text-lg w-3/4 text-center border-b border-neutral-300 last:border-none"
                        key={link.id}
                        href={link.link}
                    >{link.name}</a>
                )}
                </nav>
            }
          




        </>
        
  )
}
