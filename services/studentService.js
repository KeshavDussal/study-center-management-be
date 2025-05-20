const Student = require('../models/student');

// Add student
exports.addStudent = async (studentData) => {
    return await Student.create(studentData);
};

// Update student
exports.updateStudent = async (id, studentData) => {
    return await Student.findByIdAndUpdate(id, studentData, { new: true });
};

// Delete student
exports.deleteStudent = async (id) => {
    return await Student.findByIdAndDelete(id);
};

// Get single student by ID
exports.getStudentById = async (id) => {
    return await Student.findById(id).populate('assignedDesk');
};

// Get all students
exports.getAllStudents = async () => {
    return await Student.find().populate('assignedDesk');
};
