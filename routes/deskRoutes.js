const express = require('express');
const { createDesk, updateDesk, deleteDesk, getAllDesks } = require('../controllers/deskController');

const router = express.Router();

router.post('/', createDesk);
router.put('/:id', updateDesk);
router.delete('/:id', deleteDesk);
router.get('/', getAllDesks); // 👈 View all desks

module.exports = router;
