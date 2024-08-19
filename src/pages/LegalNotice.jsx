import '../style/style.css';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const LegalNotice=() =>{
    return(
        <div>
            <a className="text-decoration-none" style={{color:'white'}} href='/LegalNotice'>
                <button type="button" className="TopOfPage btn btn-primary float-end position-fixed m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                    </svg>
                </button>
            </a>
            <header className='position-relative'>
                <Header />
            </header>
            <main className='LegalNoticePage'>
                <div>
                    <div className="TitleContact">
                        <div className='text-center m-5'>
                            <h1 className="text-uppercase">Mentions légales</h1>
                            <hr className='border border-primary border-3 opacity-100 d-flex mx-auto' style={{width: "200px"}}/>
                        </div>
                    </div>
                    <div className="accordion m-5" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Editeur du site
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">
                                    <h3>John Doe</h3>
                                    <address>
                                        <FaMapMarkerAlt /> 40 Rue Laure Diebold<br></br>
                                        69009 Lyon, France<br></br>
                                        <MdOutlinePhoneAndroid /> <a href="tel:0620304050" className="text-decoration-none text-dark">06 20 30 40 50</a><br></br>
                                        <IoIosMail /> <a href='mailto:john.doe@gmail.com'>john.doe@gmail.com</a>
                                    </address>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Hébergeur
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div class="accordion-body">
                                    <h3>Always Data</h3>
                                    <address>
                                        91 rue du Faubourg Saint Honoré <br></br>
                                        75008 Paris
                                    </address>
                                    <TbWorld /> <a href='www.alwaysdata.com' target='_blank'>www.alwaysdata.com</a>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Crédits
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div class="accordion-body">
                                    <h3>Crédits</h3>
                                    <p>Site développé par John Doe, étudiant du CEF.</p>
                                    <p>Les images libres de droit sont issues du site 
                                        <a href='https://pixabay.com/fr/' className='text-decoration-none' target='blank'> Pixabay</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
};

export default LegalNotice;