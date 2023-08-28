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
                                    <li className="breadcrumb-item active">Products</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="categories_section bg_ofwhite">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="top_filter">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-12">
                                    <div className="show_result">
                                        <h1>Showing 1–9 of 27 results</h1>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-12">
                                    <div className="price_view">
                                        <p>Sort By</p>
                                        <ul>
                                            <li><a className="active" href="#">Popularity </a></li>
                                            <li><a href="#">Price -- Low to High </a></li>
                                            <li><a href="#"> Price -- High to Low</a></li>
                                            <li><a href="#"> Newest First</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="product_listing product_categories bg_ofwhite">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5 col-sm-5 col-12">
                        <div className="filter_list">
                            <div className="dashbordlinks" id=" ">
                                <span className="filter">Filter</span>
                                <span id="account-btn"> <i className="fa fa-navicon"></i></span>
                                <ul className="list-unstyled" id="mobile-show">
                                    <div className="filter_box">
                                        <h2>Filter</h2>
                                    </div>

                                    <div className="categories_list">
                                        <ul className="nav flex-column flex-nowrap">
                                            <li className="nav-item">
                                                <a className="nav-link main_cat collapsed" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Categories</a>
                                                <div className="collapse" id="submenu1" aria-expanded="false">
                                                    <ul className="flex-column pl-2 nav">
                                                        <li className="nav-item">
                                                            <a className="nav-link collapsed py-1 sub_cat" href="#submenu1sub1" data-toggle="collapse" data-target="#submenu1sub1"><i className="fa fa-angle-down"></i> Clothing and Accessories</a>
                                                            <div className="collapse" id="submenu1sub1" aria-expanded="false">
                                                                <ul className="flex-column nav pl-4">
                                                                    <li className="nav-item"><a className="nav-link" href="#"> Winter Wear</a></li>
                                                                    <li className="nav-item"><a className="nav-link" href="#"> Topwear</a></li>
                                                                    <li className="nav-item"><a className="nav-link" href="#"> Bottomwear</a></li>
                                                                    <li className="nav-item"><a className="nav-link" href="#"> Raincoats</a></li>
                                                                    <li className="nav-item"><a className="nav-link" href="#"> Dresses and Gowns</a></li>
                                                                    <li className="nav-item"><a className="nav-link" href="#"> Clothing Accessories</a></li>
                                                                    <a href="#" className="showMore">Show 12 more</a>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link main_cat collapsed" href="#submenu2" data-toggle="collapse" data-target="#submenu2">Analytics</a>
                                                <div className="collapse" id="submenu2" aria-expanded="false">
                                                    <ul className="flex-column pl-2 nav">
                                                        <li className="nav-item">
                                                            <a className="nav-link collapsed py-1 sub_cat" href="#submenu2sub2" data-toggle="collapse" data-target="#submenu2sub2"><i className="fa fa-angle-down"></i> Clothing and Accessories</a>
                                                            <div className="collapse" id="submenu2sub2" aria-expanded="false">
                                                                <ul className="flex-column nav pl-4">
                                                                    <li className="nav-item"><a className="nav-link" href="#"> Winter Wear</a></li>
                                                                    <li className="nav-item"><a className="nav-link" href="#"> Topwear</a></li>
                                                                    <li className="nav-item"><a className="nav-link" href="#"> Bottomwear</a></li>
                                                                    <li className="nav-item"><a className="nav-link" href="#"> Raincoats</a></li>
                                                                    <li className="nav-item"><a className="nav-link" href="#"> Dresses and Gowns</a></li>
                                                                    <li className="nav-item"><a className="nav-link" href="#"> Clothing Accessories</a></li>
                                                                    <a href="#" className="showMore">Show 12 more</a>
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="nav-item"><a className="nav-link main_cat" href="#">Export</a></li>
                                        </ul>
                                    </div>

                                    <div id="main">
                                        <div className="accordion" id="faq">
                                            <div className="card">
                                                <div className="card-header" id="faqhead3">
                                                    <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3" aria-expanded="true" aria-controls="faq3">GENDER</a>
                                                </div>

                                                <div id="faq3" className="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                                                    <div className="card-body">
                                                        <div className="color_box">
                                                            <div className="radiobuttons">
                                                                <div className="rdio rdio-primary radio-inline">
                                                                    <input name="radio" value="1" id="radio1" type="radio" checked="" />
                                                                    <label for="radio1">Male</label>
                                                                </div>
                                                                <div className="rdio rdio-primary radio-inline">
                                                                    <input name="radio" value="1" id="radio2" type="radio" />
                                                                    <label for="radio2">Female</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="price_table">
                                                <h2>Price <a href="#">Clear</a></h2>
                                                <div className=" ">
                                                    <div className="range-slider">
                                                        <div className="progress"></div>
                                                        <span className="range-min-wrapper">
                                                            <input className="range-min" type="range" min="30" max="1000" value="30" />
                                                            
                                                        </span>
                                                        <span className="range-max-wrapper">
                                                            <input className="range-max" type="range" min="0" max="1000" value="1000" />
                                                            
                                                        </span>
                                                    </div>
                                                    <div className="max_and_min">
                                                        <div className="min-value numberVal">
                                                            <input type="number" className="" min="0" max="30" value="30" disabled="" />
                                                        </div>
                                                        <div className="center_content">
                                                            <h2>to</h2>
                                                        </div>
                                                        <div className="max-value numberVal">
                                                            <input type="number" className="text-right" min="0" max="30" value="1000" disabled="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-header" id="faqhead2">
                                                    <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2" aria-expanded="true" aria-controls="faq2">Brand</a>
                                                </div>
                                                <div id="faq2" className="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                                                    <div className="card-body">
                                                        <div className="color_box">
                                                            <div className="search_box">
                                                                <input type="search" className="form-control" placeholder="Search brands" />
                                                                <button><Image src="/images/search-black.png" width={25} height={25} priority alt="" /></button>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox1" />
                                                                <label className="custom-control-label" for="customCheckBox1"> Winter Wear</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox2" />
                                                                <label className="custom-control-label" for="customCheckBox2">Topwear</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox3" />
                                                                <label className="custom-control-label" for="customCheckBox3">Bottomwear</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox4" />
                                                                <label className="custom-control-label" for="customCheckBox4">Raincoats</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox5" />
                                                                <label className="custom-control-label" for="customCheckBox5">Dresses and Gowns</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox6" />
                                                                <label className="custom-control-label" for="customCheckBox6">Clothing Accessories</label>
                                                            </div>
                                                            <a href="#" className="showMore pt-10">Show 12 more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-header" id="faqhead4">
                                                    <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq4" aria-expanded="true" aria-controls="faq4">Color</a>
                                                </div>
                                                <div id="faq4" className="collapse" aria-labelledby="faqhead4" data-parent="#faq">
                                                    <div className="card-body">
                                                        <div className="color_box">
                                                            <div className="search_box">
                                                                <input type="search" className="form-control" placeholder="Search brands" />
                                                                <button><Image src="/images/search-black.png" width={25} height={25} priority alt="" /></button>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox1" />
                                                                <label className="custom-control-label" for="customCheckBox1"> Winter Wear</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox2" />
                                                                <label className="custom-control-label" for="customCheckBox2">Topwear</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox3" />
                                                                <label className="custom-control-label" for="customCheckBox3">Bottomwear</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox4" />
                                                                <label className="custom-control-label" for="customCheckBox4">Raincoats</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox5" />
                                                                <label className="custom-control-label" for="customCheckBox5">Dresses and Gowns</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox6" />
                                                                <label className="custom-control-label" for="customCheckBox6">Clothing Accessories</label>
                                                            </div>
                                                            <a href="#" className="showMore pt-10">Show 12 more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-header" id="faqhead5">
                                                    <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq5" aria-expanded="true" aria-controls="faq5">DISCOUNT </a>
                                                </div>
                                                <div id="faq5" className="collapse" aria-labelledby="faqhead5" data-parent="#faq">
                                                    <div className="card-body">
                                                        <div className="color_box">
                                                            <div className="search_box">
                                                                <input type="search" className="form-control" placeholder="Search brands" />
                                                                <button><Image src="/images/search-black.png" width={25} height={25} priority alt="" /></button>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox1" />
                                                                <label className="custom-control-label" for="customCheckBox1"> Winter Wear</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox2" />
                                                                <label className="custom-control-label" for="customCheckBox2">Topwear</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox3" />
                                                                <label className="custom-control-label" for="customCheckBox3">Bottomwear</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox4" />
                                                                <label className="custom-control-label" for="customCheckBox4">Raincoats</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox5" />
                                                                <label className="custom-control-label" for="customCheckBox5">Dresses and Gowns</label>
                                                            </div>
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckBox6" />
                                                                <label className="custom-control-label" for="customCheckBox6">Clothing Accessories</label>
                                                            </div>
                                                            <a href="#" className="showMore pt-10">Show 12 more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-5 col-sm-5 col-12">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                <div className="product_item">
                                    <div className="top_sale">
                                        <a href="#">New</a>
                                        <a href="#">Hot</a>
                                    </div>
                                    <div className="product_image">
                                        <Link href="/detail"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></Link>
                                    </div>
                                    <div className="pro_info">
                                        <h1>brother</h1>
                                        <h2><Link href="/detail">brother DCP-B7500D Multi- function Monochrome...</Link></h2>
                                        <div className="rating">
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span className="rating_text"> (90) </span>
                                        </div>

                                        <div className="price">
                                            <h4>$238.85</h4>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: '60%'}}>
                                                <span className="title"></span>
                                            </div>
                                        </div>
                                        <h3><span>Sold:</span> 90/120</h3>
                                        <div className="add_cart">
                                            <Link href="/detail"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                <div className="product_item">
                                    <div className="top_sale">
                                        <a href="#">New</a>
                                        <a href="#">Hot</a>
                                    </div>
                                    <div className="product_image">
                                        <Link href="/detail"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></Link>
                                    </div>
                                    <div className="pro_info">
                                        <h1>brother</h1>
                                        <h2><Link href="/detail">brother DCP-B7500D Multi- function Monochrome...</Link></h2>
                                        <div className="rating">
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span className="rating_text"> (90) </span>
                                        </div>

                                        <div className="price">
                                            <h4>$238.85</h4>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: '60%'}}>
                                                <span className="title"></span>
                                            </div>
                                        </div>
                                        <h3><span>Sold:</span> 90/120</h3>
                                        <div className="add_cart">
                                            <Link href="/detail"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                <div className="product_item">
                                    <div className="top_sale">
                                        <a href="#">New</a>
                                        <a href="#">Hot</a>
                                    </div>
                                    <div className="product_image">
                                        <a href="#"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></a>
                                    </div>
                                    <div className="pro_info">
                                        <h1>brother</h1>
                                        <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a></h2>
                                        <div className="rating">
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span className="rating_text"> (90) </span>
                                        </div>

                                        <div className="price">
                                            <h4>$238.85</h4>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: '60%'}}>
                                                <span className="title"></span>
                                            </div>
                                        </div>
                                        <h3><span>Sold:</span> 90/120</h3>
                                        <div className="add_cart">
                                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                <div className="product_item">
                                    <div className="top_sale">
                                        <a href="#">New</a>
                                        <a href="#">Hot</a>
                                    </div>
                                    <div className="product_image">
                                        <a href="#"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></a>
                                    </div>
                                    <div className="pro_info">
                                        <h1>brother</h1>
                                        <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a></h2>
                                        <div className="rating">
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span className="rating_text"> (90) </span>
                                        </div>

                                        <div className="price">
                                            <h4>$238.85</h4>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: '60%'}}>
                                                <span className="title"></span>
                                            </div>
                                        </div>
                                        <h3><span>Sold:</span> 90/120</h3>
                                        <div className="add_cart">
                                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                <div className="product_item">
                                    <div className="top_sale">
                                        <a href="#">New</a>
                                        <a href="#">Hot</a>
                                    </div>
                                    <div className="product_image">
                                        <a href="#"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></a>
                                    </div>
                                    <div className="pro_info">
                                        <h1>brother</h1>
                                        <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a></h2>
                                        <div className="rating">
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span className="rating_text"> (90) </span>
                                        </div>

                                        <div className="price">
                                            <h4>$238.85</h4>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: '60%'}}>
                                                <span className="title"></span>
                                            </div>
                                        </div>
                                        <h3><span>Sold:</span> 90/120</h3>
                                        <div className="add_cart">
                                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                <div className="product_item">
                                    <div className="top_sale">
                                        <a href="#">New</a>
                                        <a href="#">Hot</a>
                                    </div>
                                    <div className="product_image">
                                        <a href="#"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></a>
                                    </div>
                                    <div className="pro_info">
                                        <h1>brother</h1>
                                        <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a></h2>
                                        <div className="rating">
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span className="rating_text"> (90) </span>
                                        </div>

                                        <div className="price">
                                            <h4>$238.85</h4>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: '60%'}}>
                                                <span className="title"></span>
                                            </div>
                                        </div>
                                        <h3><span>Sold:</span> 90/120</h3>
                                        <div className="add_cart">
                                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                <div className="product_item">
                                    <div className="top_sale">
                                        <a href="#">New</a>
                                        <a href="#">Hot</a>
                                    </div>
                                    <div className="product_image">
                                        <a href="#"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></a>
                                    </div>
                                    <div className="pro_info">
                                        <h1>brother</h1>
                                        <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a></h2>
                                        <div className="rating">
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span className="rating_text"> (90) </span>
                                        </div>

                                        <div className="price">
                                            <h4>$238.85</h4>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: '60%'}}>
                                                <span className="title"></span>
                                            </div>
                                        </div>
                                        <h3><span>Sold:</span> 90/120</h3>
                                        <div className="add_cart">
                                            <a href="#"><Image src="/images/cart-icon.png" width={210} height={240} priority alt="" /> Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                <div className="product_item">
                                    <div className="top_sale">
                                        <a href="#">New</a>
                                        <a href="#">Hot</a>
                                    </div>
                                    <div className="product_image">
                                        <a href="#"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></a>
                                    </div>
                                    <div className="pro_info">
                                        <h1>brother</h1>
                                        <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a></h2>
                                        <div className="rating">
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span className="rating_text"> (90) </span>
                                        </div>

                                        <div className="price">
                                            <h4>$238.85</h4>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: '60%'}}>
                                                <span className="title"></span>
                                            </div>
                                        </div>
                                        <h3><span>Sold:</span> 90/120</h3>
                                        <div className="add_cart">
                                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                <div className="product_item">
                                    <div className="top_sale">
                                        <a href="#">New</a>
                                        <a href="#">Hot</a>
                                    </div>
                                    <div className="product_image">
                                        <a href="#"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></a>
                                    </div>
                                    <div className="pro_info">
                                        <h1>brother</h1>
                                        <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a></h2>
                                        <div className="rating">
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span className="rating_text"> (90) </span>
                                        </div>

                                        <div className="price">
                                            <h4>$238.85</h4>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: '60%'}}>
                                                <span className="title"></span>
                                            </div>
                                        </div>
                                        <h3><span>Sold:</span> 90/120</h3>
                                        <div className="add_cart">
                                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                <div className="product_item">
                                    <div className="top_sale">
                                        <a href="#">New</a>
                                        <a href="#">Hot</a>
                                    </div>
                                    <div className="product_image">
                                        <a href="#"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></a>
                                    </div>
                                    <div className="pro_info">
                                        <h1>brother</h1>
                                        <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a></h2>
                                        <div className="rating">
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span className="rating_text"> (90) </span>
                                        </div>

                                        <div className="price">
                                            <h4>$238.85</h4>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: '60%'}}>
                                                <span className="title"></span>
                                            </div>
                                        </div>
                                        <h3><span>Sold:</span> 90/120</h3>
                                        <div className="add_cart">
                                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                <div className="product_item">
                                    <div className="top_sale">
                                        <a href="#">New</a>
                                        <a href="#">Hot</a>
                                    </div>
                                    <div className="product_image">
                                        <a href="#"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></a>
                                    </div>
                                    <div className="pro_info">
                                        <h1>brother</h1>
                                        <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a></h2>
                                        <div className="rating">
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span className="rating_text"> (90) </span>
                                        </div>

                                        <div className="price">
                                            <h4>$238.85</h4>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: '60%'}}>
                                                <span className="title"></span>
                                            </div>
                                        </div>
                                        <h3><span>Sold:</span> 90/120</h3>
                                        <div className="add_cart">
                                            <a href="#"><Image src="/images/cart-icon.png" width={210} height={240} priority alt="" /> Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-4 col-12">
                                <div className="product_item">
                                    <div className="top_sale">
                                        <a href="#">New</a>
                                        <a href="#">Hot</a>
                                    </div>
                                    <div className="product_image">
                                        <a href="#"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></a>
                                    </div>
                                    <div className="pro_info">
                                        <h1>brother</h1>
                                        <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a></h2>
                                        <div className="rating">
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span><i className="fa fa-star"></i> </span>
                                            <span className="rating_text"> (90) </span>
                                        </div>

                                        <div className="price">
                                            <h4>$238.85</h4>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: '60%'}}>
                                                <span className="title"></span>
                                            </div>
                                        </div>
                                        <h3><span>Sold:</span> 90/120</h3>
                                        <div className="add_cart">
                                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" /> Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-4 col-sm-4 col-12">
                                <div className="pagination">
                                    <ul>
                                        <li>
                                            <a href="#"><Image src="/images/page-arrow.png" width={166} height={98} priority alt="" /> Prev</a>
                                        </li>
                                        <li><a className="active" href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li>
                                            <a href="#">Next <Image src="/images/page-arrow-next.png" width={166} height={98} priority alt="" /> </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="populer_clothing_section product_categories bg_ofwhite">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <h2 className="heading">Reviews for Popular Clothing And Accessories</h2>

                        <div className="populer_clothing">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <div className="product_item">
                                        <div className="product_image">
                                            <a href="#"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></a>
                                        </div>
                                        <div className="pro_info">
                                            <h1>brother</h1>
                                            <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a></h2>
                                            <div className="rating">
                                                <span><i className="fa fa-star"></i> </span>
                                                <span><i className="fa fa-star"></i> </span>
                                                <span><i className="fa fa-star"></i> </span>
                                                <span><i className="fa fa-star"></i> </span>
                                                <span><i className="fa fa-star"></i> </span>
                                                <span className="rating_text"> (90) </span>
                                            </div>
                                            <div className="price">
                                                <h4>$238.85</h4>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: '60%'}}>
                                                    <span className="title"></span>
                                                </div>
                                            </div>
                                            <h3><span>Sold:</span> 90/120</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <div className="rating_review_box">
                                        <h1>Most Helpful Review</h1>
                                        <div className="rating">
                                            <span>4 <i className="fa fa-star"></i></span>
                                            <p>Very Good</p>
                                        </div>
                                        <h2>
                                            Looking awesome ... delivery boy also good <br />
                                            thanku viewcart24
                                        </h2>

                                        <div className="name_or_date">
                                            <span>Pooja Singh</span> <span><i className="fa fa-check"></i> Certified Buyer Mar, 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <div className="rating_review_box">
                                        <h1>Most Helpful Review</h1>
                                        <div className="rating">
                                            <span>4 <i className="fa fa-star"></i></span>
                                            <p>Very Good</p>
                                        </div>
                                        <h2>
                                            Looking awesome ... delivery boy also good <br />
                                            thanku viewcart24
                                        </h2>

                                        <div className="name_or_date">
                                            <span>Pooja Singh</span> <span><i className="fa fa-check"></i> Certified Buyer Mar, 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="populer_clothing">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <div className="product_item">
                                        <div className="product_image">
                                            <a href="#"> <Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></a>
                                        </div>
                                        <div className="pro_info">
                                            <h1>brother</h1>
                                            <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a></h2>
                                            <div className="rating">
                                                <span><i className="fa fa-star"></i> </span>
                                                <span><i className="fa fa-star"></i> </span>
                                                <span><i className="fa fa-star"></i> </span>
                                                <span><i className="fa fa-star"></i> </span>
                                                <span><i className="fa fa-star"></i> </span>
                                                <span className="rating_text"> (90) </span>
                                            </div>
                                            <div className="price">
                                                <h4>$238.85</h4>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{maxWidth: '60%'}}>
                                                    <span className="title"></span>
                                                </div>
                                            </div>
                                            <h3><span>Sold:</span> 90/120</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <div className="rating_review_box">
                                        <h1>Most Helpful Review</h1>
                                        <div className="rating">
                                            <span>4 <i className="fa fa-star"></i></span>
                                            <p>Very Good</p>
                                        </div>
                                        <h2>
                                            Looking awesome ... delivery boy also good <br />
                                            thanku viewcart24
                                        </h2>

                                        <div className="name_or_date">
                                            <span>Pooja Singh</span> <span><i className="fa fa-check"></i> Certified Buyer Mar, 2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                                    <div className="rating_review_box">
                                        <h1>Most Helpful Review</h1>
                                        <div className="rating">
                                            <span>4 <i className="fa fa-star"></i></span>
                                            <p>Very Good</p>
                                        </div>
                                        <h2>
                                            Looking awesome ... delivery boy also good <br />
                                            thanku viewcart24
                                        </h2>

                                        <div className="name_or_date">
                                            <span>Pooja Singh</span> <span><i className="fa fa-check"></i> Certified Buyer Mar, 2022</span>
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
                            <Image src="/images/guarantee-icon.jpg" width={829} height={939} priority alt="" />
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