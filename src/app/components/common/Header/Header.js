
'use client';
import Image from 'next/image';

export default function Header() {
    return <>

        <div className="overlay sideheader" id="overlay">
            <a className="close_menu closesidebar" href="#"><Image src="/images/remove.png" width={291} height={292} priority alt="" /> </a>
            <nav className="overlay-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-3 col-md-3 col-6">
                            <div className="header_menu">
                                <h2>Fashion</h2>
                                <ul>
                                    <li><a href="#">About Us </a></li>
                                    <li><a href="#">Our Vision </a></li>
                                    <li><a href="#">Orders &amp; Shipping </a></li>
                                    <li><a href="#"> Office Supplies</a></li>
                                    <li><a href="#">Contact Us </a></li>
                                    <li><a href="#">Customer Service </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-3 col-md-3 col-6">
                            <div className="header_menu">
                                <h2>Electronics</h2>
                                <ul>
                                    <li><a href="categories.php">Grocery </a></li>
                                    <li><a href="categories.php">Mobiles </a></li>
                                    <li><a href="categories.php">Fashion </a></li>
                                    <li><a href="categories.php"> Electronics</a></li>
                                    <li><a href="categories.php">Home </a></li>
                                    <li><a href="categories.php"> Appliances</a></li>
                                    <li><a href="categories.php"> Travel</a></li>
                                    <li><a href="categories.php"> Top Offers</a></li>
                                    <li><a href="categories.php">Beauty, Toys &amp; More</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-3 col-md-3 col-6">
                            <div className="header_menu">
                                <h2>Appliances</h2>
                                <ul>
                                    <li><a href="#">About Us </a></li>
                                    <li><a href="#">Our Vision </a></li>
                                    <li><a href="#">Orders &amp; Shipping </a></li>
                                    <li><a href="#"> Office Supplies</a></li>
                                    <li><a href="#">Contact Us </a></li>
                                    <li><a href="#">Customer Service </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div className="js-menu__context cart_main">
            <div id="main-nav" className="js-menu js-menu--right">
                <span className="js-menu__close">✕</span>
                <div className="cart_top">
                    <h3>Your Cart</h3>
                </div>
                <h1>Total <span>$699</span></h1>
                <div className="cart_list">
                    <div className="cart_pro">
                        <Image src="/images/chair.jpg" width={143} height={182} priority alt="" />
                    </div>
                    <div className="cart_pro_name">
                        <h2>brother DCP-B7500D Multi- function Monochrome... <span>$238.85</span></h2>
                    </div>
                    <div className="remove">
                        <Image src="/images/remove.png" width={191} height={192} priority alt="" />
                    </div>
                </div>
                <div className="cart_list">
                    <div className="cart_pro">
                        <Image src="/images/laptop.jpg" width={244} height={207} priority alt="" />
                    </div>
                    <div className="cart_pro_name">
                        <h2>brother DCP-B7500D Multi- function Monochrome... <span>$238.85</span></h2>
                    </div>
                    <div className="remove">
                        <Image src="/images/remove.png" width={291} height={292} priority alt="" />
                    </div>
                </div>
                <div className="cart_list">
                    <div className="cart_pro">
                        <Image src="/images/cover.jpg" width={171} height={200} priority alt="" />
                    </div>
                    <div className="cart_pro_name">
                        <h2>brother DCP-B7500D Multi- function Monochrome... <span>$238.85</span></h2>
                    </div>
                    <div className="remove">
                        <Image src="/images/remove.png" width={291} height={292} priority alt="" />
                    </div>
                </div>
                <div className="theme-button">
                    <a href="#" className="default-btn">Checkout</a>
                </div>
            </div>
        </div>
    </>
}