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

// export const Rating = forwardRef(({ isEditable = false, error, rating, setRating, tabIndex, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
// 	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
// 	const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

// 	useEffect(() => {
// 		constructRating(rating);
// 	}, [rating, tabIndex]);

// 	const computeFocus = (r: number, i: number): number => {
// 		if (!isEditable) {
// 			return -1;
// 		}
// 		if (!rating && i == 0) {
// 			return tabIndex ?? 0;
// 		}
// 		if (r == i + 1) {
// 			return tabIndex ?? 0;
// 		}
// 		return -1;
// 	};

// 	const constructRating = (currentRating: number) => {
// 		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
// 			return (
// 				<span
// 					className={cn(styles.star, {
// 						[styles.filled]: i < currentRating,
// 						[styles.editable]: isEditable
// 					})}
// 					onMouseEnter={() => changeDispay(i + 1)}
// 					onMouseLeave={() => changeDispay(rating)}
// 					onClick={() => onClick(i + 1)}
// 					tabIndex={computeFocus(rating, i)}
// 					onKeyDown={handleKey}
// 					ref={r => ratingArrayRef.current?.push(r)}
// 					role={isEditable ? 'slider' : ''}
// 					aria-invalid={error ? true : false}
// 					aria-valuenow={rating}
// 					aria-valuemax={5}
// 					aria-label={isEditable ? 'Укажите рейтинг' : ('рейтинг' + rating)}
// 					aria-valuemin={1}
// 				>
// 					<StarIcon />
// 				</span>

// 			);
// 		});
// 		setRatingArray(updatedArray);
// 	};

// 	const changeDispay = (i: number) => {
// 		if (!isEditable) {
// 			return;
// 		}
// 		constructRating(i);
// 	};

// 	const onClick = (i: number) => {
// 		if (!isEditable || !setRating) {
// 			return;
// 		}
// 		setRating(i);
// 	};

// 	const handleKey = (e: KeyboardEvent) => {
// 		if (!isEditable || !setRating) {
// 			return;
// 		}
// 		if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
// 			if (!rating) {
// 				setRating(1);
// 			} else {
// 				e.preventDefault();
// 				setRating(rating < 5 ? rating + 1 : 5);
// 			}
// 			ratingArrayRef.current[rating]?.focus();
// 		}
// 		if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
// 			e.preventDefault();
// 			setRating(rating > 1 ? rating - 1 : 1);
// 			ratingArrayRef.current[rating - 2]?.focus();
// 		}
// 	};

// 	return (
// 		<div {...props} ref={ref} className={cn(styles.ratingWrapper, {
// 			[styles.error]: error
// 		})}>
// 			{ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
// 			{error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
// 		</div>
// 	);
// });
