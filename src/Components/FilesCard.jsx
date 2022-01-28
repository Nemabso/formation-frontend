import React from 'react'
import FileViewer from "react-file-viewer";
import "./fileCard.css"

export default function FilesCard({ file }) {
    // console.log("file de cards", file, description, title);
    // file.map(elem => console.log("elem => :::", elem))
    // const dataFile = file.map((elem) =>{
    //     description: elem.description,
    //     title : elem.title,
    //     images : elem.images.map(el => el)
    // })
    // var opencard = document.getElementById("opencards");
    var element = document.documentElement;
    const openCard = () => {
        if (element.requestFullscreen) {
            return element.requestFullscreen()
        }
    }

    const text = "/public/files/Examen_final._Dossier_1_Alter_égo_+_B11643193275850.docx"
    const sp = text.split(".").slice(-1);
    console.log("split", sp);
    const customStyle = {
        content: {
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            flexDirection: "row",
            flexWrap: "wrap",
        }
    }
    return (
        <div className='d-flex' style={customStyle.content}>
            {!file.length ? null : file.map(({ description, images, title }, index) => (
                <div className="card col-sm-6 col-md-3 col-xl-2 " style={{ width: "14rem" }} key={index} >
                    {/* <embed src={`http://localhost:5000/${el.images.map(el => el)}`} className="card-img-top" alt="files des cours" /> */}
                    {images.map((elem, j) =>
                        elem.split(".").slice(-1) == "docx" ? (
                            <FileViewer className="embed-files" filePath={`http://localhost:5000${elem}`}
                                title={j} key={j} fileType={'docx'} />
                        )
                            :
                            (
                                <embed onClick={openCard} className='embed-files' src={`http://localhost:5000${elem}`} key={j} />
                            )

                    )}
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description} </p>
                    </div>
                    <div className='d-flex justify-content-evenly p-2'>
                        <button href="###" className="btn btn-danger">Supprimer </button>
                        <button href="###" className="btn btn-info">Partager </button>
                    </div>
                </div>
            ))
            }
        </div>
    )
}
