const express = require('express');
const { createDesk, updateDesk, deleteDesk, getAllDesks, assignDesk, unassignDesk } = require('../controllers/deskController');

const router = express.Router();

router.post('/', createDesk);
router.put('/:id', updateDesk);
router.delete('/:id', deleteDesk);
router.get('/', getAllDesks); // 👈 View all desks
router.post('/assign', assignDesk);
router.post('/unassign', unassignDesk);

module.exports = router;
