import React from 'react'

export default function FilesCard({ file, description, title }) {
    // console.log("file de cards", file, description, title);
    return (
        <div className='d-flex container p-4'>
            {!file.length ? null : file.map((image, index) => (
                <div className="card" style={{ width: "18rem" }} key={index} >
                    <img src={`http://localhost:5000/${image.filename}`} className="card-img-top" alt="files des cours" />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description} </p>
                        <a href="###" className="btn btn-primary">Go </a>
                    </div>
                </div>
            ))
            }
        </div>
    )
}
