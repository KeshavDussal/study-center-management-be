const mongoose = require("mongoose");

const deskSchema = new mongoose.Schema({
    deskNumber: {
        type: String,
        required: true,
        unique: true
    },
    hasSocket: {
        type: Boolean,
        default: false
    },
    status: {               // Add status field to track availability
        type: String,
        enum: ['available', 'occupied'],
        default: 'available'
    }
}, { timestamps: true });
module.exports = mongoose.model("Desk", deskSchema);
