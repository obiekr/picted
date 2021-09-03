import React from 'react';
import { Container } from 'react-bootstrap';
import "./Footer.css"

export default function Footer(){
    return(
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div className="col-4 text-center">
                        <div className="container">
                        <h4 className="footer-title">Picted</h4>
                        <ul className="ms-0 ps-0">
                            <li className="my-3"><a href="/" className="link-item">Home</a></li>
                            <li className="my-3"><a href="/article" className="link-item">Article List</a></li>
                            <li className="my-3"><a href="/about" className="link-item">About Us</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-4 text-center">
                        <h4 className="footer-title">Social Media</h4>
                        <ul className="mx-0 px-0">
                            <div className="row d-flex justify-content-center">
                                <div className="col-1">
                                <li className="mx-2"><a href="#" className="p-3 social-links"><i class="fa fa-google"></i></a></li>
                                </div>
                                <div className="col-1">
                                <li className="col-1 mx-2"><a href="#" className="p-3 social-links"><i class="fa fa-instagram"></i></a></li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}