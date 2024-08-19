import React from "react";
import '../src/style/style.css';
import { BiLogoGithub} from "react-icons/bi";
import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer=() =>{
    return(
        <div className="Footer">
            <div className="container text-start p-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 align-items-start">
                    <div className="col">
                        <strong>John Doe</strong>
                        <address>40 Rue Laure Diebold <br></br>
                        69009 Lyon, France <br></br>
                        <a href="tel:0620304050" className="text-decoration-none" style={{color:'#444'}}>Téléphone : 06 20 30 40 50</a></address>
                        <div className="Logo">
                            <a href="/Github" target="_blank" className="LinkIcon p-2">
                                <BiLogoGithub className="Icon"/>
                            </a>
                            <a href="https://x.com/" target="blank" className="LinkIcon p-2">
                                <FaTwitterSquare className="Icon"/>
                            </a>
                            <a href="https://www.linkedin.com/" target="blank" className="LinkIcon p-2">
                                <FaLinkedin className="Icon"/>
                            </a>
                        </div>
                    </div>
                    <nav className="col">
                        <div>
                            <strong className="p-2">Liens utiles</strong>
                            <ul className="navbar-nav col">
                                <li className="nav-item">
                                    <a className="Link text-decoration-none p-0 ps-4" aria-current="page" href="/">Accueil</a></li>
                                <li className="nav-item">
                                    <a className="Link text-decoration-none p-0 ps-4" aria-current="page" href="/#about">A propos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="Link text-decoration-none p-0 ps-4" aria-current="page" href="/Service">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="Link text-decoration-none p-0 ps-4" aria-current="page" href="/Contact">Me contacter</a>
                                </li>
                                <li className="nav-item">
                                    <a className="Link text-decoration-none p-0 ps-4" aria-current="page" href="/LegalNotice">Mentions légales</a>
                                </li>
                            </ul>
                        </div>
                    </nav>       
                    <nav className="col">
                        <div>
                            <strong className="p-2">Mes dernières réalisations</strong>
                            <ul className="navbar-nav col">
                                <li className="nav-item">
                                    <a className="Link text-decoration-none p-0 ps-4" aria-current="page" href="/realization/#freshfood">Fresh food</a>
                                </li>
                                <li className="nav-item">
                                    <a className="Link text-decoration-none p-0 ps-4" aria-current="page" href="/realization/#akira">Restaurant Akira</a>
                                </li>
                                <li className="nav-item">
                                    <a className="Link text-decoration-none p-0 ps-4" aria-current="page" href="/realization/#bienetre">Espace bien-être</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav className="col">
                        <div>
                            <strong className="p-2">Mes derniers articles</strong>
                            <ul className="navbar-nav col">
                                <li className="nav-item">
                                    <a className="Link text-decoration-none p-0 ps-4" aria-current="page" href="/blog/#html">Coder son site en HTML/CSS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="Link text-decoration-none p-0 ps-4" aria-current="page" href="/blog/#sell">Vendre ses produits sur le web</a>
                                </li>
                                <li className="nav-item">
                                    <a className="Link text-decoration-none p-0 ps-4" aria-current="page" href="/blog/#google">Se positionner sur Google</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="text-center text-light bg-dark m-0">
                <p className="p-2">© Designed by John Doe</p>
            </div>
        </div>
    )
};

export default Footer;