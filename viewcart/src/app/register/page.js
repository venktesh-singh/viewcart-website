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

            <section class="inr-wrap bg_drkGray">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <div class="breadcrumb-heading">
                                <nav aria-label="breadcrumb">
                                    <ol class="brdcrm breadcrumb">
                                        <li class="breadcrumb-item">
                                            <a href="#"><Image src="/images/sign-up-arrow.png" width={175} height={189} priority alt="" /> Signup</a>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="form_section">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-md-12 col-sm-12 col-12 bg_gray">
                            <div class="row">
                                <div class="col-lg-5 col-md-5 col-sm-5 col-12">
                                    <div class="register_details">
                                        <h2>Looks like you are new here!</h2>
                                        <p>Sign up with your mobile number to get started</p>

                                        <div class="register_image">
                                            <Image src="/images/register-image.png" width={250} height={173} priority alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-7 col-md-7 col-sm-7 col-12">
                                    <div class="form_details">
                                        <form>
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div class="form-group">
                                                        <label>Username</label>
                                                        <input id="text" type="text" class="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div class="form-group">
                                                        <label>Email Id / Mobile Number</label>
                                                        <input id="text" type="text" class="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div class="form-group">
                                                        <label>Enter OTP</label>
                                                        <input id="text" type="text" class="form-control" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                        <label class="custom-control-label" for="customCheck2">Keep me signed Up</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div class="trem_condition_link">
                                                        <div class="theme-button">
                                                            <a href="#" class="default-btn">Sign up</a>
                                                        </div>
                                                    </div>

                                                    <div class="button_login">
                                                        <p>Existing User? <Link href="/login">Login</Link></p>
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