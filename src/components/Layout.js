import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '../style.css';
import Header from './Header';

import Footer from './Footer';
import Navigation from './Navigation';



let pagHeading = "Twitter Clone";
let footerTxt = "Twitter Clone 2019. Develop by ReactJS & PHP Back-End";



class Layout extends Component {



    render() {

        return (
            <Router>
                <div>

                    <Header headerTxt={pagHeading} />

                    <div className="container">

                        <div className="row">


                            <div className="col-md-10">


                                <Navigation />


                            </div>


                            <div className="col-md-4">

                            </div>

                        </div>


                    </div>

                    <Footer footerTxt={footerTxt} />

                </div>

            </Router>
        );
    }
}

export default Layout;