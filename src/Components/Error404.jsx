import React from "react";
import logoSite from "../assets/logoSite.jpeg";
// import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import Spinner from 'react-bootstrap/Spinner'

export default function Error404() {

    // const navigate = useNavigate();
    // const [spin, setSpin] = useState(true);
    // useEffect(() => {
    //     if (condition) {

    //     }
    //     setTimeout(() => {
    //         navigate("/")
    //     }, 3000)
    // }, []);


    return (
        <div className="text-center mt-5">
            {/* {spin && setTimeout(() => {
                <Button variant="warning" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="l"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            }, 3000, setSpin(false))} */}

            <h1>La Page que vous cherchez n'existe pas ! </h1>
            <br />
            <a href="/"><b>Retourner à l'accueil</b></a>
            <div>
                <img src={logoSite} width={200} height={200} title="IDOINE FORMATION" alt="logo site IDOINE" />
            </div>
        </div>
    );
}
