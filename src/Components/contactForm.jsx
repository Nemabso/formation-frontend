import React, { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, message, company, phone);

        // const isEmail = () => {
        //     let isMail = document.getElementById("not-mail");
        //     let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //     if (email.match(regex)) {
        //         isMail.style.display = "none";
        //         return true;
        //     } else {
        //         isMail.style.display = "block";
        //         isMail.style.animation = "dongle 1s";
        //         setTimeout(() => { isMail.style.animation = "none" }, 1000);
        //         return false;
        //     }
        // };

        // if (name && isEmail() && message) {
        //     const templateId = "template_aofmtvBG";
        //     nameS.classList.remove("red");
        //     emailS.classList.remove("red");
        //     messageS.classList.remove("red");
        //     sendFeedback(templateId, { name, company, phone, email, message });
        // } else {
        //     formMess.innerHTML = "Merci de remplir correctement les champs requis *";
        //     formMess.style.background = "rgb(253, 87, 87)";
        //     formMess.style.opacity = "1";
        //     if (!name) { nameS.classList.add("error") }
        //     if (!email) { emailS.classList.add("error") }
        //     if (!message) { messageS.classList.add("error") }
        // }
    };

    // const sendFeedback = (templateId, variables) => {
    //     let formMess = document.querySelector(".form-message");

    //     window.emailjs.send("gmail", templateId, variables)
    //         .then((res) => {
    //             formMess.innerHTML = "Message envoyé ! Nous vous recontacterons dès que possible. Merci !";
    //             formMess.style.background = "#00c1ec";
    //             formMess.style.opacity = "1";
    //             document.getElementById("name").classList.remove("error");
    //             document.getElementById("email").classList.remove("error");
    //             document.getElementById("message").classList.remove("error");
    //             setName("");
    //             setCompany("");
    //             setPhone("");
    //             setEmail("");
    //             setMessage("");
    //             setTimeout(() => { formMess.style.opacity = "0" }, 3000);
    //         })
    //         .catch((err) => (formMess.innerHTML = "Une erreur s'est produite, veuillez réessayer."));
    // };

    return (
        <form className="contact-form" onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-content p-2" style={{ width: "35vw" }}>
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
            </div>
            <div className="form-message"></div>
        </form>
    )
};
