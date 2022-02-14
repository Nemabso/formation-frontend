import React from 'react';
// import FileViewer from "react-file-viewer";


export default function SalleB() {
    return (
        <>
            <h1 className='mt-3 ms-3'>Salle B</h1>
            <div className='d-flex flex-wrap justify-content-evenly align-items-start mt-3'>
                {/* {favorites.map((item, index) => (
                    <div key={index} className="card" style={{ width: "18rem" }}>
                        {item.images.map((elem, j) => {
                            if (typeof elem === "string" && `${elem.split(".").slice(-1)}` === "docx") {
                                return (
                                    <FileViewer className="embed-files" filePath={`http://localhost:5000${elem}`}
                                        title={j} key={j} fileType={'docx'} />)
                            }
                            if (`${elem.split(".").slice(-1)}` === "mp4" || `${elem.split(".").slice(-1)}` === "mov") {
                                return (
                                    <video className='embed-files' controls key={j}>
                                        <source src={`http://localhost:5000${elem}`} />
                                    </video>)
                            }
                            else {
                                return (
                                    <embed className='embed-files' src={`http://localhost:5000${elem}`} key={j} />)
                            }
                        })}
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <a href="###" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                ))} */}
            </div>
        </>
    );
}
