const adminService = require('../services/adminService');

exports.getProfile = async (req, res) => {
    try {
        const adminId = req.user.id || req.user._id; // depending on what your token payload has
        const admin = await adminService.getAdminProfile(adminId);
        res.status(200).json(admin);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const adminId = req.user.id || req.user._id;
        const updatedAdmin = await adminService.updateAdminProfile(adminId, req.body);
        res.status(200).json({ message: 'Profile updated successfully', admin: updatedAdmin });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
