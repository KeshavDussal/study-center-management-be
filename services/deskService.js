const Desk = require('../models/Desk.js');

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