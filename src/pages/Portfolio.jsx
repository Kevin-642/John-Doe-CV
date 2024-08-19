import '../style/style.css';
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Portfolio=() =>{
    return(
        <div>
            <a className="text-decoration-none" style={{color:'white'}} href='/Portfolio'>
                <button type="button" className="TopOfPage btn btn-primary float-end position-fixed m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                    </svg>
                </button>
            </a>
            <header className='position-relative'>
                <Header />
            </header>
            <main className='PortfolioPage'>
                <div>
                    <div className="TitleRea text-center">
                        <img src="../img/banner.jpg" alt=""></img>
                        <div className='m-5'>
                            <h1 className="text-uppercase">Portfolio</h1>
                            <p>Voici quelques-unes de mes réalisations.</p>
                            <hr className='border border-primary border-3 opacity-100 d-flex mx-auto' style={{width: "200px"}}/>
                        </div>

                    </div>
                    <div className="Portfolio m-5 row text-center align-items-stretch justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
                            <div className="card m-3 p-0" id="freshfood" style={{width: "100%"}}>
                                <img src="../img/portfolio/fresh-food.jpg" className="card-img-top" alt="Fresh food"></img>
                                <div className="card-body p-0">
                                    <h2 className="card-title">Fresh food</h2>
                                    <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
                                    <a href="Voir" className="btn btn-outline-primary m-3">Voir</a>
                                    <div className="card-footer">
                                    <p className="align-middle m-0">Site réalisé avec PHP et MySQL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
                            <div className="card m-3 p-0" id="akira" style={{width: "100%"}}>
                                <img src="../img/portfolio/restaurant-japonais.jpg" className="card-img-top" alt="Restaurant Akira"></img>
                                <div className="card-body p-0">
                                    <h2 className="card-title">Restaurant Akira</h2>
                                    <p className="card-text">Réalisation d'un site vitrine.</p>
                                    <a href="Voir" className="btn btn-outline-primary m-3">Voir</a>
                                    <div className="card-footer">
                                        <p className="align-middle m-0">Site réalisé avec WordPress</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
                            <div className="card m-3 p-0" id="bienetre" style={{width: "100%"}}>
                                <img src="../img/portfolio/espace-bien-etre.jpg" className="card-img-top" alt="Espace bien-être"></img>
                                <div className="card-body p-0">
                                    <h2 className="card-title">Espace bien-être</h2>
                                    <p className="card-text">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
                                    <a href="Voir" className="btn btn-outline-primary m-3">Voir</a>
                                    <div className="card-footer">
                                        <p className="align-middle m-0">Site réalisé en HTML/CSS</p>
                                    </div>
                                </div>
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

export default Portfolio;