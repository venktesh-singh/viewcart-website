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

            <div className="status_box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="status_bar">
                                <div className="content_bar">
                                    <p>
                                        <a href="#"><Image src="images/back-icon.png" alt="" /> Back to Dashboard</a> <span>Your profile completion status</span>
                                    </p>
                                </div>
                                <div className="progressBar">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="max-width: 60%;"></div>
                                        <span className="title">45%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="review_search">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-5 d-flex align-items">
                            <div className="review">
                                <h2>Payment Overview</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-7">
                            <div className="searchBox">
                                <input type="search" className="form-control" placeholder="Search Order Settlements" />
                                <a href="#"><Image src="images/search-icon.png" alt="" /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="payment_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="upcoming_payment">
                                <h2><i className="fa fa-clock-o"></i> Upcoming Payments <span>Updated at 03:32 PM</span></h2>
                                <div className="main_tabs">
                                    <div className="date_payment">
                                        <p className="active">21st Apr <span>₹2.04 k</span></p>
                                        <p>24th Apr <span>₹4.91 k</span></p>
                                        <p>26th Apr <span>₹1.17 k</span></p>
                                        <p>Rest <span>₹1.04 k</span></p>
                                        <p>Total <span>₹9.15 k</span></p>
                                    </div>
                                </div>
                                <div className="prepaid">
                                    <h2>Payment Amount: ₹ 2.90 K <span>(No Payment is scheduled for Prepaid).</span></h2>
                                    <p>Payment will be initiated by 5 PM (21st Apr).</p>
                                </div>

                                <div className="payment_details">
                                    <form className="form-cart">
                                        <div className="db-2-main-com-table">
                                            <div className="table-responsive">
                                                <div className="table" id="results">
                                                    <div className="theader">
                                                        <div className="table_header">Payment Type</div>
                                                        <div className="table_header width30">Details</div>
                                                        <div className="table_header">Prepaid (₹)</div>
                                                        <div className="table_header">Postpaid (₹)</div>
                                                        <div className="table_header">Total (₹)</div>
                                                    </div>

                                                    <div className="table_row">
                                                        <div className="table_small">
                                                            <div className="table_cell">Payment Type</div>
                                                            <div className="table_cell pro-img-table">
                                                                <div className="cartclose-btn"><i className="fa fa-info"></i> Orders</div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Details</div>
                                                            <div className="table_cell">Sales and Returns</div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Prepaid (₹)</div>
                                                            <div className="table_cell text_blue">-861.65</div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Postpaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                <div className="qty-btn">
                                                                    2.98 K
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Total (₹)</div>
                                                            <div className="table_cell text_blue">2.12 K</div>
                                                        </div>
                                                    </div>

                                                    <div className="table_row">
                                                        <div className="table_small">
                                                            <div className="table_cell">Payment Type</div>
                                                            <div className="table_cell pro-img-table">
                                                                <div className="cartclose-btn"><i className="fa fa-info"></i> Protection Fund</div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Details</div>
                                                            <div className="table_cell">
                                                                SPF Non <br />
                                                                Order SPF
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Prepaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                0 <br />
                                                                0
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Postpaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                <div className="qty-btn">
                                                                    0 <br />
                                                                    0
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Total (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                0 <br />
                                                                0
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="table_row">
                                                        <div className="table_small">
                                                            <div className="table_cell">Payment Type</div>
                                                            <div className="table_cell pro-img-table">
                                                                <div className="cartclose-btn"><i className="fa fa-info"></i> MP Fee Rebate</div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Details</div>
                                                            <div className="table_cell">MP Fee Rebate</div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Prepaid (₹)</div>
                                                            <div className="table_cell text_blue">0</div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Postpaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                <div className="qty-btn">
                                                                    0
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Total (₹)</div>
                                                            <div className="table_cell text_blue">0</div>
                                                        </div>
                                                    </div>

                                                    <div className="table_row">
                                                        <div className="table_small">
                                                            <div className="table_cell">Payment Type</div>
                                                            <div className="table_cell pro-img-table">
                                                                <div className="cartclose-btn"><i className="fa fa-info"></i> Services</div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Details</div>
                                                            <div className="table_cell">
                                                                Storage Fee <br />
                                                                Recall Fee<br />
                                                                Ads Fee
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Prepaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                0 <br />
                                                                0 <br />
                                                                0
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Postpaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                <div className="qty-btn">
                                                                    0 <br />
                                                                    0 <br />
                                                                    0
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Total (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                0 <br />
                                                                0 <br />
                                                                0
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="table_row">
                                                        <div className="table_small">
                                                            <div className="table_cell">Payment Type</div>
                                                            <div className="table_cell pro-img-table">
                                                                <div className="cartclose-btn"><i className="fa fa-info"></i> Tax Settlement</div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Details</div>
                                                            <div className="table_cell">
                                                                TCS Recovery<br />
                                                                TSD Claims
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Prepaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                0 <br />
                                                                0
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Postpaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                <div className="qty-btn">
                                                                    0 <br />
                                                                    0
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Total (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                0 <br />
                                                                0
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="table_row">
                                                        <div className="table_small">
                                                            <div className="table_cell">Payment Type</div>
                                                            <div className="table_cell pro-img-table">
                                                                <div className="cartclose-btn"><i className="fa fa-info"></i> Total</div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Details</div>
                                                            <div className="table_cell"></div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Prepaid (₹)</div>
                                                            <div className="table_cell text_blue">-861.65</div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Postpaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                <div className="qty-btn">
                                                                    2.90 K
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Total (₹)</div>
                                                            <div className="table_cell text_blue">2.04 K</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="upcoming_payment">
                                <h2><i className="fa fa-check"></i> Previous Payments</h2>
                                <div className="main_tabs">
                                    <div className="date_payment">
                                        <p className="active">21st Apr <span>₹2.04 k</span></p>
                                        <p>24th Apr <span>₹4.91 k</span></p>
                                        <p>26th Apr <span>₹1.17 k</span></p>
                                        <p>Rest <span>₹1.04 k</span></p>
                                        <p>Total <span>₹9.15 k</span></p>
                                    </div>
                                </div>
                                <div className="prepaid">
                                    <p><b>Payment is completed.</b> <br /></p>
                                </div>
                                <div className="payment_details">
                                    <form className="form-cart">
                                        <div className="db-2-main-com-table">
                                            <div className="table-responsive">
                                                <div className="table" id="results">
                                                    <div className="theader">
                                                        <div className="table_header">Payment Type</div>
                                                        <div className="table_header width30">Details</div>
                                                        <div className="table_header">Prepaid (₹)</div>
                                                        <div className="table_header">Postpaid (₹)</div>
                                                        <div className="table_header">Total (₹)</div>
                                                    </div>

                                                    <div className="table_row">
                                                        <div className="table_small">
                                                            <div className="table_cell">Payment Type</div>
                                                            <div className="table_cell pro-img-table">
                                                                <div className="cartclose-btn"><i className="fa fa-info"></i> Orders</div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Details</div>
                                                            <div className="table_cell">Sales and Returns</div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Prepaid (₹)</div>
                                                            <div className="table_cell text_blue">-861.65</div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Postpaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                <div className="qty-btn">
                                                                    2.98 K
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Total (₹)</div>
                                                            <div className="table_cell text_blue">2.12 K</div>
                                                        </div>
                                                    </div>

                                                    <div className="table_row">
                                                        <div className="table_small">
                                                            <div className="table_cell">Payment Type</div>
                                                            <div className="table_cell pro-img-table">
                                                                <div className="cartclose-btn"><i className="fa fa-info"></i> Protection Fund</div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Details</div>
                                                            <div className="table_cell">
                                                                SPF Non <br />
                                                                Order SPF
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Prepaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                0 <br />
                                                                0
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Postpaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                <div className="qty-btn">
                                                                    0 <br />
                                                                    0
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Total (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                0 <br />
                                                                0
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="table_row">
                                                        <div className="table_small">
                                                            <div className="table_cell">Payment Type</div>
                                                            <div className="table_cell pro-img-table">
                                                                <div className="cartclose-btn"><i className="fa fa-info"></i> MP Fee Rebate</div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Details</div>
                                                            <div className="table_cell">MP Fee Rebate</div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Prepaid (₹)</div>
                                                            <div className="table_cell text_blue">0</div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Postpaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                <div className="qty-btn">
                                                                    0
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Total (₹)</div>
                                                            <div className="table_cell text_blue">0</div>
                                                        </div>
                                                    </div>

                                                    <div className="table_row">
                                                        <div className="table_small">
                                                            <div className="table_cell">Payment Type</div>
                                                            <div className="table_cell pro-img-table">
                                                                <div className="cartclose-btn"><i className="fa fa-info"></i> Services</div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Details</div>
                                                            <div className="table_cell">
                                                                Storage Fee <br />
                                                                Recall Fee<br />
                                                                Ads Fee
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Prepaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                0 <br />
                                                                0 <br />
                                                                0
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Postpaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                <div className="qty-btn">
                                                                    0 <br />
                                                                    0 <br />
                                                                    0
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Total (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                0 <br />
                                                                0 <br />
                                                                0
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="table_row">
                                                        <div className="table_small">
                                                            <div className="table_cell">Payment Type</div>
                                                            <div className="table_cell pro-img-table">
                                                                <div className="cartclose-btn"><i className="fa fa-info"></i> Tax Settlement</div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Details</div>
                                                            <div className="table_cell">
                                                                TCS Recovery<br />
                                                                TSD Claims
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Prepaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                0 <br />
                                                                0
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Postpaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                <div className="qty-btn">
                                                                    0 <br />
                                                                    0
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Total (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                0 <br />
                                                                0
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="table_row">
                                                        <div className="table_small">
                                                            <div className="table_cell">Payment Type</div>
                                                            <div className="table_cell pro-img-table">
                                                                <div className="cartclose-btn"><i className="fa fa-info"></i> Total</div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Details</div>
                                                            <div className="table_cell"></div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Prepaid (₹)</div>
                                                            <div className="table_cell text_blue">-861.65</div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Postpaid (₹)</div>
                                                            <div className="table_cell text_blue">
                                                                <div className="qty-btn">
                                                                    2.90 K
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table_small">
                                                            <div className="table_cell">Total (₹)</div>
                                                            <div className="table_cell text_blue">2.04 K</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="important_info">
                                <h2>Important Information</h2>

                                <ul>
                                    <li>If the payment is negetive (-), wait will it turns positive to get the next payment. <a href="#">Know More</a></li>
                                    <li>If the payment is negetive (-), wait will it turns positive to get the next payment. <a href="#">Know More</a></li>
                                    <li>If the payment is negetive (-), wait will it turns positive to get the next payment. <a href="#">Know More</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        <Footer/>
    </>
}      