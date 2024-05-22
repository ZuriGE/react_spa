import { FaFacebookF, FaTwitter, FaLinkedinIn  } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className=" bg-orange-500 w-full h-16">
        <nav className=" space-x-16 text-gray-900 flex justify-center items-center h-full">
            <div className=" w-11 h-11 rounded-full bg-orange-300 flex items-center justify-center"><a href="https://x.com/?lang=es" target='_blank'><FaTwitter size={25} className=" fill-fuchsia-950"/></a></div>
            
             <div className=" w-11 h-11 rounded-full bg-orange-300 flex items-center justify-center">
            <a href="https://www.facebook.com/?locale=es_ES" target='_blank'><FaFacebookF size={25} className=" fill-fuchsia-950" /></a></div>
             <div className=" w-11 h-11 rounded-full bg-orange-300 flex items-center justify-center">
            <a href="https://www.instagram.com/" target='_blank'><FaLinkedinIn size={25} className=" fill-fuchsia-950"/></a></div>
        </nav>
    </footer>
  )
}
