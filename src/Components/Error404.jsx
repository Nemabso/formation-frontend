import React from "react";
// import { Button } from "react-bootstrap";
// import Spinner from 'react-bootstrap/Spinner'

export default function Error404() {

    // const [spin, setSpin] = useState(true);

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

            <h1>La Page que vous cherchez n'existe pas ! 🥺</h1>
            <br />
            <a href="/"><b> Retournez sur la page home !</b> </a>
        </div>
    );
}
