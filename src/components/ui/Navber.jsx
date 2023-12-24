import { useDeleteCurrentUserMutation, useGetCurrentUserQuery } from "@/redux/api/baseApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navber = () => {
  // const { name, email, photo_url } = useSelector((state) => state.userSlice);
  // console.log(name, email, photo_url, "aiman");
  // const [isUser,setIsUser] = useState(false)
  const data = useGetCurrentUserQuery();
  const [setDeleteCurrentUser,res] = useDeleteCurrentUserMutation();
  const [isUser,setIsUser] = useState(0);

  // useEffect(()=>{
  //   fetch(`http://localhost:8000/setcurrentuser`)
  //   .then(res=>res.json())
  //   .then(data=>console.log(data))
  // },[])
  // console.log(data?.data[0]);

  console.log(data?.data);
  const handleLogOut = (email)=>{
    console.log(email);
 
    setDeleteCurrentUser(email);
    console.log(res)
    setIsUser(res.deletedCount)
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">E-Cart</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/product">Products</Link>
          </li>
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {
                data.data ? <img
                alt="Tailwind CSS Navbar component"
                src={data?.data[0]?.photoUrl}
              /> : "N/A"
              }
              
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64"
          >
            <li>
              <a className="justify-between">
                Profile
                {
                  data.data &&  <span className="badge">{data?.data[0]?.username}</span>
                }
              
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={()=>handleLogOut(data?.data[0]?.email)}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
