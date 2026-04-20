
'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navber = () => {

    const pathName = usePathname();
    console.log("ajsdkfjsajflsjaldfjs: ", pathName);
    const links = <>
        
        <li><Link href="/" className={pathName === '/' ? "text-blue-400": "" }>Home</Link></li>
        <li><Link href="/about" className={pathName === "/about" ? "text-blue-400" : ""}>About</Link></li>
        <li><Link href="/about/Contact" className={pathName === "/about/Contact" ? "text-blue-400" : ""}>Contact</Link></li>
        <li><Link href="/Developer" className={pathName === "/Developer" ? "text-blue-400" : ""}>Developer</Link></li>
        <li><Link href="/Blogs" className={pathName === "/Blogs" ? "text-blue-400" : ""}>Blogs</Link></li>
        <li><Link href="/Deshboard" className={pathName === "/Deshboard" ? "text-blue-400" : ""}>Deshboard</Link></li>
        <li><Link href="/User" className={pathName === "/User" ? "text-blue-400" : ""}>Users</Link></li>
    
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                        
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navber;