'use client';
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function TopBar() {
    return <>
            <header>
                <div className="top_header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="dropDown ml-auto text-right">
                                    <div className="dropdown">
                                        <a href="login.php" className="dropdown-toggle" data-toggle="dropdown"><Image src="/images/location-icon.png" width={20} height={27} priority alt="Location Icon" /> India </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">USE</a>
                                            <a className="dropdown-item" href="#">USA</a>
                                        </div>
                                    </div> 
                                    <div className="dropdown">
                                        <a href="login.php" className="dropdown-toggle" data-toggle="dropdown"><Image src="/images/globel-icon.png" width={20} height={20} priority alt="Globel" /> Eng </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">English</a>
                                            <a className="dropdown-item" href="#">Arabic</a>    
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a href="login.php" className="dropdown-toggle" data-toggle="dropdown">USD </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Doller</a>
                                            <a className="dropdown-item" href="#">Riyal</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="top_bar">
                                    <Link className="navbar-brand" href="/">
                                        <Image src="/images/logo.png" width={219} height={33} priority alt="logo" /> 
                                    </Link>
                                    <div className="user_icon ml-auto">
                                        <div className="menu-text">
                                            <div className="button_container" id="toggle">
                                                <a href="#"><Image src="/images/menu-icon.png" width={22} height={22} alt="" /> All</a>
                                            </div>
                                            <a href="#">Todays Deals</a>
                                            <a href="#">Gift Cards</a>
                                        </div>
                                        <div className="search for-desktop">
                                            <input type="search" className="form-control" placeholder="Search for products, brands and more" />
                                            <button type="submit" className="btn"><Image src="/images/search-black.png" width={25} height={25} alt="" /></button>
                                        </div>
                                        <div className="user">
                                            <div className="dropdown">
                                                <a href="login.php" className=" " data-toggle="dropdown"><Image src="/images/user-icon.png" width={25} height={25} alt="" /> </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Become a seller</a>
                                                    <a className="dropdown-item" href="#">Become auser</a>
                                                </div>
                                                <a href="sign-up.php"> <Image src="/images/wishlist-icon.png" width={20} height={30} priority alt="" /> </a>
                                                <a className="js-menu__open" data-menu="#main-nav" href="#"><Image src="/images/cart-icon.png" width={19} height={19} alt="" /> <span className="cart_item">2</span> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-nav">
                                    <Link href="/" className="logo">
                                        <Image src="/images/logo.png" width={219} height={33} priority alt="logo" />  
                                    </Link>
                                    <div className="search for-mobile">
                                        <button type="submit" className="btn"><Image src="/images/search-black.png" width={25} height={25} priority alt="" /></button>
                                        <input type="search" className="form-control" placeholder="Search essentials, groceries and more..." />
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

    </>
  }  