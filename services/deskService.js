const Desk = require('../models/Desk.js');
const Student = require('../models/student');

exports.addDesk = async (deskData) => {
    const existing = await Desk.findOne({ deskNumber: deskData.deskNumber });
    if (existing) throw new Error('Desk with this number already exists.');

    const newDesk = new Desk(deskData);
    return await newDesk.save();
};

exports.updateDesk = async (id, updatedData) => {
    const updatedDesk = await Desk.findByIdAndUpdate(id, updatedData, {
        new: true, // return updated document
        runValidators: true,
    });
    if (!updatedDesk) {
        throw new Error('Desk not found');
    }
    return updatedDesk;
};

// Delete desk by MongoDB ObjectId
exports.deleteDesk = async (deskId) => {
    const deletedDesk = await Desk.findByIdAndDelete(deskId);
    if (!deletedDesk) {
        throw new Error('Desk not found');
    }
    return deletedDesk;
};

// Get all desks
exports.getAllDesks = async () => {
    return await Desk.find();
};

// Assign desk to student
exports.assignDesk = async (studentId, deskId) => {
    const student = await Student.findById(studentId);
    if (!student) throw new Error('Student not found');

    const desk = await Desk.findById(deskId);
    if (!desk) throw new Error('Desk not found');

    if (desk.status === 'occupied') {
        throw new Error('Desk already occupied');
    }

    student.assignedDesk = deskId;
    student.deskAssignedAt = new Date();   // Set current date when assigning
    await student.save();

    desk.status = 'occupied';
    await desk.save();

    return { student, desk };
};

// Unassign desk from student
exports.unassignDesk = async (studentId) => {
    const student = await Student.findById(studentId);
    if (!student) throw new Error('Student not found');

    if (!student.assignedDesk) {
        throw new Error('Student does not have an assigned desk');
    }

    const deskId = student.assignedDesk;
    const desk = await Desk.findById(deskId);
    if (!desk) throw new Error('Assigned desk not found');

    student.assignedDesk = null;
    await student.save();

    desk.status = 'available';
    await desk.save();

    return { studentId, deskId };
};

exports.getAssignedDesksBetweenDates = async (fromDate, toDate) => {
    const from = new Date(fromDate);
    const to = new Date(toDate);

    // Find all students assigned desks between from and to dates (inclusive)
    const assignedStudents = await Student.find({
        assignedDesk: { $ne: null },
        deskAssignedAt: { $gte: from, $lte: to }
    }).populate('assignedDesk');

    return assignedStudents;
};

