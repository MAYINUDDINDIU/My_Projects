import React from 'react';
import './Header.css'
import logo from '../icon/logo.png'
import CustomLink from '../CustomLink/CustomLink';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {

    const [user] = useAuthState(auth);
    console.log(user);
    const handleSignOut = () => {
        signOut(auth);
        // if (signOut) {
        //     Navigate('/');
        // }
    }



    return (
        <div class="navbar bg-green-600 lg:px-24">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li className='text-sm rounded  font-bold text-white bg-[#087f23] px-8 active '><Link to='/'>EKOK</Link></li>
                        <li className='text-sm mt-2 rounded  font-bold text-white bg-[#087f23] px-8  '><Link to='/Sb-office'>SB</Link ></li>
                        <li className='text-sm  mt-2 rounded  font-bold text-white bg-[#087f23] px-8  '><Link to='/Total_Business'>TOTAL BUSINESS</Link ></li> */}
                        {
                            user ?
                                <>  <li className='rounded  font-bold text-white bg-[#087f23]   '><NavLink to='/ekok'>EKOK</NavLink></li>
                                    <li className='rounded  font-bold text-white bg-[#087f23] ml-2 '><NavLink to='/Sb-office'>SB</NavLink ></li>
                                    <li className='rounded  font-bold text-white bg-[#087f23] ml-2 '><NavLink to='/Total_Business'>TOTAL BUSINESS</NavLink ></li>
                                    <li className='rounded  font-bold text-white bg-[#087f23] ml-2 '><NavLink to='/Daily_Business'>Daily BUSINESS</NavLink ></li>

                                    <button className='btn btn-success bg-[#087f23] text-white ml-2 rounded px-6' onClick={handleSignOut}>logout</button></> :
                                <CustomLink to={'/'}>
                                    <button className='btn btn-success bg-[#087f23] text-white rounded px-12 '>Login</button>
                                </CustomLink>
                        }
                    </ul>
                </div>

                <img className='w-14  shadow-lg bg-white rounded-full p-1 hidden lg:block' src={logo} />
                <a class="btn btn-ghost normal-case text-xl text-white font-bold">FAREAST LIFE</a>

            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {/* <button className='btn btn-success rounded btn-md px-6 text-white font-bold text-lg'><NavLink to='/'>EKOK</NavLink></button>
                    <button className='btn btn-success rounded btn-md px-8 text-white font-bold text-lg ml-4'><NavLink to='/Sb-office'>SB</NavLink></button>
                    <button className='btn btn-success rounded btn-md px-6 text-white font-bold text-lg ml-4'><NavLink to='/Total_Business'>TOTAL</NavLink></button> */}


                    {
                        user ?
                            <>  <li className='rounded  font-bold text-white bg-[#087f23]  '><NavLink to='/ekok'>EKOK</NavLink></li>
                                <li className='rounded  font-bold text-white bg-[#087f23] ml-2 '><NavLink to='/Sb-office'>SB</NavLink ></li>
                                <li className='rounded  font-bold text-white bg-[#087f23] ml-2 '><NavLink to='/Total_Business'>TOTAL BUSINESS</NavLink ></li>
                                <li className='rounded  font-bold text-white bg-[#087f23] ml-2 '><NavLink to='/Daily_Business'>Daily BUSINESS</NavLink ></li>

                                <button className='btn btn-success bg-[#087f23] text-white ml-2 rounded px-6' onClick={handleSignOut}>logout</button></> :
                            <CustomLink to={'/'}>
                                <button className='btn btn-success bg-[#087f23] text-white rounded px-12 '>Login</button>
                            </CustomLink>
                    }


                </ul>
            </div>

        </div>
    );
};

export default Header;