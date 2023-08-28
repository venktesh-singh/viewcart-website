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

            <section className="inr-wrap bg_drkGray">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="breadcrumb-heading">
                                <nav aria-label="breadcrumb">
                                    <ol className="brdcrm breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#"><Image src="/images/sign-up-arrow.png" width={175} height={189} priority alt="" /> Login</a>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="form_section">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12 bg_gray">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-5 col-12">
                                    <div className="register_details">
                                        <h2>Looks like you are new here!</h2>
                                        <p>Sign up with your mobile number to get started</p>

                                        <div className="register_image">
                                            <Image src="/images/register-image.png" width={250} height={173} priority alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-12">
                                    <div className="form_details">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Email Id / Mobile Number</label>
                                                        <input id="text" type="text" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="form-group">
                                                        <label>Enter Password</label>
                                                        <input id="password" type="password" className="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                        <label className="custom-control-label" for="customCheck2">Keep me signed in</label>
                                                    </div>
                                                    <div className="forget_">
                                                        <a href="#">Forgot Password?</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div className="trem_condition_link">
                                                        <div className="theme-button">
                                                            <a href="#" className="default-btn">Sign up</a>
                                                            <span>or</span>
                                                            <a className="req_otp" href="#">Request OTP</a>
                                                        </div>
                                                    </div>

                                                    <div className="button_login">
                                                        <p>Don’t have an account? <Link href="/register">Signup</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        <Footer/>
    </>
}      