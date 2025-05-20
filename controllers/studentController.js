const studentService = require('../services/studentService');

// Add student
exports.createStudent = async (req, res) => {
    try {
        const student = await studentService.addStudent(req.body);
        res.status(201).json({ message: 'Student added successfully', student });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update student
exports.updateStudent = async (req, res) => {
    try {
        const student = await studentService.updateStudent(req.params.id, req.body);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json({ message: 'Student updated successfully', student });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete student
exports.deleteStudent = async (req, res) => {
    try {
        const student = await studentService.deleteStudent(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// View student details by ID
exports.getStudent = async (req, res) => {
    try {
        const student = await studentService.getStudentById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await studentService.getAllStudents();
        if (students.length === 0) {
            return res.status(404).json({ message: 'No students found.' });
        }
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
