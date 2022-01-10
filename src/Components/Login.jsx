import React, { useState, useContext, useEffect } from "react";
import Modal from "react-modal";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Auth from "../context/Auth";
import { logedin } from "../services/AuthApi";


export default function Login() {
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    console.log("isAuthenti login", isAuthenticated);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [massege, setMassege] = useState("")
    const [user, setUser] = useState({ email: "", password: "" })

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setUser({ ...user, [name]: value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await logedin(user);
            console.log("result", result);
            setIsAuthenticated(result)
            navigate(`/home`)

        } catch ({ response }) {
            console.log("here is response !", response.data)
            setShowModal(true);
            setMassege(response.data.message);
        }
        // axios({ method: "post", baseURL: baseURL, url: "/login", data: {} }).then((res) => {
        //     console.log("login result", res);
        //     navigate("/home/login/admin");
        // }).catch((err) => {
        //     console.log("il y a une erreur !", err.response);
        // });
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home")
        }
    }, [navigate, isAuthenticated])

    return (
        <div className="page-login img-fluid">
            <div className="login">
                <h1 className="login-heading">Login</h1>
                <Modal className="modal-signup rounded-pill bg-light col-5" ariaHideApp={false} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
                    <h1>{massege}</h1>
                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                </Modal>
                <form onSubmit={onSubmit}>
                    <input className="login-input" required autoComplete="off" name="email" placeholder="Email ..." type="email" onChange={handleChange} />
                    <input className="login-input" required autoComplete="off" name="password" placeholder="Password ..." type="password" onChange={handleChange} />
                    <button type="submit" className="submit-button">Login</button>
                </form>
            </div>
        </div>

    );
}
