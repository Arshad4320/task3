import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../src/img/logo.jpg'
const Navbar = () => {
    const menu=<>
        <li className='font-semibold text-slate-600'><Link to='/platform'>Platform</Link> <ul className="p-2">
            <li className='font-semibold text-slate-600'><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
        </ul></li>
        <li className='font-semibold text-slate-600'><Link>Ecosystem</Link></li>
        <li className='font-semibold text-slate-600'><Link>Services</Link></li>
        <li className='font-semibold text-slate-600'><Link>Enterprise</Link></li>
        <li className='font-semibold text-slate-600'><Link>Blog</Link></li>
        <li className='font-semibold text-slate-600'><Link>Learn</Link></li>
        <ul className='flex ml-20'>
            <li className='font-semibold text-slate-600'><Link>Log in</Link></li>
            <li className='font-semibold text-slate-600'><Link>Get a demo</Link></li>
        </ul>
    </>
    return (
        <div>
            <div className="navbar bg-green-50 shadow-lg ">
                <div className="navbar-start lg:ml-24">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link><img src={img} className='h-12' to='/' alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end lg:mr-36">
                  <Link className='btn bg-pink-600 '>Try for free</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;