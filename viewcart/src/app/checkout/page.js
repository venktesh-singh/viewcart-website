import React from "react";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import TopBar from "../components/common/TopBar/TopBar";
import Link from 'next/link';
import Image from 'next/image';

export default function page() {  
    return <>
        <TopBar/>
        <Header/>

            <section className="inr-wrap bg_ofwhite">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="breadcrumb-heading">
                                <nav aria-label="breadcrumb">
                                    <ol className="brdcrm breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#"><Image src="/images/home-icon.png" width={126} height={126} priority alt="" /> Home</a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="#">Categories</a></li>
                                        <li className="breadcrumb-item active">Checkout</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="view_cart_section bg_ofwhite">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <h2 className="heading">Checkout</h2>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                            <div className="accordion" id="faq">
                                <div className="card">
                                    <div className="card-header" id="faqhead1">
                                        <a href="#" className="btn btn-header-link" data-toggle="collapse" data-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                            <Image src="/images/contact-address-icon.png" width={50} height={50} priority alt="" />
                                            <h2>CONTACT INFO <span>Enrico Smith+855 - 666 - 7744</span></h2>
                                        </a>
                                        <div className="change"><a href="#" className="">Change</a></div>
                                    </div>

                                    <div id="faq1" className="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                                        <div className="card-body">
                                            <div className="contact_info">
                                                <p>Not weekly or monthly like other sites out there.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header" id="faqhead2">
                                        <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2" aria-expanded="true" aria-controls="faq2">
                                            <Image src="/images/location-icon-address.png" width={161} height={204} priority alt="" />
                                            <h2>SHIPPING ADDRESS</h2>
                                        </a>
                                        <div className="change">
                                            <a href="#" className=""><i className="fa fa-plus"></i>&nbsp; Add a new address</a>
                                        </div>
                                    </div>
                                    <div id="faq2" className="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                                        <div className="card-body">
                                            <div className="contact_info">
                                                <div className="radiobuttons">
                                                    <div className="rdio rdio-primary radio-inline">
                                                        <input name="radio" value="1" id="radio1" type="radio" checked />
                                                        <label for="radio1">Customer Name</label>
                                                    </div>
                                                    <div className="buton_number"><a href="#">Home</a> <span>987 654 3210</span> <button type="submit" className="btn">Edit</button></div>
                                                </div>
                                                <p>St. Paul`s Road, Norris, SD 57560, Dakota, USA</p>
                                                <div className="checkout_">
                                                    <div className="theme-button">
                                                        <a href="welcome.php" className="default-btn">Deliver Here</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="contact_info">
                                                <div className="radiobuttons">
                                                    <div className="rdio rdio-primary radio-inline">
                                                        <input name="radio" value="1" id="radio2" type="radio" />
                                                        <label for="radio2">Customer Name</label>
                                                    </div>
                                                    <div className="buton_number"><a href="#">Home</a> <span>987 654 3210</span> <button type="submit" className="btn d-none">Edit</button></div>
                                                </div>
                                                <p>St. Paul`s Road, Norris, SD 57560, Dakota, USA</p>
                                            </div>

                                            <div className="contact_info">
                                                <div className="radiobuttons">
                                                    <div className="rdio rdio-primary radio-inline">
                                                        <input name="radio" value="1" id="radio3" type="radio" />
                                                        <label for="radio3">Customer Name</label>
                                                    </div>
                                                    <div className="buton_number"><a href="#">Home</a> <span>987 654 3210</span> <button type="submit" className="btn d-none">Edit</button></div>
                                                </div>
                                                <p>St. Paul`s Road, Norris, SD 57560, Dakota, USA</p>
                                            </div>

                                            <div className="view_more">
                                                <a href="#"><i className="fa fa-angle-down"></i> View al 4 adresses</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header" id="faqhead3">
                                        <Link href="/payment" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3" aria-expanded="true" aria-controls="faq3">
                                            <Image src="/images/card-payment.png" width={50} height={50} priority alt="" />
                                            <h2>Payment Options</h2>
                                        </Link>
                                    </div>
                                    <div id="faq3" className="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                        <div className="card-body">
                                            <p>
                                                Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest- hottest deals on the Internet. Forget the old rules. You can have the
                                                best people. Right now You can have the best people You the best people Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest-
                                                hottest deals on the Internet. Forget the old rules. You can have the best people. Right now You can have the best people You the best people
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="payment_box">
                                <h2>PRICE DETAILS</h2>

                                <div className="checkout_list">
                                    <div className="cart_image">
                                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                                    </div>
                                    <div className="cart_price">
                                        <h1>brother DCP-B7500D Multi- function Monochrome...</h1>
                                        <p className="color">Black</p>
                                        <span className="seller">Seller :Woodster</span>
                                        <h2 className="price">$238.85 <span>$245.8 </span></h2>
                                    </div>

                                    <div className="qtu_box">
                                        <div className="add_more">
                                            <div id="field1">
                                                <button type="button" id="sub" className="sub">-</button>
                                                <input className="qty-input" type="number" id="1" value="1" min="1" max="10" />
                                                <button type="button" id="add" className="add">+</button>
                                            </div>
                                        </div>
                                        <div className="remove_button">
                                            <p>Save for later <a href="#">Remove</a></p>
                                        </div>
                                    </div>
                                </div>
                                <hr />

                                <div className="checkout_list">
                                    <div className="cart_image">
                                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                                    </div>
                                    <div className="cart_price">
                                        <h1>brother DCP-B7500D Multi- function Monochrome...</h1>
                                        <p className="color">Black</p>
                                        <span className="seller">Seller :Woodster</span>
                                        <h2 className="price">$238.85 <span>$245.8 </span></h2>
                                    </div>

                                    <div className="qtu_box">
                                        <div className="add_more">
                                            <div id="field1">
                                                <button type="button" id="sub" className="sub">-</button>
                                                <input className="qty-input" type="number" id="1" value="1" min="1" max="10" />
                                                <button type="button" id="add" className="add">+</button>
                                            </div>
                                        </div>
                                        <div className="remove_button">
                                            <p>Save for later <a href="#">Remove</a></p>
                                        </div>
                                    </div>
                                </div>
                                <hr />

                                <div className="checkout_list">
                                    <div className="cart_image">
                                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                                    </div>
                                    <div className="cart_price">
                                        <h1>brother DCP-B7500D Multi- function Monochrome...</h1>
                                        <p className="color">Black</p>
                                        <span className="seller">Seller :Woodster</span>
                                        <h2 className="price">$238.85 <span>$245.8 </span></h2>
                                    </div>

                                    <div className="qtu_box">
                                        <div className="add_more">
                                            <div id="field1">
                                                <button type="button" id="sub" className="sub">-</button>
                                                <input className="qty-input" type="number" id="1" value="1" min="1" max="10" />
                                                <button type="button" id="add" className="add">+</button>
                                            </div>
                                        </div>
                                        <div className="remove_button">
                                            <p>Save for later <a href="#">Remove</a></p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <ul>
                                    <li>Price (4 items) <span> ₹16,505</span></li>
                                    <li>Discount <span className="discount"> -₹9,564</span></li>
                                    <li>Delivery Charges <span> ₹86</span></li>
                                </ul>
                                <hr />
                                <h1>Total Amount <span>₹7,027</span></h1>
                                <hr />
                                <p>You will save ₹9,478 on this order</p>
                            </div>
                            <div className="checkout_">
                                <p><Image src="/images/safe-icon.png" width={209} height={241} priority alt="" /> Safe and Secure Payments.Easy returns.100% Authentic products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sub_section bg_ofwhite">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-4 col-md-3 col-12">
                            <div className="sub_content">
                                <h2>Stay home & get your daily needs from our shop</h2>
                                <p>Start your daily shopping with <a href="#">View Cart 24</a></p>
                                <div className="sub_input">
                                    <input type="text" className="form-control" placeholder="Your email adress" />
                                    <div className="theme-button">
                                        <a href="#" className="default-btn">Subscribe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="we_provide_section bg_ofwhite">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="what_we_do">
                                <Image src="/images/delivery-icon.jpg" width={360} height={333} priority alt="" />
                                <h2>Free Delivery</h2>
                                <p>Free Deliveries on all Orders</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="what_we_do">
                                <Image src="/images/return-icon.jpg" width={620} height={599} priority alt="" />
                                <h2>Easy Returns</h2>
                                <p>Easy Exchange Policies</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="what_we_do">
                                <Image src="/images/quality-icon.jpg" width={473} height={729} priority alt="" />
                                <h2>High Quality</h2>
                                <p>Deliver Best Products</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="what_we_do">
                                <Image src="/images/guarantee-icon.jpg" width={829} height={938} priority alt="" />
                                <h2>Secure Guarantee</h2>
                                <p>Guarantee For All Products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        <Footer/>
    </>
}      