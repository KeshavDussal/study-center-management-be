const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/adminController');
const { authenticate } = require('../middleware/authMiddleware');

router.get('/profile', authenticate, getProfile);
router.put('/profile', authenticate, updateProfile);

module.exports = router;
