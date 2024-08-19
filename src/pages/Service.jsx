import '../style/style.css';
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { FaSearchDollar, FaDesktop } from "react-icons/fa";


const Service=() =>{
    return(
        <div>
            <a className="text-decoration-none" style={{color:'white'}} href='/Service'>
                <button type="button" className="TopOfPage btn btn-primary float-end position-fixed m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                    </svg>
                </button>
            </a>
            <header className='position-relative'>
                <Header />
            </header>
            <main className='ServicePage'>
                <div className="TitleService text-center">
                    <img src="../img/banner.jpg" alt=""></img>
                    <div className='m-5'>
                        <h1 className="text-uppercase">Mon offre de services</h1>
                        <p>Voici les prestations sur lesquelles je peux intervenir.</p>
                        <hr className='border border-primary border-3 opacity-100 d-flex mx-auto' style={{width: "200px"}}/>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 text-center justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                    <div className="CardService col card m-2 p-3" style={{width: "100%"}}>
                        <FaDesktop className="Icon mx-auto m-3"/>
                        <div className="card-body p-0">
                            <h2 className="card-title text-uppercase">UX design</h2>
                            <p className="card-text">L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur.
                            Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex ">
                    <div className="CardService col card m-2 p-3" style={{width: "100%"}}>
                        <BsFileEarmarkCodeFill className="Icon mx-auto m-3"/>
                        <div className="card-body p-0">
                            <h2 className="card-title text-uppercase">Développement web</h2>
                            <p className="card-text">Le <strong>développement de sites web</strong> repose sur l'utilisation des langages 
                            HTML, CSS, JavaScript et PHP.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
                    <div className="CardService col card m-2 p-3" id="bienetre" style={{width: "100%"}}>
                        <FaSearchDollar className="Icon mx-auto m-3"/>
                        <div class="card-body p-0">
                            <h2 className="card-title text-uppercase">Référencement</h2>
                            <p className="card-text">Le <strong>référencement naturel d'un site,</strong> aussi appelé  SEO, consiste à mettre
                                des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.</p>
                        </div>
                    </div>
                </div>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
};

export default Service;