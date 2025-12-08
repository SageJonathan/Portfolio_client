import { useViewObserver } from "../../utils/viewObserver";
import "./Reviews.scss";
import reviewsData from "../../data/reviews.json";

function Reviews() {
  const [headerRef, isVisible] = useViewObserver(0.1);

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`reviews__star ${
          index < count ? "reviews__star--filled" : ""
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="reviews">
      <h2
        ref={headerRef}
        className={`reviews__header ${isVisible ? "animate" : ""}`}
      >
        What Our Clients Say
      </h2>

      <p className="reviews__subtitle">
        Don't just take our word for it. Here's what our clients have to say
        about working with us.
      </p>

      <div className="reviews__container">
        {reviewsData.map((review, index) => (
          <div
            key={index}
            className="reviews__card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="reviews__stars">
              {renderStars(review.starCount)}
            </div>
            <p className="reviews__text">"{review.review}"</p>
            <div className="reviews__author">
              <h4 className="reviews__name">{review.name}</h4>
              <p className="reviews__position">{review.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
