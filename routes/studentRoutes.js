const express = require('express');
const {
    createStudent,
    updateStudent,
    deleteStudent,
    getStudent,
    getAllStudents
} = require('../controllers/studentController');
const { authenticate } = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/', authenticate, createStudent);
router.put('/:id', authenticate, updateStudent);
router.delete('/:id', authenticate, deleteStudent);
router.get('/:id', authenticate, getStudent);
router.get('/', authenticate, getAllStudents);

module.exports = router;
