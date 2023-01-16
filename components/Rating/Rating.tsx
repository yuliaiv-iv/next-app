import React, { useEffect, useState, KeyboardEvent } from "react";
import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";

import cn from "classnames";
import Star from "../../assets/Icons/Star";

function Rating({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element {
  const [ratingArray, setRatingArray] = useState<Array<JSX.Element>>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    buildRating(rating);
  }, [rating]);

  const buildRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((_, index: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeRating(index + 1)}
        >
          <Star
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGSVGElement>) =>
              isEditable && handleSpacePress(index + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    buildRating(i);
  };

  const changeRating = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const handleSpacePress = (i: number, e: KeyboardEvent<SVGSVGElement>) => {
    if (e.code !== "Space" || !setRating) return;
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((rating, index) => (
        <span key={index}>{rating}</span>
      ))}
    </div>
  );
}

export default Rating;
