import React from "react";
// import { Card } from 'react-bootstrap';
import Cards from "../cards";
// import { Rating } from "@mui/material";
import review from "../reviews.json";
import ReviewCards from "./reviewCards";

const Reviews = () => {
  return (
    <div>
      <div className="Itemss">
        {review &&
          review.map((review) => {
            return (
              <>
                <ReviewCards
                  key={review.id}
                  name={review.name}
                  rate={review.rating}
                  about={review.review}
                />
              </>
            );
          })}
      </div>
      
    </div>
  );
};

export default Reviews;
