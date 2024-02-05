import { Rating } from '@mui/material';
import React from 'react'
// import verifed from"../../assert/verified.svg"
import VerifiedIcon from '@mui/icons-material/Verified';
import "./reviews.css";
function ReviewCards (props) {
    return (
        <>
        <div className="reviews-container">
          <div className="review-cards">
          <div className="review-rating">
          <Rating name="read-only" value={props.rate} readOnly />
          </div>
          {/* <div className="product-img"> */}
            <div className="cards-content">
              <div className="user-name">{props.name}<VerifiedIcon /> </div>
              
              <p className='about-review'>{props.about}</p>
             
            </div>
            
          </div>
          {/* </div> */}
        </div>
        </>
      );
}

export default ReviewCards;
