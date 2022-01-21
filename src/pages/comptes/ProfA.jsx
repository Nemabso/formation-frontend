import axios from 'axios';
import React, { useState } from 'react';
import FilesCard from '../../components/FilesCard';
import "./profA.css";
// const baseURL = "http://localhost:5000";


export default function ProfA({ userID }) {
    const userName = localStorage.getItem("userName");
    const userId = userID ? userID : localStorage.getItem("userId");
    const [cours, setCours] = useState([]);
    const [image, setImage] = useState([])
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const coursHandle = (e) => { setCours(e.target.files) }
    // console.log("image :", image);
    console.log("userId", userId);

    const onsubmit = async (e) => {
        e.preventDefault();
        // console.log("cours", cours, "description", description, "title", title);

        const formData = new FormData();
        formData.append("description", description);
        formData.append("title", title);
        // cours.forEach((elem) => { formData.append("cours", elem) });
        formData.append("userId", userId);
        for (let i = 0; i < cours.length; i++) {
            formData.append("cours", cours[i])
        }
        await axios.post("http://localhost:5000/upload", formData)
            .then((res) => {
                console.log("successfully file post", res);
                setImage(res.data)
            })
            .catch((err) => console.log("error with file post", err))
    }
    return (
        <>
            {/* <div className='text-center'> */}
            <h1 className='text-center mt-4'>Bienvenue {userName}</h1>
            {/* </div> */}
            <div className='addfiles'>
                <form onSubmit={onsubmit} encType="multipart/form-data" >
                    <div className="mb-3">
                        <label htmlFor="titleform" className="form-label">Title</label>
                        <input onChange={(e) => setTitle(e.target.value)} className="form-control" id="titleform" placeholder="Title" ></input>
                    </div>
                    <div className="mb-3 form-group files">
                        <input onChange={coursHandle} name='cours' type="file" className="form-control" multiple required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="validationTextarea" className="form-label">Description</label>
                        <textarea onChange={(e) => setDescription(e.target.value)} className="form-control" id="validationTextarea" placeholder="Description" ></textarea>
                    </div>

                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit" >Ajouter</button>
                        <button className="btn btn-warning ms-3" type="reset" >Reset</button>
                    </div>
                </form>
            </div>
            <FilesCard file={image} description={description} title={title} />
        </>
    )
}
