import React, { useState } from 'react';
import { FaStar } from "react-icons/fa"

export default function StarRating({ rating, setRating }) {

    const [hoveer, setHoveer] = useState(null);
    // console.log("rating", rating);
    return (
        <div>
            <p>Évaluez-nous!</p>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <input className='d-none' type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                        <FaStar size={30} className='star'
                            color={ratingValue <= (hoveer || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHoveer(ratingValue)}
                            onMouseLeave={() => setHoveer(null)}
                            style={{ cursor: " pointer", transition: "color 200ms" }} />
                    </label>)
            })}

        </div>
    );
}
