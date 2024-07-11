const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapasync = require("../utils/wrapasync");

const Review = require("../models/review.js");
const Listing = require("../models/listings");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");
//reviews
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapasync(reviewController.createReview)
);
//Delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapasync(reviewController.destroyReview)
);

module.exports = router;
