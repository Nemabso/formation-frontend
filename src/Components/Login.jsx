import React, { useState, useContext } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import { addItem } from "../services/LocaleStorage";
const baseURL = "http://localhost:5000";


export default function Login({ setUserID }) {
    const [isAuthenticated, setIsAuthenticated, userBack, setUserBack] = useContext(AuthContext);
    // const [userBack, setUserBack] = useState("");
    console.log("isAuthenti login :", isAuthenticated, "userBack :", userBack);
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
            await axios({ method: "post", baseURL: baseURL, url: "/login", data: { email: user.email, password: user.password } })
                .then((res) => {
                    // console.log("res data :", res.data);
                    addItem("miniblogToken", res.data.token);
                    addItem("userName", res.data.name);
                    addItem("userId", res.data.id);
                    setUserID(res.data.id);
                    setUserBack(res.data.user);
                    setIsAuthenticated(true);
                    if (res.data.role === "admin") {
                        return navigate("/home/admin")
                    }
                    if (res.data.role === "formateur") {
                        return navigate("/home/profa")
                    }
                })
            // console.log("result Login Page", result);
            // setIsAuthenticated(result)
        } catch ({ response }) {
            console.log("here is response !", response.data)
            setShowModal(true);
            setMassege(response.data.message);
        }
    };

    // useEffect(() => {
    //     axios.get("http://localhost:5000")
    // }, [])

    return (
        <div className="page-login img-fluid">
            <div className="login">
                {/* <h1 className="login-heading">Login</h1> */}
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
