import React from 'react'

const Footer = (props) => {
    return (
        <div>
            <footer className="py-5 bg-dark">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-facebook-f fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <p className="m-0 text-center text-white">Copyright &copy; {props.footerTxt}. </p>
                        </div>

                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer
