'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';  
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Index() {  
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }; 

    var settings01 = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
    };

    var settings02 = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    var settings03 = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };  

    var settings04 = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };  

    var settings05 = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }; 

    var settings06 = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }; 

    var settings07 = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }; 

    var settings08 = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }; 

    var settings09 = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }; 

    var settings010 = {
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return( <div>
        <section className="main_slider">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                        <div id="demo" className="carousel slide" data-ride="carousel">  
                            <div className="carousel-inner11">
                                <Slider {...settings}>
                                    <div className="carousel-item2222">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-5 col-sm-5 col-md-6 col-12">
                                                    <div className="banner_info">
                                                        <h1>Shop Computers <br />&amp; Accessories</h1>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit, sed do eiusmod tempor incididunt ut labore et<br /> dolore magna aliqua.</p>
                                                        <div className="theme-button">
                                                            <Link href="/category" className="default-btn">view all Product</Link>  
                                                        </div> 
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-sm-7 col-md-6 col-12">
                                                    <div className="slider_image">
                                                        <div className="rups_off">
                                                            <h1>50%</h1>
                                                        </div>
                                                        <div className="product_info">
                                                            <p>Computer &amp; Accessories</p>
                                                            <h2>JBL T460BT Black <br /> Headphones</h2>
                                                            <span><i className="fa fa-star" /> </span>
                                                            <span><i className="fa fa-star" /> </span>
                                                            <span><i className="fa fa-star" /> </span>
                                                            <span><i className="fa fa-star" /> </span>
                                                            <span><i className="fa fa-star-o" /> </span>
                                                            <span className="rating"> 1.245 reviews </span>
                                                            <h1>₹ 1500.00 <small>1.245 reviews</small></h1>
                                                            <Link href="/category">View more <Image src="/images/right-arrow.png" width={51} height={10} priority alt="" /> </Link>
                                                        </div>
                                                        <Image src="/images/slider-image.png" width={347} height={476} priority alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="carousel-item2222">  
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-5 col-sm-5 col-md-6 col-12">
                                                    <div className="banner_info">
                                                        <h1>Shop Computers <br />&amp; Accessories</h1>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit, sed do eiusmod tempor incididunt ut labore et<br /> dolore magna aliqua.</p>
                                                        <div className="theme-button">
                                                            <Link href="/category" className="default-btn">view all Product</Link>
                                                        </div> 
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-sm-7 col-md-6 col-12">
                                                    <div className="slider_image">
                                                        <div className="rups_off">
                                                            <h1>50%</h1>
                                                        </div>
                                                        <div className="product_info">
                                                            <p>Computer &amp; Accessories</p>
                                                            <h2>JBL T460BT Black <br /> Headphones</h2>
                                                            <span><i className="fa fa-star" /> </span>
                                                            <span><i className="fa fa-star" /> </span>
                                                            <span><i className="fa fa-star" /> </span>
                                                            <span><i className="fa fa-star" /> </span>
                                                            <span><i className="fa fa-star-o" /> </span>
                                                            <span className="rating"> 1.245 reviews </span>
                                                            <h1>₹ 1500.00 <small>1.245 reviews</small></h1>
                                                            <Link href="/category">View more <Image src="/images/right-arrow.png" width={51} height={10} priority alt="" /> </Link>
                                                        </div>
                                                        <Image src="/images/slider-image.png" width={347} height={476} priority alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="categories_slider">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11 col-sm-12 col-md-12 col-12">
                        <Slider {...settings01}>    
                            <div className="recent-items">
                                <div className="categories_box">
                                <Link href="/category"><Image src="/images/grocery.png" width={92} height={87} priority alt="" /> </Link>                           
                                <h1>grocery</h1>
                                </div>
                            </div>
                            <div className="recent-items">
                                <div className="categories_box">
                                <Link href="/category"><Image src="/images/mobile.png" width={92} height={87} priority alt="" /></Link>                          
                                <h1>mobile</h1>
                                </div>
                            </div>
                            <div className="recent-items">
                                <div className="categories_box">
                                <Link href="/category"><Image src="/images/fachion.png" width={92} height={87} priority alt="" /></Link>                          
                                <h1>Fashion</h1>
                                </div>
                            </div>
                            <div className="recent-items">
                                <div className="categories_box">
                                <Link href="/category"><Image src="/images/electronics.png" width={92} height={87} priority alt="" /></Link>                          
                                <h1>Electronics</h1>
                                </div>
                            </div>
                            <div className="recent-items">
                                <div className="categories_box">
                                <Link href="/category"><Image src="/images/home.png" width={92} height={87} priority alt="" /></Link>                          
                                <h1>Home</h1>
                                </div>
                            </div>
                            <div className="recent-items">
                                <div className="categories_box">
                                <Link href="/category"><Image src="/images/application.png" width={92} height={87} priority alt="" /></Link>                          
                                <h1>Appliances</h1>
                                </div>
                            </div>
                            <div className="recent-items">
                                <div className="categories_box">
                                <Link href="/category"><Image src="/images/travel.png" width={92} height={87} priority alt="" /></Link>                          
                                <h1>travel</h1>
                                </div>
                            </div>
                            <div className="recent-items">
                                <div className="categories_box">
                                <Link href="/category"><Image src="/images/top-offer.png" width={92} height={87} priority alt="" /></Link>                          
                                <h1>Top Offers</h1>
                                </div>
                            </div>
                            <div className="recent-items">
                                <div className="categories_box">
                                <Link href="/category"><Image src="/images/kids.png" width={92} height={87} priority alt="" /></Link>                          
                                <h1>Beauty, Toys &amp; More</h1>
                                </div>
                            </div>
                            <div className="recent-items">
                                <div className="categories_box">
                                <Link href="/category"><Image src="/images/grocery.png" width={92} height={87} priority alt="" /> </Link>                           
                                <h1>grocery</h1>
                                </div>
                            </div>
                            <div className="recent-items">
                                <div className="categories_box">
                                <Link href="/category"><Image src="/images/mobile.png" width={92} height={87} priority alt="" /></Link>                          
                                <h1>mobile</h1>
                                </div>
                            </div>
                            <div className="recent-items">
                                <div className="categories_box">
                                <Link href="/category"><Image src="/images/fachion.png" width={92} height={87} priority alt="" /></Link>                          
                                <h1>Fashion</h1>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>

            <section className="add_section">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-7 col-sm-6 col-md-6 col-12">
                        <div className="product_add">
                        <Link href="/category"><Image src="/images/add-banner-02.png" width={861} height={273} priority alt="" /></Link>
                
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-6 col-md-6 col-12">
                        <div className="product_add">
                        <Link href="/category"><Image src="/images/add-banner-01.png" width={552} height={273} priority alt="" /></Link>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="product_slider">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-sm-4 col-md-4 col-12">
                        <h2 className="heading">Popular Products</h2>
                    </div>
                    <div className="col-lg-7 col-sm-8 col-md-8 col-12">
                        <div className="help_support"> 
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                            <a className="nav-link active" href="#all" role="tab" data-toggle="tab" aria-selected="true">All</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#featured" role="tab" data-toggle="tab" aria-selected="false"> Featured</a>
                            </li> 
                            <li className="nav-item">
                            <a className="nav-link" href="#buzz" role="tab" data-toggle="tab" aria-selected="false">Popular</a>
                            </li> 
                            <li className="nav-item">
                            <a className="nav-link" href="#buzz" role="tab" data-toggle="tab" aria-selected="false"> New added </a>
                            </li>   
                        </ul> 
                        </div>
                    </div>
                </div>
                <div className="row ">
                <div className="col-lg-12 col-sm-12 col-md-12 col-12"> 
                    <div className="tab-content" id="myTabContent">   
                    <div className="tab-pane fade in show active" id="all" role="tabpanel" aria-labelledby="all-tab"> 
                    <Slider {...settings02}>  
                        
                            <div className="recent-items">
                                <div className="product_item">
                                <div className="top_sale">
                                    <a href="#">New</a>
                                    <a href="#">Hot</a>
                                </div>
                                <div className="product_image">
                                <Link href="/category"> <Image src="/images/printer-image.png" width={192} height={143} priority alt="" /></Link>
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
                                    <p>by<span>Brother </span></p>
                                    <div className="price">
                                    <h4>$238.85 <span>$245.8</span></h4>
                                    </div>
                                    <div className="add_cart">
                                    <Link href="/category"><i className="fa fa-shopping-cart" /> Add</Link>
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
                                <Link href="/category"> <Image src="/images/trimer.png" width={192} height={143} priority alt="" /></Link>
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
                                    <p>by<span>Brother </span></p>
                                    <div className="price">
                                    <h4>$238.85 <span>$245.8</span></h4>
                                    </div>
                                    <div className="add_cart">
                                    <Link href="/category"><i className="fa fa-shopping-cart" /> Add</Link>
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
                                <Link href="/category"><Image src="/images/computer-image.png"  width={192} height={143} priority alt="" /></Link>
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
                                    <p>by<span>Brother </span></p>
                                    <div className="price">
                                    <h4>$238.85 <span>$245.8</span></h4>
                                    </div>
                                    <div className="add_cart">
                                    <Link href="/category"><i className="fa fa-shopping-cart" /> Add</Link>
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
                                    <Image src="/images/mobile-stand-image.png"  width={192} height={143} priority alt="" />
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
                                    <p>by<span>Brother </span></p>
                                    <div className="price">
                                    <h4>$238.85 <span>$245.8</span></h4>
                                    </div>
                                    <div className="add_cart">
                                    <Link href="/category"><i className="fa fa-shopping-cart" /> Add</Link>
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
                                    <Link href="/category"><Image src="/images/dryyer-image.png"  width={192} height={143} priority alt="" /></Link>
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
                                    <p>by<span>Brother </span></p>
                                    <div className="price">
                                    <h4>$238.85 <span>$245.8</span></h4>
                                    </div>
                                    <div className="add_cart">
                                    <Link href="/category"><i className="fa fa-shopping-cart" /> Add</Link>
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
                                    <Link href="/category"> <Image src="/images/printer-image.png"  width={192} height={143} priority alt="" /></Link>
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
                                    <p>by<span>Brother </span></p>
                                    <div className="price">
                                    <h4>$238.85 <span>$245.8</span></h4>
                                    </div>
                                    <div className="add_cart">
                                    <Link href="/category"><i className="fa fa-shopping-cart" /> Add</Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                        
                        </Slider>
                    </div>
                    <div className="tab-pane fade in" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                    <Slider {...settings03}>     
                        <div className="recent-items">
                            <div className="product_item">
                            <div className="top_sale">
                                <a href="#">New</a>
                                <a href="#">Hot</a>
                            </div>
                            <div className="product_image">
                                <Image src="/images/printer-image.png"  width={192} height={143} priority alt="" />
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
                                <p>by<span>Brother </span></p>
                                <div className="price">
                                <h4>$238.85 <span>$245.8</span></h4>
                                </div>
                                <div className="add_cart">
                                <a href="#"><i className="fa fa-shopping-cart" /> Add</a>
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
                                <Image src="/images/trimer.png"  width={192} height={143} priority alt="" />
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
                                <p>by<span>Brother </span></p>
                                <div className="price">
                                <h4>$238.85 <span>$245.8</span></h4>
                                </div>
                                <div className="add_cart">
                                <a href="#"><i className="fa fa-shopping-cart" /> Add</a>
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
                                <Image src="/images/computer-image.png"  width={192} height={143} priority alt="" />
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
                                <p>by<span>Brother </span></p>
                                <div className="price">
                                <h4>$238.85 <span>$245.8</span></h4>
                                </div>
                                <div className="add_cart">
                                <a href="#"><i className="fa fa-shopping-cart" /> Add</a>
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
                                <Image src="/images/mobile-stand-image.png" width={192} height={143} priority alt="" />
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
                                <p>by<span>Brother </span></p>
                                <div className="price">
                                <h4>$238.85 <span>$245.8</span></h4>
                                </div>
                                <div className="add_cart">
                                <a href="#"><i className="fa fa-shopping-cart" /> Add</a>
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
                                <Image src="/images/dryyer-image.png" width={192} height={143} priority alt="" />
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
                                <p>by<span>Brother </span></p>
                                <div className="price">
                                <h4>$238.85 <span>$245.8</span></h4>
                                </div>
                                <div className="add_cart">
                                <a href="#"><i className="fa fa-shopping-cart" /> Add</a>
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
                                <Image src="/images/printer-image.png"  width={192} height={143} priority alt="" />
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
                                <p>by<span>Brother </span></p>
                                <div className="price">
                                <h4>$238.85 <span>$245.8</span></h4>
                                </div>
                                <div className="add_cart">
                                <a href="#"><i className="fa fa-shopping-cart" /> Add</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </Slider> 
                    </div>
                    </div> 
                </div>
                </div>
            </div>
            </section>

            <section className="product_slider product_categories">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                    <h2 className="heading">Popular Categories</h2>
                </div> 
                </div>
                <div className="row">
                <div className="col-lg-3 col-sm-12 col-md-12 col-12"> 
                    <div className="add_banner">
                    <div className="add_content">
                        <h2>Top Deals on Grocery</h2>
                        <a href="#">See More</a>
                    </div>
                    <Image src="/images/add-image.jpg"  width={345} height={475} priority alt="" />
                    </div>
                </div>
                <div className="col-lg-9 col-sm-12 col-md-12 col-12"> 
                <Slider {...settings04}>
                        <div className="recent-items">
                            <div className="product_item">
                            <div className="top_sale">
                                <a href="#">New</a>
                                <a href="#">Hot</a>
                            </div>
                            <div className="product_image">
                                <Link href="/category"> <Image src="/images/closeup.jpg" width={850} height={521} priority alt="" /></Link>
                            </div>
                            <div className="pro_info">
                                <h1>brother</h1>
                                <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a> </h2> 
                                <div className="rating">
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span><i className="fa fa-star" /> </span>
                                <span className="rating_text"> (90) </span>
                                </div>
                                <div className="price">
                                <h4>$238.85 </h4>
                                </div> 
                                <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                    <span className="title" />
                                </div> 
                                </div> 
                                <h3><span>Sold:</span> 90/120</h3>
                                <div className=" add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</Link>
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
                                <Link href="/category"><Image src="/images/sope.jpg" width={1500} height={852} priority alt="" /></Link>
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
                                <h4>$238.85 </h4>
                                </div> 
                                <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                    <span className="title" />
                                </div> 
                                </div> 
                                <h3><span>Sold:</span> 90/120</h3>
                                <div className=" add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</Link>
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
                                <Link href="/category"> <Image src="/images/super-mater.jpg" width={357} height={500} priority alt="" /></Link>
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
                                <h4>$238.85 </h4>
                                </div> 
                                <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                    <span className="title" />
                                </div> 
                                </div> 
                                <h3><span>Sold:</span> 90/120</h3>
                                <div className=" add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</Link>
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
                                <Link href="/category"><Image src="/images/dhara.jpg" width={1148} height={1500} priority alt="" /></Link>
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
                                <h4>$238.85 </h4>
                                </div> 
                                <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                    <span className="title" />
                                </div> 
                                </div> 
                                <h3><span>Sold:</span> 90/120</h3>
                                <div className=" add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</Link>
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
                                <Link href="/category"><Image src="/images/sope.jpg" width={1500} height={852} priority alt="" /></Link>
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
                                <h4>$238.85 </h4>
                                </div> 
                                <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                    <span className="title" />
                                </div> 
                                </div> 
                                <h3><span>Sold:</span> 90/120</h3>
                                <div className=" add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Slider>
                </div>

                </div>
                <div className="row mt-20">
                <div className="col-lg-3 col-sm-12 col-md-12 col-12"> 
                    <div className="add_banner">
                    <div className="add_content">
                        <h2>Top Deals of Mobiles</h2>
                        <a href="#">See More</a>
                    </div>
                    <Image src="/images/add-mobile.jpg" width={345} height={476} priority alt="" />  
                    </div>
                </div>
                <div className="col-lg-9 col-sm-12 col-md-12 col-12"> 
                <Slider {...settings06}>
                    <div className="recent-items">
                        <div className="product_item">
                        <div className="top_sale">
                            <a href="#">New</a>
                            <a href="#">Hot</a>
                        </div>
                        <div className="product_image">
                            <Link href="/category"><Image src="/images/iphone.jpg" width={210} height={240} priority alt="" /></Link>
                        </div>
                        <div className="pro_info">
                            <h1>brother</h1>
                            <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a> </h2> 
                            <div className="rating">
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</Link>
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
                            <Link href="/category"><Image src="/images/iphone01.jpg" width={1994} height={1729} priority alt="" /></Link>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</Link>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</Link>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                                <Link href="/category"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</Link>
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
                            <a href="#"><Image src="/images/iphone01.jpg" width={1994} height={1729} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Slider>
                    </div> 
               </div>
            </div>
            </section>
            <section className="add_section">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                    <div className="product_add">
                    <a href="#"><Image src="/images/add-banner-03.jpg" width={472} height={273} priority alt="" /></a>
                   
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                    <div className="product_add">
                    <a href="#"><Image src="/images/add-banner-10.jpg" width={472} height={273} priority alt="" /></a>
                    
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                    <div className="product_add">
                    <a href="#"><Image src="/images/add-banner-11.jpg" width={472} height={273} priority alt="" /></a>
                   
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="product_slider product_categories">
            <div className="container"> 
                <div className="row mt-20">
                <div className="col-lg-3 col-sm-12 col-md-12 col-12"> 
                    <div className="add_banner">
                    <div className="add_content">
                        <h2>Top Deals of Fashion</h2>
                        <a href="#">See More</a>
                    </div>
                    <Image src="/images/add-fashion-image.jpg" width={345} height={474} priority alt="" />
                    </div>
                </div>
                <div className="col-lg-9 col-sm-12 col-md-12 col-12">
                <Slider {...settings05}> 
                     
                    <div className="recent-items">
                        <div className="product_item">
                        <div className="top_sale">
                            <a href="#">New</a>
                            <a href="#">Hot</a>
                        </div>
                        <div className="product_image">
                            <a href="#"> <Image src="/images/shirt.jpg" width={186} height={190} priority alt="" /></a>
                        </div>
                        <div className="pro_info">
                            <h1>brother</h1>
                            <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a> </h2> 
                            <div className="rating">
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/tshirt.jpg" width={145} height={198} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"> <Image src="/images/onepices.jpg" width={413} height={550} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/kurti.jpg" width={127} height={193} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/shirt.jpg" width={186} height={190} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    </Slider> 
                </div>
                </div>
                <div className="row mt-20">
                <div className="col-lg-3 col-sm-12 col-md-12 col-12"> 
                    <div className="add_banner">
                    <div className="add_content">
                        <h2 className="text-white">To Deals on Electronics</h2>
                        <a href="#">See More</a>
                    </div>
                    <Image src="/images/electronics-add.jpg" width={345} height={476} priority alt="" />
                    </div>
                </div>
                <div className="col-lg-9 col-sm-12 col-md-12 col-12"> 
                <Slider {...settings06}> 
                    <div className="recent-items">
                        <div className="product_item">
                        <div className="top_sale">
                            <a href="#">New</a>
                            <a href="#">Hot</a>
                        </div>
                        <div className="product_image">
                            <a href="#"> <Image src="/images/desktop.jpg" width={243} height={207} priority alt="" /></a>
                        </div>
                        <div className="pro_info">
                            <h1>brother</h1>
                            <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a> </h2> 
                            <div className="rating">
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/cpu.jpg" width={192} height={143} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"> <Image src="/images/laptop.jpg" width={244} height={207} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/mouse.jpg" width={159} height={175} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/desktop.jpg" width={243} height={207} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Slider> 
                </div>
                </div>
            </div>
            </section>
            <section className="add_section">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                    <div className="product_add">
                    <a href="#"><Image src="/images/add-banner-03.jpg" width={472} height={273} priority alt="" /></a>
                    
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                    <div className="product_add">
                    <a href="#"><Image src="/images/add-banner-04.jpg" width={472} height={273} priority alt="" /></a>
           
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                    <div className="product_add">
                    <a href="#"><Image src="/images/add-banner-05.jpg" width={472} height={273} priority alt="" /></a>
                </div>
                </div>
                </div>
            </div>
            </section>
            <section className="product_slider product_categories">
            <div className="container"> 
                <div className="row mt-20">
                <div className="col-lg-3 col-sm-12 col-md-12 col-12"> 
                    <div className="add_banner">
                    <div className="add_content">
                        <h2>Top Deals of Home</h2>
                        <a href="#">See More</a>
                    </div>
                    <Image src="/images/add-banner-06.jpg" width={345} height={476} priority alt="" />
                    </div>
                </div>
                <div className="col-lg-9 col-sm-12 col-md-12 col-12"> 
                <Slider {...settings07}> 
                    <div className="recent-items">
                        <div className="product_item">
                        <div className="top_sale">
                            <a href="#">New</a>
                            <a href="#">Hot</a>
                        </div>
                        <div className="product_image">
                            <a href="#"> <Image src="/images/sofa.jpg" width={294} height={172} priority alt="" /></a>
                        </div>
                        <div className="pro_info">
                            <h1>brother</h1>
                            <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a> </h2> 
                            <div className="rating">
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/table.jpg" width={207} height={184} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"> <Image src="/images/small-sofa.jpg" width={181} height={172} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/chair.jpg" width={143} height={182} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/table.jpg" width={207} height={184} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Slider> 
                </div>
                </div>
                <div className="row mt-20">
                <div className="col-lg-3 col-sm-12 col-md-12 col-12"> 
                    <div className="add_banner">
                    <div className="add_content">
                        <h2 className="text-white">To Deals on Appliances</h2>
                        <a href="#">See More</a>
                    </div>
                    <Image src="/images/add-banner-07.jpg" width={345} height={476} priority alt="" />
                    </div>
                </div>
                <div className="col-lg-9 col-sm-12 col-md-12 col-12"> 
                    <Slider {...settings08}> 
                    <div className="recent-items">
                        <div className="product_item">
                        <div className="top_sale">
                            <a href="#">New</a>
                            <a href="#">Hot</a>
                        </div>
                        <div className="product_image">
                            <a href="#"> <Image src="/images/washing-machine.jpg" width={198} height={198} priority alt="" /></a>
                        </div>
                        <div className="pro_info">
                            <h1>brother</h1>
                            <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a> </h2> 
                            <div className="rating">
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/firige.jpg" width={178} height={283} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"> <Image src="/images/owen.jpg" width={225} height={225} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/press.jpg" width={239} height={211} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/firige.jpg" width={178} height={283} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Slider> 
                </div>
                </div>
            </div>
            </section>
            <section className="add_section">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                    <div className="product_add">
                    <a href="#"><Image src="/images/add-banner-03.jpg" width={472} height={273} priority alt="" /></a>
              
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                    <div className="product_add">
                    <a href="#"><Image src="/images/add-banner-04.jpg" width={472} height={273} priority alt="" /></a>
                  
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                    <div className="product_add">
                    <a href="#"><Image src="/images/add-banner-05.jpg" width={472} height={273} priority alt="" /></a>
                   
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="product_slider product_categories">
            <div className="container">  
                <div className="row mt-20">
                <div className="col-lg-3 col-sm-12 col-md-12 col-12"> 
                    <div className="add_banner">
                    <div className="add_content">
                        <h2>Top Ofers</h2>
                        <a href="#">See More</a>
                    </div>
                    <Image src="/images/add-banner-08.jpg" width={345} height={474} priority alt="" />
                    </div>
                </div>
                <div className="col-lg-9 col-sm-12 col-md-12 col-12"> 
                <Slider {...settings09}> 
                    <div className="recent-items">
                        <div className="product_item">
                        <div className="top_sale">
                            <a href="#">New</a>
                            <a href="#">Hot</a>
                        </div>
                        <div className="product_image">
                            <a href="#"> <Image src="/images/tourch.jpg" width={198} height={200} priority alt="" /></a>
                        </div>
                        <div className="pro_info">
                            <h1>brother</h1>
                            <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a> </h2> 
                            <div className="rating">
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png"  width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/cover.jpg" width={19} height={19} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"> <Image src="/images/music.jpg" width={196} height={200} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/indection.jpg" width={161} height={200} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/cover.jpg" width={171} height={200} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Slider> 
                </div>
                </div>
                <div className="row mt-20">
                <div className="col-lg-3 col-sm-12 col-md-12 col-12"> 
                    <div className="add_banner">
                    <div className="add_content">
                        <h2 className=" ">Top Deals of Beauty, Toys <br /> and more</h2>
                        <a href="#">See More</a>
                    </div>
                    <Image src="/images/add-banner-09.jpg" width={345} height={476} priority alt="" />
                    </div>
                </div>
                <div className="col-lg-9 col-sm-12 col-md-12 col-12"> 
                <Slider {...settings010}> 
                    <div className="recent-items">
                        <div className="product_item">
                        <div className="top_sale">
                            <a href="#">New</a>
                            <a href="#">Hot</a>
                        </div>
                        <div className="product_image">
                            <a href="#"> <Image src="/images/gitar.jpg" width={139} height={364} priority alt="" /></a>
                        </div>
                        <div className="pro_info">
                            <h1>brother</h1>
                            <h2><a href="#">brother DCP-B7500D Multi- function Monochrome...</a> </h2> 
                            <div className="rating">
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span><i className="fa fa-star" /> </span>
                            <span className="rating_text"> (90) </span>
                            </div>
                            <div className="price">
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/helmat.jpg" width={225} height={225} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"> <Image src="/images/toise.jpg" width={173} height={173} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/cream.jpg"  width={225} height={225} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
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
                            <a href="#"><Image src="/images/firige.jpg" width={178} height={283} priority alt="" /></a>
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
                            <h4>$238.85 </h4>
                            </div> 
                            <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{maxWidth: '60%'}}>
                                <span className="title" />
                            </div> 
                            </div> 
                            <h3><span>Sold:</span> 90/120</h3>
                            <div className=" add_cart">
                            <a href="#"><Image src="/images/cart-icon.png" width={19} height={19} priority alt="" />  Add to Cart</a>
                            </div>
                        </div>
                        </div>
                    </div> 
                    </Slider> 
                </div>
                </div>
            </div>
            </section>
            <section className="deal_section">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7 col-sm-7 col-md-7 col-7">
                    <h2 className="heading">Deals Of The Day</h2>
                </div> 
                <div className="col-lg-5 col-sm-5 col-md-5 col-5 text-right">
                    <a className="all_deal" href="#">All Deals</a>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-3">
                    <div className="countdown">
                    <div className="timer">
                        <div>
                        <span className="days text-orange" id="day" /> 
                        <div className="smalltext">Days</div>
                        </div>
                        <div>
                        <span className="hours text-orange" id="hour" /> 
                        <div className="smalltext">Hours</div>
                        </div>
                        <div>
                        <span className="minutes text-orange" id="minute" /> 
                        <div className="smalltext">Mins</div>
                        </div>
                        <div>
                        <span className="seconds text-orange" id="second" /> 
                        <div className="smalltext">Sec</div>
                        </div>
                        <p className="time-up" />
                    </div>
                    </div>
                    <div className="deal_detals product_item"> 
                    <Image src="/images/deal.jpg" width={700} height={466} priority alt="" /> 
                    <div className="pro_info">  
                        <h2>brother DCP-B7500D Multi- function Monochrome...</h2> 
                        <div className="rating">
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span className="rating_text"> (90) </span>
                        </div>
                        <p>by<span>Brother </span></p>
                        <div className="price">
                        <h4>$238.85 <span>$245.8</span></h4>
                        </div>
                        <div className="add_cart">
                        <a href="#"><i className="fa fa-shopping-cart" /> Add</a>
                        </div>
                    </div>
                    </div>       
                </div>
                <div className="col-lg-3">
                    <div className="countdown">
                    <div className="timer">
                        <div>
                        <span className="days text-orange" id="day" /> 
                        <div className="smalltext">Days</div>
                        </div>
                        <div>
                        <span className="hours text-orange" id="hour" /> 
                        <div className="smalltext">Hours</div>
                        </div>
                        <div>
                        <span className="minutes text-orange" id="minute" /> 
                        <div className="smalltext">Mins</div>
                        </div>
                        <div>
                        <span className="seconds text-orange" id="second" /> 
                        <div className="smalltext">Sec</div>
                        </div>
                        <p id="time-up" />
                    </div>
                    </div>
                    <div className="deal_detals product_item"> 
                    <Image src="/images/deal-image.jpg" width={1200} height={674} priority alt="" /> 
                    <div className="pro_info">  
                        <h2>brother DCP-B7500D Multi- function Monochrome...</h2> 
                        <div className="rating">
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span className="rating_text"> (90) </span>
                        </div>
                        <p>by<span>Brother </span></p>
                        <div className="price">
                        <h4>$238.85 <span>$245.8</span></h4>
                        </div>
                        <div className="add_cart">
                        <a href="#"><i className="fa fa-shopping-cart" /> Add</a>
                        </div>
                    </div>
                    </div>       
                </div>
                <div className="col-lg-3">
                    <div className="countdown">
                    <div className="timer">
                        <div>
                        <span className="days text-orange" id="day" /> 
                        <div className="smalltext">Days</div>
                        </div>
                        <div>
                        <span className="hours text-orange" id="hour" /> 
                        <div className="smalltext">Hours</div>
                        </div>
                        <div>
                        <span className="minutes text-orange" id="minute" /> 
                        <div className="smalltext">Mins</div>
                        </div>
                        <div>
                        <span className="seconds text-orange" id="second" /> 
                        <div className="smalltext">Sec</div>
                        </div>
                        <p id="time-up" />
                    </div>
                    </div>
                    <div className="deal_detals product_item"> 
                    <Image src="/images/deal-image-01.jpg" width={1024} height={512} priority alt="" /> 
                    <div className="pro_info">  
                        <h2>brother DCP-B7500D Multi- function Monochrome...</h2> 
                        <div className="rating">
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span className="rating_text"> (90) </span>
                        </div>
                        <p>by<span>Brother </span></p>
                        <div className="price">
                        <h4>$238.85 <span>$245.8</span></h4>
                        </div>
                        <div className="add_cart">
                        <a href="#"><i className="fa fa-shopping-cart" /> Add</a>
                        </div>
                    </div>
                    </div>       
                </div>
                <div className="col-lg-3">
                    <div className="countdown">
                    <div className="timer">
                        <div>
                        <span className="days text-orange day" id /> 
                        <div className="smalltext">Days</div>
                        </div>
                        <div>
                        <span className="hours text-orange hour" id /> 
                        <div className="smalltext">Hours</div>
                        </div>
                        <div>
                        <span className="minutes text-orange minute" id /> 
                        <div className="smalltext">Mins</div>
                        </div>
                        <div>
                        <span className="seconds text-orange second" id /> 
                        <div className="smalltext">Sec</div>
                        </div>
                        <p className="time-up" />
                    </div>
                    </div>
                    <div className="deal_detals product_item"> 
                    <Image src="/images/deal-image-02.jpg" width={2399} height={1199} priority alt="" /> 
                    <div className="pro_info">  
                        <h2>brother DCP-B7500D Multi- function Monochrome...</h2> 
                        <div className="rating">
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span><i className="fa fa-star" /> </span>
                        <span className="rating_text"> (90) </span>
                        </div>
                        <p>by<span>Brother </span></p>
                        <div className="price">
                        <h4>$238.85 <span>$245.8</span></h4>
                        </div>
                        <div className="add_cart">
                        <a href="#"><i className="fa fa-shopping-cart" /> Add</a>
                        </div>
                    </div>
                    </div>       
                </div>
                </div>
            </div>
            </section>
            <section className="our_list_section">
            <div className="container">  
                <div className="row">
                <div className="col-lg-3 col-sm-4 col-md-3 col-12">
                    <div className="our_list">
                    <h1>Top Selling</h1>
                    <div className="main_list">
                        <div className="our_list_image">
                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                        </div> 
                        <div className="deal_detals product_item">  
                        <div className="pro_info">  
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
                            <h4>$238.85 <span>$245.8</span></h4>
                            </div> 
                        </div>
                        </div> 
                    </div>
                    <div className="main_list">
                        <div className="our_list_image">
                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                        </div> 
                        <div className="deal_detals product_item">  
                        <div className="pro_info">  
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
                            <h4>$238.85 <span>$245.8</span></h4>
                            </div> 
                        </div>
                        </div> 
                    </div>
                    <div className="main_list">
                        <div className="our_list_image">
                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                        </div> 
                        <div className="deal_detals product_item">  
                        <div className="pro_info">  
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
                            <h4>$238.85 <span>$245.8</span></h4>
                            </div> 
                        </div>
                        </div> 
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-md-3 col-12">
                    <div className="our_list">
                    <h1>Trending Products</h1>
                    <div className="main_list">
                        <div className="our_list_image">
                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                        </div> 
                        <div className="deal_detals product_item">  
                        <div className="pro_info">  
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
                            <h4>$238.85 <span>$245.8</span></h4>
                            </div> 
                        </div>
                        </div> 
                    </div>
                    <div className="main_list">
                        <div className="our_list_image">
                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                        </div> 
                        <div className="deal_detals product_item">  
                        <div className="pro_info">  
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
                            <h4>$238.85 <span>$245.8</span></h4>
                            </div> 
                        </div>
                        </div> 
                    </div>
                    <div className="main_list">
                        <div className="our_list_image">
                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                        </div> 
                        <div className="deal_detals product_item">  
                        <div className="pro_info">  
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
                            <h4>$238.85 <span>$245.8</span></h4>
                            </div> 
                        </div>
                        </div> 
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-md-3 col-12">
                    <div className="our_list">
                    <h1>Recently added</h1>
                    <div className="main_list">
                        <div className="our_list_image">
                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                        </div> 
                        <div className="deal_detals product_item">  
                        <div className="pro_info">  
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
                            <h4>$238.85 <span>$245.8</span></h4>
                            </div> 
                        </div>
                        </div> 
                    </div>
                    <div className="main_list">
                        <div className="our_list_image">
                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                        </div> 
                        <div className="deal_detals product_item">  
                        <div className="pro_info">  
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
                            <h4>$238.85 <span>$245.8</span></h4>
                            </div> 
                        </div>
                        </div> 
                    </div>
                    <div className="main_list">
                        <div className="our_list_image">
                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                        </div> 
                        <div className="deal_detals product_item">  
                        <div className="pro_info">  
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
                            <h4>$238.85 <span>$245.8</span></h4>
                            </div> 
                        </div>
                        </div> 
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-md-3 col-12">
                    <div className="our_list">
                    <h1>Top Rated</h1>
                    <div className="main_list">
                        <div className="our_list_image">
                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                        </div> 
                        <div className="deal_detals product_item">  
                        <div className="pro_info">  
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
                            <h4>$238.85 <span>$245.8</span></h4>
                            </div> 
                        </div>
                        </div> 
                    </div>
                    <div className="main_list">
                        <div className="our_list_image">
                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                        </div> 
                        <div className="deal_detals product_item">  
                        <div className="pro_info">  
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
                            <h4>$238.85 <span>$245.8</span></h4>
                            </div> 
                        </div>
                        </div> 
                    </div>
                    <div className="main_list">
                        <div className="our_list_image">
                        <Image src="/images/printer-image.png" width={192} height={143} priority alt="" />
                        </div> 
                        <div className="deal_detals product_item">  
                        <div className="pro_info">  
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
                            <h4>$238.85 <span>$245.8</span></h4>
                            </div> 
                        </div>
                        </div> 
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="sub_section">
            <div className="container">  
                <div className="row">
                <div className="col-lg-6 col-sm-4 col-md-3 col-12">
                    <div className="sub_content">
                    <h2>Stay home &amp; get your daily needs from our shop</h2>
                    <p>Start your daily shopping with <a href="#">View Cart 24</a> </p>
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
            <section className="we_provide_section">
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
                    <Image src="/images/return-icon.jpg" width={620} height={399} priority alt="" />
                    <h2>Easy Returns</h2>
                    <p>Easy Exchange Policies </p>
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
    </div>
    )
}  