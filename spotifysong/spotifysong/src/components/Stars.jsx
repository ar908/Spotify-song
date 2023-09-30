import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function Stars() {
    const [rating, setRating] = useState(0); // initial rating value

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate);
        // Some logic
    };
    return (
        <div>
            <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={20}
                label
                transition
                fillColor="orange"
                emptyColor="gray"
                className="foo"
            />

            {rating}
        </div>
    );
}
