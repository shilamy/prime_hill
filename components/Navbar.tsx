import Link from "next/link";
import Image from "next/image";
import{navLinks} from "@/constants";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
<nav className="max-w[1440px] mx-auto 
flex justify-between items-center
sm:px-16 px-6 py-4">
  <Link href="/" className="flex justify-center items-center">
  
    <Image 
    src= "/logo.png" alt="luc logo"
   width={60}
   height={18}
    className="object-contain"
    />
    
</Link>
<div className="nav__links">
<ul className="flex space-x-4">
        <li><Link href="#home">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
        </div>

<CustomButton
        title="Sign in"
        btnType ="button"
        containerStyles = "text-primary-blue rounded-full bg-white min-w-[130px]"/>
</nav>
    </header>
  )
}

export default Navbar