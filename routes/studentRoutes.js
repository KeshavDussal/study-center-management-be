const express = require('express');
const {
    createStudent,
    updateStudent,
    deleteStudent,
    getStudent,
    getAllStudents
} = require('../controllers/studentController');

const router = express.Router();

router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);
router.get('/:id', getStudent);
router.get('/', getAllStudents);

module.exports = router;
