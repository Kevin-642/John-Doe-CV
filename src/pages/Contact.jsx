import '../style/style.css';
import React, {useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import {EMAIL} from '../config';


const Contact =() =>{
    const [formState, setFormState] = useState({
        name: '',
        mail: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormState({
            ...formState,
            [id]: value
        });
    };

    const validateForm = () => {
        const {name, mail, phone, subject, message} = formState;
        if (!name || !mail || !phone || !subject || !message) {
            setError('Tous les champs doivent être remplis');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setError("Votre message a bien été envoyé");
            const {name, mail, phone, subject, message} = formState;
            window.location.href = `mailto:${EMAIL},subject=[${subject}] - ${name}&body=${message} (Phone: ${phone}, Email: ${mail})`;

            setFormState({
                name: '',
                mail: '',
                phone: '',
                subject: '',
                message: ''
            });
        }
    };

    return(
        <div>
            <a className="text-decoration-none" style={{color:'white'}} href='/Contact'>
                <button type="button" className="TopOfPage btn btn-primary float-end position-fixed m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                    </svg>
                </button>
            </a>
            <header className='position-relative'>
                <Header />
            </header>
            <main className='ContactPage'>
                <div className='MainContact'>
                    <div className='Blue  p-5'>
                        <div className='card p-5'>
                            <div className="TitleContact">
                                <div className='text-center m-5'>
                                    <h1 className="text-uppercase">Me contacter</h1>
                                    <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                                    <hr className='border border-primary border-3 opacity-100 d-flex mx-auto' style={{width: "200px"}}/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <h2>Formulaire de contact</h2>
                                    <hr className='border border-primary opacity-100'/>
                                    <div className='Form p-3'>
                                        <form id='contact' onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <input type="text" className="form-control" id="name" value={formState.name} onChange={handleChange} placeholder="Votre nom"></input>
                                            </div>
                                            <div className="mb-3">
                                                <input type="email" className="form-control" id="mail" value={formState.mail} onChange={handleChange} placeholder="Votre adresse email"></input>
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" className="form-control" id="phone" value={formState.phone} onChange={handleChange} placeholder="Votre numéro de téléphone"></input>
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" className="form-control" id="subject" value={formState.subject} onChange={handleChange} placeholder="Sujet"></input>
                                            </div>
                                            <div className="mb-3">
                                                <textarea className="form-control" id="message" rows="6" value={formState.message} onChange={handleChange} placeholder='Votre message'></textarea>
                                            </div>
                                            <div id='error'  style={{color:'red'}}>{error}</div>
                                            <div className="text-center">
                                                <button className="btn btn-primary" type="submit">Envoyer</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className='col'>
                                    <h2>Mes coordonnées</h2>
                                    <hr className='border border-primary opacity-100'/>
                                    <div className='p-3'>
                                        <address>
                                            <FaMapMarkerAlt /> 40 Rue Laure Diebold, 69009 Lyon, France <br></br>
                                            <MdOutlinePhoneAndroid /> <a href="tel:0620304050" className="text-decoration-none text-dark" style={{color:'#444'}}>06 20 30 40 50</a>
                                        </address>
                                        <div className='MapResponsive'>
                                            <iframe title="My adress" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6405110671153!2d4.799131049352103!3d45.77839428613809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1717752323864!5m2!1sfr!2sfr"
                                             width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
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

export default Contact;