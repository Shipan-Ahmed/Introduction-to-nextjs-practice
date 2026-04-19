import Link from 'next/link';
import  { Children } from 'react';

const LayoutPage = ({children}) => {
    return (
        <div>
            {/* <h2 className='text-center font-bold'>Deshboard layout pages!! common area </h2> */}
            {/* <div>
                <li> <Link href="/Deshboard/reveneo">Reveneo</Link> </li>
                <li> <Link href="/Deshboard/payment">Payment</Link> </li>
            </div> */}

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <main>{children};</main>
                    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><Link href="/">Deshboard</Link></li>
                        <li><Link href="/Deshboard/reveneo">Reveneo</Link></li>
                        <li><Link href="/Deshboard/payment">Payment</Link></li>
                    </ul>
                </div>
            </div>
            {/* <main>{children};</main> */}
        </div>
    );
};

export default LayoutPage;