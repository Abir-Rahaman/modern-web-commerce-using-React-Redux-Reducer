import React from "react";
import logo from "../Asset/images/logo.svg";
import { BiSearchAlt2 } from 'react-icons/bi';
import {CgProfile} from "react-icons/cg"
import {BsSuitHeartFill} from "react-icons/bs"


const Nav = () => {
  return (
    <div class="navbar bg-base-100 sm-w-56 px-8">
      <div class="navbar-start ">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li >
            <a className=" hover:text-orange-500 duration-500">HOME</a>
          </li>
          <li>
            <a className=" hover:text-orange-500 duration-500">SHOP</a>
          </li>
          <li>
            <a className=" hover:text-orange-500 duration-500">ABOUT US</a>
          </li>
          <li>
            <a className=" hover:text-orange-500 duration-500">BLOG</a>
          </li>
          <li>
            <a className=" hover:text-orange-500 duration-500">CONTACT US</a>
          </li>
          <li tabIndex="0">
            <a className=" hover:text-orange-500 duration-500">
              Catagories
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a className=" hover:text-orange-500 duration-500">Submenu 1</a>
              </li>
              <li>
                <a className=" hover:text-orange-500 duration-500">Submenu 2</a>
              </li>
              <li>
                <a className=" hover:text-orange-500 duration-500">Submenu 2</a>
              </li>
              </ul>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl  bg-slate-400 hidden lg:block px-8"> <img className="w-24 pt-3" src={logo} alt="" /></a>
      </div>
      <div class="navbar hidden lg:flex">
        <ul class="menu menu-horizontal p-0 text-xs font-bold ">
        <li >
            <a className=" hover:text-orange-500 duration-500">HOME</a>
          </li>
          <li>
            <a className=" hover:text-orange-500 duration-500">SHOP</a>
          </li>
          <li>
            <a className=" hover:text-orange-500 duration-500">ABOUT US</a>
          </li>
          <li>
            <a className=" hover:text-orange-500 duration-500">BLOG</a>
          </li>
          <li>
            <a className=" hover:text-orange-500 duration-500">CONTACT US</a>
          </li>
          <li tabIndex="0">
            <a className=" hover:text-orange-500 duration-500">
              Catagories
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a className=" hover:text-orange-500 duration-500">Submenu 1</a>
              </li>
              <li>
                <a className=" hover:text-orange-500 duration-500">Submenu 2</a>
              </li>
              <li>
                <a className=" hover:text-orange-500 duration-500">Submenu 2</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="">
      <div class="form-control" >
       <input  type="text" placeholder="Search Products" class="input input-bordered  lg:w-72 w-44 mt-6" />
      <button className="relative bottom-8 lg:pl-64 pl-36 text-xl"><span ><BiSearchAlt2/></span></button>
    </div>
    <span className="text-xl lg:mx-8 hidden lg:block">{ <CgProfile/>}</span>
     <span className="text-xl lg:mr-4  hidden lg:block">{ <BsSuitHeartFill/>}</span>
     <div className="navbar">
      <button className="btn rounded-full bg-orange-400 text-white lg:px-8 border-4 hover:border-orange-400 ">MY CART()</button>
      </div>
      </div>
    </div>
  );
};

export default Nav;
