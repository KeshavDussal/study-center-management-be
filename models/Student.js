const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    qualification: String,
    assignedDesk: { type: mongoose.Schema.Types.ObjectId, ref: 'Desk', default: null },
    deskAssignedAt: { type: Date, default: null }
});

module.exports = mongoose.model('Student', StudentSchema);
