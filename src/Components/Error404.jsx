import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Error404() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/home");
        }, 3000)
    });
    return (
        <div className="text-center mt-5">
            <h1>La Page que vous cherchez n'existe pas ! 🥺</h1>
        </div>
    );
}
