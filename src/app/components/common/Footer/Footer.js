import Image from 'next/image';

export default function Footer() {
  return <>
        <div>
            <div className="login_popup">
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content modal-content-centerd">
                            <div className="modal-header">
                                <h4 className="modal-title">Log in</h4>
                                <button type="button" className="close" data-dismiss="modal"><Image src="/images/remove.png" width={291} height={292} priority alt="" /></button>
                            </div>

                            <div className="modal-body">
                                <div className="popup_login">
                                    <div className="row">
                                        <div className="col-lg-12 col-12">
                                            <input type="email" className="form-control" placeholder="E-mail" />
                                            <span><Image src="/images/mail-icon.png" width={291} height={292} priority alt="" /> </span>
                                        </div>
                                        <div className="col-lg-12 col-12">
                                            <input type="password" className="form-control" placeholder="Password" />
                                            <span><Image src="/images/eyes-icon.png" width={183} height={97} priority alt="" /> </span>
                                            <div className="password"><a href="#">Forgot your password?</a></div>
                                        </div>
                                        <div className="col-lg-12 col-12">
                                            <div className="button_box">
                                                <button className="btn-danger btn_login" href="#">Login</button>
                                                <p>By continuing, I agree to Viewcart24`s <a href="#">Terms of Use</a> && <a href="#">Privacy Policy</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="signUp">  
                                    <p>Not your account? <a href="#">Sign up</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="footer_wegits">
                                        <h2>About</h2>
                                        <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
                                    </div>
                                    <div className="social_icons">
                                        <ul>
                                            <li>
                                                <a href="#"><i className="fa fa-youtube-play" /> </a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-twitter" /> </a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-linkedin" /> </a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-instagram" /> </a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-facebook" /> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="footer_wegits">
                                        <h2>Privacy Policy</h2>
                                        <ul>
                                            <li><a href="#">Returns <div dangerouslySetInnerHTML={{ __html: '&amp;' }} /> Exchanges </a></li>
                                            <li><a href="#">Payment Terms </a></li>
                                            <li><a href="#">Delivery Terms </a></li>
                                            <li><a href="#">Payment <div dangerouslySetInnerHTML={{ __html: '&amp;' }} /> Pricing </a></li>
                                            <li><a href="#">Terms Of Use </a></li>
                                            <li><a href="#"> Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="footer_wegits">
                                        <h2>Get Involved</h2>
                                        <ul>
                                            <li><a href="#">About Us </a></li>
                                            <li><a href="#">Our Vision </a></li>
                                            <li><a href="#">Orders <div dangerouslySetInnerHTML={{ __html: '&amp;' }} /> Shipping </a></li>
                                            <li><a href="#"> Office Supplies</a></li>
                                            <li><a href="#">Contact Us </a></li>
                                            <li><a href="#">Customer Service </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="footer_wegits">
                                        <h2>Quick Links</h2>
                                        <ul>
                                            <li><a href="categories.php">Grocery </a></li>
                                            <li><a href="categories.php">Mobiles </a></li>
                                            <li><a href="categories.php">Fashion </a></li>
                                            <li><a href="categories.php"> Electronics</a></li>
                                            <li><a href="categories.php">Home </a></li>
                                            <li><a href="categories.php"> Appliances</a></li>
                                            <li><a href="categories.php"> Travel</a></li>
                                            <li><a href="categories.php"> Top Offers</a></li>
                                            <li><a href="categories.php">Beauty, Toys <div dangerouslySetInnerHTML={{ __html: '&amp;' }} /> More</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="footer_wegits">
                                        <h2>Customer Care</h2>
                                        <ul>
                                            <li><a href="#"> My Account</a></li>
                                            <li><a href="#">Customer Service </a></li>
                                            <li><a href="#">Returns/Exchange </a></li>
                                            <li><a href="#">Product Support </a></li>
                                            <li><a href="#"> FAQs</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer_bottom">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="footer_sec_logo">
                                            <Image src="/images/logo.png" width={219} height={33} priority alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6 d-flex align-items-center">
                                        <div className="footer_sec">
                                            <a href="#"><Image src="/images/call-icon.png" width={283} height={291} priority alt="" /> +91 987 654 3210</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6 d-flex align-items-center">
                                        <div className="footer_sec">
                                            <a href="#"><Image src="/images/support-icon.png" width={512} height={512} priority alt="" />Become a seller</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6 d-flex align-items-center">
                                        <div className="footer_sec">
                                            <a href="#"><Image src="/images/earn-icon.png" width={75} height={75} priority alt="" />Earn With view cart</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-6 d-flex align-items-center">
                                        <div className="footer_sec">
                                            <a href="#"><Image src="/images/add-icon.png" width={37} height={40} priority alt="" />Advertisement</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="copyright">
                                <p>Copyright © 2022 <a href="#">viewcart24</a>. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="payment_icon">
                                <Image src="/images/payment-images.png" width={539} height={26} priority alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
  </>
}