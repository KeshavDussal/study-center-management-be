const express = require('express');
const { createDesk, updateDesk, deleteDesk, getAllDesks, assignDesk, unassignDesk, getAssignedDesksReport } = require('../controllers/deskController');
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/', authenticate, createDesk);
router.put('/:id', authenticate, updateDesk);
router.delete('/:id', authenticate, deleteDesk);
router.get('/', authenticate, getAllDesks); // 👈 View all desks
router.post('/assign', authenticate, assignDesk);
router.post('/unassign', authenticate, unassignDesk);
router.get('/assigned-desks', authenticate, getAssignedDesksReport);

module.exports = router;
