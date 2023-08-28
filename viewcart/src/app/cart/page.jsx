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
                                        <a href="#"><Image src="/images/home-icon.png" width={128} height={126} priority alt="" /> Home</a>
                                    </li>
                                    <li className="breadcrumb-item"><a href="#">Categories</a></li>
                                    <li className="breadcrumb-item active">Shopping Cart</li>
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
                        <h2 className="heading">Shopping Cart</h2>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                        <div className="cart_main_box">
                            <div className="ViewCart_list">
                                <form className="form-cart">
                                    <div className="db-2-main-com-table">
                                        <div className="table-responsive">
                                            <div className="table" id="results">
                                                <div className="table_row">
                                                    <div className="table_small">
                                                        <div className="table_cell">Product</div>
                                                        <div className="table_cell table_cell_1">
                                                            <span className="pro_image"><Image src="/images/printer-image.png" width={192} height={143} priority alt="" /> </span>
                                                            <h1>
                                                                <a href="#">
                                                                    brother DCP-B7500D Multi-<br />
                                                                    function Monochrome...
                                                                </a>
                                                                <div className="seller_color">
                                                                    <span className="color"> Black</span>
                                                                    <span className="seller">Seller: Woodster</span>
                                                                </div>
                                                                <p>$230 <span>$245.8 </span></p>
                                                            </h1>
                                                        </div>
                                                    </div>
                                                    <div className="table_small">
                                                        <div className="table_cell">Rating</div>
                                                        <div className="table_cell">
                                                            <div className="add_more">
                                                                <div id="field1">
                                                                    <button type="button" id="sub" className="sub">-</button>
                                                                    <input className="qty-input" type="number" id="1" value="1" min="1" max="10" />
                                                                    <button type="button" id="add" className="add">+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="table_small">
                                                        <div className="table_cell">Date</div>
                                                        <div className="table_cell">
                                                            <p className="price">Delivery by Sun Apr 2 | <a href="">Free</a></p>
                                                            <small>Save for later <a href="#">Remove</a> </small>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="table_row">
                                                    <div className="table_small">
                                                        <div className="table_cell">Product</div>
                                                        <div className="table_cell table_cell_1">
                                                            <span className="pro_image"><Image src="/images/printer-image.png" width={192} height={143} priority alt="" /> </span>
                                                            <h1>
                                                                <a href="#">
                                                                    brother DCP-B7500D Multi-<br />
                                                                    function Monochrome...
                                                                </a>
                                                                <div className="seller_color">
                                                                    <span className="color"> Black</span>
                                                                    <span className="seller">Seller: Woodster</span>
                                                                </div>
                                                                <p>$230 <span>$245.8 </span></p>
                                                            </h1>
                                                        </div>
                                                    </div>
                                                    <div className="table_small">
                                                        <div className="table_cell">Rating</div>
                                                        <div className="table_cell">
                                                            <div className="add_more">
                                                                <div id="field1">
                                                                    <button type="button" id="sub" className="sub">-</button>
                                                                    <input className="qty-input" type="number" id="1" value="1" min="1" max="10" />
                                                                    <button type="button" id="add" className="add">+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="table_small">
                                                        <div className="table_cell">Date</div>
                                                        <div className="table_cell">
                                                            <p className="price">Delivery by Sun Apr 2 | <a href="">Free</a></p>
                                                            <small>Save for later <a href="#">Remove</a> </small>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="table_row">
                                                    <div className="table_small">
                                                        <div className="table_cell">Product</div>
                                                        <div className="table_cell table_cell_1">
                                                            <span className="pro_image"><Image src="/images/printer-image.png"  width={192} height={143} priority alt="" /> </span>
                                                            <h1>
                                                                <a href="#">
                                                                    brother DCP-B7500D Multi-<br />
                                                                    function Monochrome...
                                                                </a>
                                                                <div className="seller_color">
                                                                    <span className="color"> Black</span>
                                                                    <span className="seller">Seller: Woodster</span>
                                                                </div>
                                                                <p>$230 <span>$245.8 </span></p>
                                                            </h1>
                                                        </div>
                                                    </div>
                                                    <div className="table_small">
                                                        <div className="table_cell">Rating</div>
                                                        <div className="table_cell">
                                                            <div className="add_more">
                                                                <div id="field1">
                                                                    <button type="button" id="sub" className="sub">-</button>
                                                                    <input className="qty-input" type="number" id="1" value="1" min="1" max="10" />
                                                                    <button type="button" id="add" className="add">+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="table_small">
                                                        <div className="table_cell">Date</div>
                                                        <div className="table_cell">
                                                            <p className="price">Delivery by Sun Apr 2 | <a href="">Free</a></p>
                                                            <small>Save for later <a href="#">Remove</a> </small>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="table_row">
                                                    <div className="table_small">
                                                        <div className="table_cell">Product</div>
                                                        <div className="table_cell table_cell_1">
                                                            <span className="pro_image"><Image src="/images/printer-image.png"  width={192} height={143} priority alt="" /> </span>
                                                            <h1>
                                                                <a href="#">
                                                                    brother DCP-B7500D Multi-<br />
                                                                    function Monochrome...
                                                                </a>
                                                                <div className="seller_color">
                                                                    <span className="color"> Black</span>
                                                                    <span className="seller">Seller: Woodster</span>
                                                                </div>
                                                                <p>$230 <span>$245.8 </span></p>
                                                            </h1>
                                                        </div>
                                                    </div>
                                                    <div className="table_small">
                                                        <div className="table_cell">Rating</div>
                                                        <div className="table_cell">
                                                            <div className="add_more">
                                                                <div id="field1">
                                                                    <button type="button" id="sub" className="sub">-</button>
                                                                    <input className="qty-input" type="number" id="1" value="1" min="1" max="10" />
                                                                    <button type="button" id="add" className="add">+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="table_small">
                                                        <div className="table_cell">Date</div>
                                                        <div className="table_cell">
                                                            <p className="price">Delivery by Sun Apr 2 | <a href="">Free</a></p>
                                                            <small>Save for later <a href="#">Remove</a> </small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="payment_box">
                            <h2>PRICE DETAILS</h2>
                            <ul>
                                <li>Price (4 items) <span> ₹16,505</span></li>
                                <li>Discount <span> -₹9,564</span></li>
                                <li>Delivery Charges <span> ₹86</span></li>
                            </ul>
                            <hr />
                            <h1>Total Amount <span>₹7,027</span></h1>
                            <hr />
                            <p>You will save ₹9,478 on this order</p>
                        </div>
                        <div className="checkout_">
                            <div className="theme-button">
                                <Link href="/checkout" className="default-btn">Checkout</Link>
                            </div>
                            <p><Image src="/images/safe-icon.png"  width={20} height={30} priority alt="" /> Safe and Secure Payments.Easy returns.100% Authentic products.</p>
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
                            <Image src="/images/delivery-icon.jpg"  width={360} height={333} priority alt="" />
                            <h2>Free Delivery</h2>
                            <p>Free Deliveries on all Orders</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                        <div className="what_we_do">
                            <Image src="/images/return-icon.jpg"  width={620} height={599} priority alt="" />
                            <h2>Easy Returns</h2>
                            <p>Easy Exchange Policies</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                        <div className="what_we_do">
                            <Image src="/images/quality-icon.jpg"  width={473} height={729} priority alt="" />
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