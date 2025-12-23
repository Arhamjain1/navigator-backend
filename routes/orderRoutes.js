const express = require('express');
const router = express.Router();
const {
  createOrder,
  createGuestOrder,
  getMyOrders,
  getOrderById,
  getGuestOrderById,
  getAllOrders,
  updateOrderStatus,
  getOrderStats,
  deleteOrder
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/auth');

// Guest checkout route - no auth required
router.post('/guest', createGuestOrder);
router.get('/guest/:id', getGuestOrderById);

router.route('/')
  .post(protect, createOrder)
  .get(protect, getMyOrders);

router.get('/all', protect, admin, getAllOrders);
router.get('/stats', protect, admin, getOrderStats);

router.route('/:id')
  .get(protect, getOrderById)
  .delete(protect, admin, deleteOrder);

router.put('/:id/status', protect, admin, updateOrderStatus);

module.exports = router;
