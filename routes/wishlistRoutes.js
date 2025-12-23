const express = require('express');
const router = express.Router();
const {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  checkWishlist
} = require('../controllers/wishlistController');
const { protect } = require('../middleware/auth');

// All routes require authentication
router.use(protect);

router.route('/')
  .get(getWishlist)
  .delete(clearWishlist);

router.route('/:productId')
  .post(addToWishlist)
  .delete(removeFromWishlist);

router.get('/check/:productId', checkWishlist);

module.exports = router;
