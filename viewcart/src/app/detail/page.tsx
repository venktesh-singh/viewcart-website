import React from "react";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import TopBar from "../components/common/TopBar/TopBar";
import Link from "next/link";
import Image from "next/image";

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
                            <a href="#"><Image src="/images/home-icon.png" width={128} height={126} priority alt="Home" /> Home</a>
                            </li>
                            <li className="breadcrumb-item active">Single Product</li>
                        </ol>
                        </nav>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="categories_section bg_ofwhite pt-50">
                <div className="container" id="detail">
                <div className="row">
                    <div className="col-lg-5 col-sm-5 col-md-5 col-12">
                    <div className="product_gallery">
                        <div className="product-images demo-gallery">
                        <div className="main-img-slider">
                            <a data-fancybox="gallery" href="images/product-main.jpg">
                                <Image src="/images/product-main.jpg" width={103} height={102} priority alt="Product Main"  />
                            </a>
                            <a data-fancybox="gallery" href="images/iphone-video.jpg">
                                <Image src="/images/iphone-video.jpg" width={416} height={281} priority alt="iPhone Video"  />
                            </a>
                            <a data-fancybox="gallery" href="images/iphone-1.jpg">
                                <Image src="/images/iphone-1.jpg" width={416} height={416} priority alt="iPhone 1"  />
                            </a>
                            <a data-fancybox="gallery" href="images/iphone-2.jpg">
                                <Image src="/images/iphone-2.jpg" width={416} height={416} priority alt="iPhone 2"  />
                            </a>
                            <a data-fancybox="gallery" href="images/iphone-3.jpg">
                                <Image src="/images/iphone-3.jpg" width={416} height={416} priority alt="iPhone 3"  />
                            </a>
                        </div>
                        <ul className="thumb-nav">
                            <li><Image src="/images/product-main.jpg" width={416} height={416} priority alt="Product Main" /></li>
                            <li><Image src="/images/iphone-video.jpg" width={103} height={102} priority alt="iPhone Video" /></li>
                            <li><Image src="/images/iphone-1.jpg" width={416} height={416} priority alt="iPhone 1" /></li>
                            <li><Image src="/images/iphone-2.jpg" width={416} height={416} priority alt="iPhone 2" /></li>
                            <li><Image src="/images/iphone-3.jpg" width={416} height={416} priority alt="iPhone 3" /></li>
                            <li><Image src="/images/product-main.jpg" width={416} height={416} priority alt="Product Main" /></li>
                            <li><Image src="/images/iphone-video.jpg" width={103} height={102} priority alt="iPhone Video" /></li>
                            <li><Image src="/images/iphone-1.jpg" width={416} height={416} priority alt="iPhone 1" /></li>
                            <li><Image src="/images/iphone-2.jpg" width={416} height={416} priority alt="iPhone 2" /></li>
                            <li><Image src="/images/iphone-3.jpg" width={416} height={416} priority alt="iPhone 3" /></li>
                        
                        </ul>
                        </div>
                        <div className="add_cart_btn">
                        <div className="theme-button">
                            <Link href="/cart" className="default-btn"><Image src="/images/add-item-image.png" width={103} height={102} priority alt="cart"  /> Add To Cart </Link>
                        </div>
                        <div className="theme-button1">
                            <Link href="/cart" className="default-btn"><Image src="/images/buy-now-image.png" width={83} height={96} priority alt="buy"  /> Buy Now</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-7 col-sm-7 col-md-7 col-12">
                    <div className="mainProduct">
                        <div className="product_details">
                        <span className="categories_name">MOBILE PHONES</span>
                        <p>APPLE iPhone 14 Pro (Deep Purple, 128 GB)</p>
                        <div className="rating">
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star-half" /> </span>
                            <span className="rating_text">(4.6)</span>
                        </div>
                        <div className="price">
                            <span>Extra ₹6901 off</span>
                            <h2>₹1,22,999 <span>₹1,29,900</span> <span className="off_price">5% off</span></h2>
                            <span className="packing">+ ₹69 Secured Packaging Fee</span>
                        </div>
                        <div className="available_offers">
                            <h2>Available offers</h2>
                            <ul>
                            <li><span>Bank Offer </span> 5% Cashback on Flipkart Axis Bank Card <a href="#">T&amp;C</a></li>
                            <li><span>Special Price </span> Get extra ₹6901 off (price inclusive of cashback/coupon) <a href="#">T&amp;C</a></li>
                            <li><span>Partner Offer </span>5% Cashback on Flipkart Axis Bank Card copy 2 <a href="#">T&amp;C</a></li>
                            </ul>
                            <a href="#">View 5 more offers</a>
                        </div>
                        <div className="exchange">
                            <div className="radiobuttons">
                            <div className="rdio rdio-primary radio-inline">
                                <input name="radio" defaultValue={1} id="radio1" type="radio" defaultChecked />
                                <label htmlFor="radio1">Buy without Exchange</label>
                            </div>
                            <div className="buton_number">
                                <span>+ 122,999</span>
                            </div>
                            </div>
                            <div className="radiobuttons active">
                            <div className="rdio rdio-primary radio-inline">
                                <input name="radio" defaultValue={1} id="radio2" type="radio" />
                                <label htmlFor="radio2">Buy with Exchange</label>
                            </div>
                            <div className="buton_number">
                                <span>up to ₹27,000 off</span>
                            </div>
                            </div>
                        </div>
                        <div className="warrantyBox">
                            <div className="img_box">
                            <Image src="/images/apple-icon.png" width={50} height={62} priority alt="apple" />
                            </div>
                            <p>1 Year Warranty for Phone and 6 Months Warranty for In-Box Acce <a href="#">Know More</a></p>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-sm-6 col-md-6 col-12">
                            <div className="colorBox">
                                <span>Color</span>
                                <div className="color_aval active">
                                <a href="#"> <Image src="/images/iphone-gray.jpg" width={339} height={416} priority alt="iphone"  /></a>
                                </div>
                                <div className="color_aval">
                                <a href="#"><Image src="/images/iphone-gold.jpg" width={339} height={416} priority  alt="" /></a>
                                </div>
                                <div className="color_aval">
                                <a href="#"> <Image src="/images/iphone-gray.jpg" width={339} height={416} priority alt="" /></a>
                                </div>
                                <div className="color_aval">
                                <a href="#"> <Image src="/images/iphone-gray.jpg" width={339} height={416} priority alt="" /></a>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6 col-12">
                            <div className="Storage_aval">
                                <span>Storage</span>
                                <div className="storageBox">
                                <a href="#">128 GB</a>
                                <a href="#">256 GB</a>
                                <a href="#">512 GB</a>
                                <a href="#">1 TB</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="deliveryInfo">
                            <span><Image src="/images/delivery-image.png"  width={119} height={170} priority alt="" /> Deliver to</span>
                            <div className="delivery_box">
                            <p>Name Here,</p>
                            <input type="text" className="form-control" placeholder="Full Address Write...." />
                            <select>
                                <option>Home</option>
                                <option>Office</option>
                                <option>Other</option>
                            </select>
                            </div>
                            <p>Delivery in2 Days, Thursday <span className="divider">|</span> <span>Free</span> ₹40</p>
                            <a href="#">View Details</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                    <div className="product_dec">
                        <div className="row">
                        <div className="col-lg-4 col-sm-4 col-md-6 col-12">
                            <div className="dec_box">
                            <span>Highlights</span>
                            <div className="decBox">
                                <ul>
                                <li>128 GB ROM</li>
                                <li>
                                    15.49 cm (6.1 inch) Super <br />
                                    Retina XDR Display
                                </li>
                                <li>
                                    48MP + 12MP + 12MP | 12MP <br />
                                    Front Camera
                                </li>
                                <li>
                                    A16 Bionic Chip, 6 Core <br />
                                    Processor Processor
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-md-6 col-12">
                            <div className="dec_box">
                            <span>Easy Payment Options </span>
                            <div className="decBox">
                                <ul>
                                <li>EMI starting from ₹4,204/ month</li>
                                <li>Net banking &amp; Credit/ Debit/ ATM card</li>
                                <a href="#">View Details</a>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-md-6 col-12">
                            <div className="dec_box">
                            <span>Seller</span>
                            <div className="decBox">
                                <ul>
                                <h2>NGIVR RETAILS</h2>
                                <li>7 day seller replacement policy/brand assistance for device issues*</li>
                                <a href="#">See other sellers</a>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row align-items-center protect_product">
                    <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                    <h2 className="heading f-size22">Protect your product</h2>
                    <hr />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6 col-12">
                    <div className="protect_box">
                        <div className="check"><Image src="/images/check-image.png" width={26} height={26} priority alt=""  /></div>
                        <div className="apple_care">
                        <Image src="/images/apple-care.png" width={312} height={312} priority alt=""  />
                        </div>
                        <div className="apple_care_content">
                        <p>Protect+ with AppleCare Services for iPhone 14 Pro (1 Year)</p>
                        <p>
                            One stop for support - Priority access to Apple experts via chat or phone, same-day service in most major metropolitan areas worldwide, pickup and delivery service: schedule a pickup at your home or office,
                            carry-in repairs: take your iPhone to an Apple Authorised Service Provider<a href="#">Know More</a>
                        </p>
                        <span>Brand authorised repair &amp; Customer support Paperless seamless Hassel free transation</span>
                        <h1>₹1,22,999</h1>
                        <h2>Or Pay ₹1,974</h2>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6 col-12">
                    <div className="protect_box">
                        <div className="check"><Image src="/images/check-image.png" width={26} height={26} priority alt=""  /></div>
                        <div className="apple_care">
                        <Image src="/images/warranty-image.png" width={312} height={179} priority alt="" />
                        </div>
                        <div className="apple_care_content">
                        <article>Extended Warranty 1 Year</article>
                        <p>Get brand authorised repairs with free pickup and drop. Absolutely no hidden charges!<a href="#">Know More</a></p>
                        <span>Extend the life of your Mobile with safety and convenience</span>
                        <h1>₹1,22,999</h1>
                        <h2>Or Pay ₹1,974</h2>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="categories_section bg_ofwhite">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="item_list">
                        <div className="itemsBox" />
                        <div className="itemsBox" />
                        <div className="itemsBox" />
                        <div className="itemsBox">
                        <p>1 Item</p>
                        <h2>
                            ₹1,22,999 <span><i className="fa fa-plus" /> </span>
                        </h2>
                        </div>
                        <div className="itemsBox">
                        <p>1 Item</p>
                        <h2>
                            ₹1,22,999 <span><i className="fa fa-plus" /> </span>
                        </h2>
                        </div>
                        <div className="itemsBox">
                        <p>1 Item</p>
                        <h2>
                            ₹1,22,999 <span><i className="fa fa-plus" /> </span>
                        </h2>
                        </div>
                        <div className="itemsBox">
                        <p>2 Add-ons</p>
                        <h2>
                            ₹1,22,999 <span><i className="fa fa-plus" /> </span>
                        </h2>
                        </div>
                        <div className="itemsBox">
                        <p>Total</p>
                        <h2>
                            ₹1,22,999 <span><i className="fa fa-plus" /> </span>
                        </h2>
                        </div>
                        <div className="itemsBox">
                        <div className="theme-button">
                            <a href="#" className="default-btn"><Image src="/images/add-item-image.png" width={238} height={212} priority alt=""  /> Add 3 items to cart</a>
                        </div>
                        </div>
                    </div>
                    <div className="details-dec">
                        <h4>Specifications</h4>
                        <h2>General</h2>
                        <table className="tbl">
                        <tbody>
                            <tr>
                            <td>In The Box</td>
                            <td>Handset, USB-C to Lightning Cable, Documentation</td>
                            </tr>
                            <tr>
                            <td>Model Number</td>
                            <td>MQ0G3HN/A</td>
                            </tr>
                            <tr>
                            <td>Model Name</td>
                            <td>iPhone 14 Pro</td>
                            </tr>
                            <tr>
                            <td>Color</td>
                            <td>Deep Purple</td>
                            </tr>
                            <tr>
                            <td>Browse Type</td>
                            <td>Smartphones</td>
                            </tr>
                            <tr>
                            <td>SIM Type</td>
                            <td>Dual Sim(Nano + eSIM)</td>
                            </tr>
                            <tr>
                            <td>Hybrid Sim Slot</td>
                            <td>No</td>
                            </tr>
                        </tbody>
                        </table>
                        <div className="knowMore">
                        <span className="see-all-hide4" id="btn">Read More</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="product_related product_categories bg_ofwhite">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                    <h2 className="heading">Buy together and save upto 30%</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                    <div className="product-related owl-carousel owl-theme">
                        <div className="recent-items">
                        <div className="product_item">
                            <div className="top_sale">
                            <a href="#">New</a>
                            <a href="#">Hot</a>
                            </div>
                            <div className="product_image">
                            <Link href="/category"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt=""  /></Link>
                            </div>
                            <div className="pro_info">
                            <h1>brother</h1>
                            <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a></h2>
                            <div className="rating">
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                                <h4>$238.85</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ "maxWidth": "60%" }}>
                                <span className="title" />
                                </div>
                            </div>
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className="add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="recent-items">
                        <div className="product_item">
                            <div className="top_sale">
                            <a href="#">Tranding</a>
                            </div>
                            <div className="product_image">
                            <Link href="/category"><Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></Link>
                            </div>
                            <div className="pro_info">
                            <h1>brother</h1>
                            <h2>brother DCP-B7500D Multi- function Monochrome...</h2>
                            <div className="rating">
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                                <h4>$238.85</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{"maxWidth":"60%"}}>
                                <span className="title" />
                                </div>
                            </div>
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className="add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="recent-items">
                        <div className="product_item">
                            <div className="top_sale">
                            <a href="#">New</a>
                            <a href="#">Hot</a>
                            </div>
                            <div className="product_image">
                            <Link href="/category"> <Image src="/images/iphone01.jpg" width={1994} height={1729} priority alt=""  /></Link>
                            </div>
                            <div className="pro_info">
                            <h1>brother</h1>
                            <h2>brother DCP-B7500D Multi- function Monochrome...</h2>
                            <div className="rating">
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                                <h4>$238.85</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{"maxWidth":"60%"}}>
                                <span className="title" />
                                </div>
                            </div>
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className="add_cart">
                                <Link href="category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt=""  /> Add to Cart</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="recent-items">
                        <div className="product_item">
                            <div className="top_sale">
                            <a href="#">New</a>
                            <a href="#">Hot</a>
                            </div>
                            <div className="product_image">
                            <Link href="category"><Image src="/images/vivo.jpg" width={145} height={161} priority alt="" /></Link>
                            </div>
                            <div className="pro_info">
                            <h1>brother</h1>
                            <h2>brother DCP-B7500D Multi- function Monochrome...</h2>
                            <div className="rating">
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                                <h4>$238.85</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{"maxWidth":"60%"}}>
                                <span className="title" />
                                </div>
                            </div>
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className="add_cart">
                                <Link href="category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="recent-items">
                        <div className="product_item">
                            <div className="top_sale">
                            <a href="#">Tranding</a>
                            </div>
                            <div className="product_image">
                            <Link href="category"><Image src="/images/samsung.jpg" width={137} height={165} priority alt=""  /></Link>
                            </div>
                            <div className="pro_info">
                            <h1>brother</h1>
                            <h2>brother DCP-B7500D Multi- function Monochrome...</h2>
                            <div className="rating">
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                                <h4>$238.85</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ "maxWidth": "60%" }}>
                                <span className="title" />
                                </div>
                            </div>
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className="add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="categories_section bg_ofwhite">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="item_list">
                        <div className="itemsBox" />
                        <div className="itemsBox" />
                        <div className="itemsBox" />
                        <div className="itemsBox">
                        <p>1 Item</p>
                        <h2>
                            ₹1,22,999 <span><i className="fa fa-plus" /> </span>
                        </h2>
                        </div>
                        <div className="itemsBox">
                        <p>1 Item</p>
                        <h2>
                            ₹1,22,999 <span><i className="fa fa-plus" /> </span>
                        </h2>
                        </div>
                        <div className="itemsBox">
                        <p>1 Item</p>
                        <h2>
                            ₹1,22,999 <span><i className="fa fa-plus" /> </span>
                        </h2>
                        </div>
                        <div className="itemsBox">
                        <p>2 Add-ons</p>
                        <h2>
                            ₹1,22,999 <span><i className="fa fa-plus" /> </span>
                        </h2>
                        </div>
                        <div className="itemsBox">
                        <p>Total</p>
                        <h2>
                            ₹1,22,999 <span><i className="fa fa-plus" /> </span>
                        </h2>
                        </div>
                        <div className="itemsBox">
                        <div className="theme-button">
                            <a href="#" className="default-btn"><Image src="/images/add-item-image.png" width={238} height={212} priority alt="" /> Add 3 items to cart</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="review_rating_section bg_ofwhite">
                <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-sm-7 col-md-7 col-12">
                    <div className="well well-sm">
                        <h2 className="f-size22">Ratings &amp; Reviews</h2>
                        <div className="row">
                        <div className="col-lg-3 col-sm-3 col-md-3 col-12 text-left">
                            <div className="total_review_rating">
                            <h1 className="rating-num">4.7</h1>
                            <div className="rating">
                                <i className="fa fa-star" />
                            </div>
                            <span>863 Ratings &amp; 71 Reviews </span>
                            </div>
                        </div>
                        <div className="col-lg-9 col-sm-9 col-md-9 col-12">
                            <div className="row rating-desc">
                            <div className="col-lg-1 col-sm-2 col-md-2 col-12 text-right">
                                <div className="star_withR">5 <span className="fa fa-star" /></div>
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7 col-12">
                                <div className="progress_bar">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}  />
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-md-4 col-12 text-left">
                                <div className="total_rating">
                                <span>735</span>
                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-2 col-md-2 col-12 text-right">
                                <div className="star_withR">4 <span className="fa fa-star" /></div>
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7 col-12">
                                <div className="progress_bar">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}  />
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-md-4 col-12 text-left">
                                <div className="total_rating">
                                <span>73</span>
                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-2 col-md-2 col-12 text-right">
                                <div className="star_withR">3 <span className="fa fa-star" /></div>
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7 col-12">
                                <div className="progress_bar">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}  />
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-md-4 col-12 text-left">
                                <div className="total_rating">
                                <span>13</span>
                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-2 col-md-2 col-12 text-right">
                                <div className="star_withR">2 <span className="fa fa-star" /></div>
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7 col-12">
                                <div className="progress_bar">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}  />
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-md-4 col-12 text-left">
                                <div className="total_rating">
                                <span>10</span>
                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-2 col-md-2 col-12 text-right">
                                <div className="star_withR">1 <span className="fa fa-star" /></div>
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7 col-12">
                                <div className="progress_bar">
                                <div className="progress">
                                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}  />
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4 col-md-4 col-12 text-left">
                                <div className="total_rating">
                                <span>32</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="review_images">
                        <a href="#"><Image src="/images/review-image.jpg" width={275} height={183} priority alt=""  /> </a>
                        <a href="#"><Image src="/images/review-image-1.jpg" width={259} height={194} priority alt=""  /> </a>
                        <a href="#"><Image src="/images/review-image-2.jpg" width={259} height={194} priority alt=""  /> </a>
                        <a href="#"><Image src="/images/review-image-3.jpg" width={259} height={194} priority alt=""  /> </a>
                        <a href="#"><Image src="/images/review-image-4.jpg" width={259} height={194} priority alt=""  /> </a>
                        <a href="#"><Image src="/images/review-image-5.jpg" width={259} height={194} priority alt=""  /> </a>
                        <a href="#"><Image src="/images/review-image-6.jpg" width={259} height={194} priority alt=""  /> </a>
                        <a className="overlay1" href="#">
                            <Image src="/images/review-image-7.jpg" width={275} height={183} priority alt="" /> 
                            <span> +49</span>
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-5 col-sm-5 col-md-5 col-12">
                    <div className="rate_product">
                        <a href="#">Rate Product</a>
                    </div>
                    <div className="chart_size">
                        <div className="circular">
                        <div className="half-arc" >
                            <span className="label">4.8</span>
                        </div>
                        <p>Camera</p>
                        </div>
                        <div className="circular">
                        <div className="half-arc">
                            <span className="label">4.8</span>
                        </div>
                        <p>Battery</p>
                        </div>
                        <div className="circular">
                        <div className="half-arc">
                            <span className="label">4.4</span>
                        </div>
                        <p>Display</p>
                        </div>
                        <div className="circular">
                        <div className="half-arc">
                            <span className="label">4.7</span>
                        </div>
                        <p>Design</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="all_rating_section bg_ofwhite">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                    <div className="all_rating_list">
                        <h1>
                        <span>5 <i className="fa fa-star" /> </span> Excellent
                        </h1>
                        <p>
                        Upgraded from XR to 14 pro, amazing phone with advanced features limited to just pro models, stock availability is too low. Got<br />
                        mine by luck! <br />
                        If youre upgrading from iPhone 11 /11 pro and below you all love the update
                        </p>
                        <a href="#"><Image src="/images/review-image.jpg" width={269} height={194} priority alt="" /> </a>
                        <a href="#"><Image src="/images/review-image-1.jpg" width={269} height={194} priority alt=""  /> </a>
                        <a href="#"><Image src="/images/review-image-2.jpg" width={269} height={194} priority alt="" /> </a>
                        <a href="#"><Image src="/images/review-image-3.jpg" width={269} height={194} priority alt="" /> </a>
                        <div className="main-row">
                        <div className="cert_buyer">
                            <span>Pooja Singh </span> <span><i className="fa fa-check" /> Certified Buyer Mar, 2022</span>
                        </div>
                        <div className="like_dislike">
                            <a href="#"><i className="fa fa-thumbs-up" /> <span>2481 </span></a>
                            <a href="#"><i className="fa fa-thumbs-down" /><span>447 </span></a>
                            <a href="#"><i className="fa fa-angle-down" /> </a>
                        </div>
                        </div>
                    </div>
                    <div className="all_rating_list">
                        <h1>
                        <span>5 <i className="fa fa-star" /> </span> Excellent
                        </h1>
                        <p>
                        Upgraded from XR to 14 pro, amazing phone with advanced features limited to just pro models, stock availability is too low. Got<br />
                        mine by luck! <br />
                        If youre upgrading from iPhone 11 /11 pro and below you all love the update
                        </p>
                        <a href="#"><Image src="/images/review-image.jpg" width={275} height={183} priority alt=""  /> </a>
                        <a href="#"><Image src="/images/review-image-1.jpg" width={269} height={194} priority alt=""  /> </a>
                        <a href="#"><Image src="/images/review-image-2.jpg" width={269} height={194} priority alt=""  /> </a>
                        <a href="#"><Image src="/images/review-image-3.jpg" width={275} height={183} priority alt="" /> </a>
                        <div className="main-row">
                        <div className="cert_buyer">
                            <span>Pooja Singh </span> <span><i className="fa fa-check" /> Certified Buyer Mar, 2022</span>
                        </div>
                        <div className="like_dislike">
                            <a href="#"><i className="fa fa-thumbs-up" /> <span>2481 </span></a>
                            <a href="#"><i className="fa fa-thumbs-down" /><span>447 </span></a>
                            <a href="#"><i className="fa fa-angle-down" /> </a>
                        </div>
                        </div>
                    </div>
                    <div className="all_rating_list">
                        <h1>
                        <span>5 <i className="fa fa-star" /> </span> Excellent
                        </h1>
                        <p>
                        Upgraded from XR to 14 pro, amazing phone with advanced features limited to just pro models, stock availability is too low. Got<br />
                        mine by luck! <br />
                        If youre upgrading from iPhone 11 /11 pro and below you all love the update
                        </p>
                        <a href="#"><Image src="/images/review-image.jpg" width={275} height={183} priority alt=""  /> </a>
                        <a href="#"><Image src="/images/review-image-1.jpg" width={269} height={194} priority alt=""  /> </a>
                        <a href="#"><Image src="/images/review-image-2.jpg" width={269} height={194} priority alt="" /> </a>
                        <a href="#"><Image src="/images/review-image-3.jpg" width={275} height={183} priority alt="" /> </a>
                        <div className="main-row">
                        <div className="cert_buyer">
                            <span>Pooja Singh </span> <span><i className="fa fa-check" /> Certified Buyer Mar, 2022</span>
                        </div>
                        <div className="like_dislike">
                            <a href="#"><i className="fa fa-thumbs-up" /> <span>2481 </span></a>
                            <a href="#"><i className="fa fa-thumbs-down" /><span>447 </span></a>
                            <a href="#"><i className="fa fa-angle-down" /> </a>
                        </div>
                        </div>
                    </div>
                    <div className="view_all">
                        <span><a href="#">All 71 Reviews</a> </span>
                        <span className="add_more">
                        <a href="#"><i className="fa fa-plus" /> </a>
                        </span>
                    </div>
                    <div className="all_rating_list qus_ans">
                        <div className="heading_qus">
                        <h2 className="f_size22">Questions and Answers</h2>
                        </div>
                        <div className="customer_qus">
                        <h2><span>Q:</span> Can we call an Alien?</h2>
                        <h2><span>A:</span>no</h2>
                        <p>Anonymous</p>
                        <div className="main-row">
                            <div className="cert_buyer">
                            <span><i className="fa fa-check" /> Certified Buyer Mar, 2022</span>
                            </div>
                            <div className="like_dislike">
                            <a href="#"><i className="fa fa-thumbs-up" /> <span>2481 </span></a>
                            <a href="#"><i className="fa fa-thumbs-down" /><span>447 </span></a>
                            <a href="#"><i className="fa fa-angle-down" /> </a>
                            </div>
                        </div>
                        </div>
                        <div className="customer_qus">
                        <h2><span>Q:</span> Can we call an Alien?</h2>
                        <h2><span>A:</span>no</h2>
                        <p>Anonymous</p>
                        <div className="main-row">
                            <div className="cert_buyer">
                            <span><i className="fa fa-check" /> Certified Buyer Mar, 2022</span>
                            </div>
                            <div className="like_dislike">
                            <a href="#"><i className="fa fa-thumbs-up" /> <span>2481 </span></a>
                            <a href="#"><i className="fa fa-thumbs-down" /><span>447 </span></a>
                            <a href="#"><i className="fa fa-angle-down" /> </a>
                            </div>
                        </div>
                        </div>
                        <div className="customer_qus">
                        <h2><span>Q:</span> Can we call an Alien?</h2>
                        <h2><span>A:</span>no</h2>
                        <p>Anonymous</p>
                        <div className="main-row">
                            <div className="cert_buyer">
                            <span><i className="fa fa-check" /> Certified Buyer Mar, 2022</span>
                            </div>
                            <div className="like_dislike">
                            <a href="#"><i className="fa fa-thumbs-up" /> <span>2481 </span></a>
                            <a href="#"><i className="fa fa-thumbs-down" /><span>447 </span></a>
                            <a href="#"><i className="fa fa-angle-down" /> </a>
                            </div>
                        </div>
                        </div>
                        <div className="view_all">
                        <span><a href="#">All Questions</a> </span>
                        <span className="add_more">
                            <a href="#"><i className="fa fa-plus" /> </a>
                        </span>
                        </div>
                    </div>
                    <div className="safe_seq">
                        <p><Image src="/images/safe-icon.png" width={209} height={241} priority alt="" /> Safe and Secure Payments.Easy returns.100% Authentic products.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="product_related product_categories bg_ofwhite">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                    <h2 className="heading">Related Product</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                    <div className="product-related owl-carousel owl-theme">
                        <div className="recent-items">
                        <div className="product_item">
                            <div className="top_sale">
                            <a href="#">New</a>
                            <a href="#">Hot</a>
                            </div>
                            <div className="product_image">
                            <Link href="/category"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></Link>
                            </div>
                            <div className="pro_info">
                            <h1>brother</h1>
                            <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a></h2>
                            <div className="rating">
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                                <h4>$238.85</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                                <span className="title" />
                                </div>
                            </div>
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className="add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="recent-items">
                        <div className="product_item">
                            <div className="top_sale">
                            <a href="#">Tranding</a>
                            </div>
                            <div className="product_image">
                            <Link href="/category"><Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></Link>
                            </div>
                            <div className="pro_info">
                            <h1>brother</h1>
                            <h2>brother DCP-B7500D Multi- function Monochrome...</h2>
                            <div className="rating">
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                                <h4>$238.85</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} >
                                <span className="title" />
                                </div>
                            </div>
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className="add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="recent-items">
                        <div className="product_item">
                            <div className="top_sale">
                            <a href="#">New</a>
                            <a href="#">Hot</a>
                            </div>
                            <div className="product_image">
                            <Link href="/category"> <Image src="/images/iphone01.jpg" width={1994} height={1729} priority alt="" /></Link>
                            </div>
                            <div className="pro_info">
                            <h1>brother</h1>
                            <h2>brother DCP-B7500D Multi- function Monochrome...</h2>
                            <div className="rating">
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                                <h4>$238.85</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} >
                                <span className="title" />
                                </div>
                            </div>
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className="add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="recent-items">
                        <div className="product_item">
                            <div className="top_sale">
                            <a href="#">New</a>
                            <a href="#">Hot</a>
                            </div>
                            <div className="product_image">
                            <Link href="/category"><Image src="/images/vivo.jpg" width={145} height={161} priority alt="" /></Link>
                            </div>
                            <div className="pro_info">
                            <h1>brother</h1>
                            <h2>brother DCP-B7500D Multi- function Monochrome...</h2>
                            <div className="rating">
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                                <h4>$238.85</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} >
                                <span className="title" />
                                </div>
                            </div>
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className="add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="recent-items">
                        <div className="product_item">
                            <div className="top_sale">
                            <a href="#">Tranding</a>
                            </div>
                            <div className="product_image">
                            <Link href="/category"><Image src="/images/samsung.jpg" width={137} height={165} priority alt="" /></Link>
                            </div>
                            <div className="pro_info">
                            <h1>brother</h1>
                            <h2>brother DCP-B7500D Multi- function Monochrome...</h2>
                            <div className="rating">
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                                <h4>$238.85</h4>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} >
                                <span className="title" />
                                </div>
                            </div>
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className="add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</Link>
                            </div>
                            </div>
                        </div>
                        </div>
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
                        <h2>Stay home &amp; get your daily needs from our shop</h2>
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