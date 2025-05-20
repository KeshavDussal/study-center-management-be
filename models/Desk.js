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
    }
}, { timestamps: true });
module.exports = mongoose.model("Desk", deskSchema);
