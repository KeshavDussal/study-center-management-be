const Admin = require('../models/User');

exports.getAdminProfile = async (adminId) => {
    const admin = await Admin.findById(adminId).select('-password');
    if (!admin) throw new Error('Admin not found');
    return admin;
};

exports.updateAdminProfile = async (adminId, updateData) => {
    // Allowed fields to update (name, email)
    const allowedUpdates = ['name', 'email'];
    const updates = {};
    allowedUpdates.forEach(field => {
        if (updateData[field] !== undefined) {
            updates[field] = updateData[field];
        }
    });

    // Use findById first to check admin exists
    const admin = await Admin.findById(adminId);
    if (!admin) throw new Error('Admin not found');

    // Apply updates
    for (const key in updates) {
        admin[key] = updates[key];
    }

    // Save will trigger Mongoose validation & unique email check
    const updatedAdmin = await admin.save();

    // Remove password before returning
    const updatedAdminObj = updatedAdmin.toObject();
    delete updatedAdminObj.password;

    return updatedAdminObj;
};
