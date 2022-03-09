import React, { useState } from "react";
import Footer from "../components/Footer";
import "./nousContact.css";
// import backimage from "./imag/troiswall.jpg";
import sidimag from "./imag/design.svg";

export default function NousContacter() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, message, company, phone);

    };

    return (
        <>
            <div className="nouscontactform">
                <h1 className="p-3 text-light">Nous contacter</h1>
                <div className="container row m-auto justify-content-evenly p-3 pb-5">
                    <div className="contactform col-md-6">
                        <form className="p-2" onSubmit={handleSubmit} encType="multipart/form-data">
                            <div>
                                <label htmlFor="name" className="form-label">Prènom et Nom</label>
                                <input type="text" id="name" name="name" className="form-control" required onChange={(e) => setName(e.target.value)} placeholder="Prènom et Nom *" />
                            </div>
                            <div>
                                <label htmlFor="company" className="form-label">société</label>
                                <input type="text" id="company" name="company" className="form-control" onChange={(e) => setCompany(e.target.value)} placeholder="société" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" id="phone" name="phone" className="form-control" onChange={(e) => setPhone(e.target.value)} placeholder="téléphone" />
                            </div>
                            <div className="email-content">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" name="email" className="form-control" required onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email *" />
                            </div>
                            <div>
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea id="message" name="message" className="form-control" onChange={(e) => setMessage(e.target.value)} placeholder="message *"
                                    required />
                            </div>
                            <button className="btn btn-primary mt-2" type="submit">Envoyer</button>
                        </form>
                    </div>
                    <div className="col-md-6 m-auto">
                        <img src={sidimag} className="img-fluid" alt="box letter" />
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    );


}
