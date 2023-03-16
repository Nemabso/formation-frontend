import React, { useState, useContext } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
const baseURL = "http://localhost:5000";

export default function Login({ setUserID }) {
    const [isAuthenticated, setIsAuthenticated, role, setRole] = useContext(AuthContext);

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [massege, setMassege] = useState("")
    const [user, setUser] = useState({ email: "", password: "" })

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setUser({ ...user, [name]: value })
    }

    function addItem(sessionName, newItem) {
        return window.sessionStorage.setItem(sessionName, newItem)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios({ method: "post", baseURL: baseURL, url: "/user/login", data: { email: user.email, password: user.password } })
                .then((res) => {
                    const { user, token } = res.data;
                    setRole(user.role);
                    setUserID(user._id);
                    addItem("miniblogToken", token);
                    addItem("userName", user.lastName);
                    addItem("userId", user._id);
                    setIsAuthenticated(true);
                    if (user.role === "admin") {
                        return navigate("/admin")
                    }
                    if (user.role === "formateur") {
                        return navigate("/profa")
                    }
                })
        } catch ({ response }) {
            setShowModal(true);
            setMassege(response.data.message);
        }
    };


    return (
        <div className="page-login ">
            <div className="login">
                <Modal className="modal-signup rounded-pill bg-light col-5"
                    ariaHideApp={false} isOpen={showModal} onRequestClose={() => setShowModal(false)}>
                    <h1>{massege}</h1>
                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                </Modal>
                <form onSubmit={onSubmit}>
                    <input className="login-input" required autoComplete="off" name="email" placeholder="Email ..." type="email" onChange={handleChange} />
                    <input className="login-input" required autoComplete="off" name="password" placeholder="Password ..." type="password" onChange={handleChange} />
                    <button type="submit" className="submit-button">Login</button>
                </form>
            </div>
            <p className="d-none" >{isAuthenticated && role}</p>
        </div>

    );
}
